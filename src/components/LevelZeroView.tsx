import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Volume2, 
  CheckCircle2, 
  Circle, 
  BookOpen, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Clock, 
  Sparkles, 
  Play, 
  Trophy,
  RotateCcw,
  Check,
  X
} from 'lucide-react';
import { LEVEL_ZERO_LESSONS, LevelZeroLesson } from '../data/levelZeroLessons';
import { speakTeacherLetter, speakNaturalEnglish } from '../utils/speechEngine';

interface LevelZeroViewProps {
  onBack: () => void;
}

export const LevelZeroView: React.FC<LevelZeroViewProps> = ({ onBack }) => {
  const [expandedLessonId, setExpandedLessonId] = useState<number | null>(1);
  const [activeModalLesson, setActiveModalLesson] = useState<LevelZeroLesson | null>(null);
  const [completedLessonIds, setCompletedLessonIds] = useState<number[]>([1]);
  const [playingItem, setPlayingItem] = useState<string | null>(null);
  const [selectedQuizOption, setSelectedQuizOption] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);

  // Dedicated Letter + Khmer Sound Audio Teacher Function
  // Format: [Letter name] + [Khmer sound], Slow, Warm, Human voice, NO Apple/Book/Cat
  const handleSpeakLetter = (letter: string, khmerSound: string) => {
    speakTeacherLetter(
      letter,
      khmerSound,
      () => setPlayingItem(letter),
      () => setPlayingItem(null)
    );
  };

  // Natural English speech for vocabulary & phrases
  const handleSpeakEnglish = (text: string) => {
    speakNaturalEnglish(
      text,
      () => setPlayingItem(text),
      () => setPlayingItem(null)
    );
  };

  const toggleComplete = (id: number) => {
    setCompletedLessonIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const progressPercent = Math.round((completedLessonIds.length / LEVEL_ZERO_LESSONS.length) * 100);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Navigation Top Bar */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
          <button
            onClick={onBack}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-blue-600 font-semibold text-sm shadow-xs transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>← ថយទៅកម្រិតទាំង ៨ (Back)</span>
          </button>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <span>ភាសាអង់គ្លេស</span>
            <span>/</span>
            <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md font-bold">
              កម្រិត ១ (ចាប់ផ្ដើមពីសូន្យ)
            </span>
          </div>
        </div>

        {/* Level Header Banner */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-3xl p-6 sm:p-8 text-white shadow-lg mb-8 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold mb-3 backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>កម្រិតចាប់ផ្ដើមពីសូន្យ (Absolute Beginner · A0)</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight font-khmer">
              មេរៀនគ្រឹះទាំង ១០
            </h1>
            
            <p className="mt-2 text-emerald-100 text-xs sm:text-sm leading-relaxed font-khmer">
              រៀបចំជាពិសេសសម្រាប់អ្នកចាប់ផ្តើមដំបូង៖ A–Z, ការបញ្ចេញសំឡេង Phonics, ពាក្យដំបូង និងប្រយោគសាមញ្ញប្រចាំថ្ងៃ។
            </p>

            {/* Progress bar inside banner */}
            <div className="mt-6 p-3.5 bg-white/15 backdrop-blur-md rounded-2xl border border-white/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex-1 w-full">
                <div className="flex justify-between text-xs font-bold text-white mb-1.5">
                  <span>វឌ្ឍនភាពសិក្សា៖ {completedLessonIds.length} / {LEVEL_ZERO_LESSONS.length} មេរៀន</span>
                  <span>{progressPercent}%</span>
                </div>
                <div className="w-full bg-emerald-950/40 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
              {progressPercent === 100 && (
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300 bg-amber-400/20 px-3 py-1 rounded-full">
                  <Trophy className="w-4 h-4" />
                  <span>បានបញ្ចប់ទាំងស្រុង!</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 10 LESSONS LIST IN A SINGLE COLUMN */}
        <div className="flex flex-col space-y-4">
          {LEVEL_ZERO_LESSONS.map((lesson) => {
            const isCompleted = completedLessonIds.includes(lesson.id);
            const isExpanded = expandedLessonId === lesson.id;

            return (
              <div
                key={lesson.id}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden shadow-xs hover:shadow-md ${
                  isCompleted
                    ? 'border-emerald-200 bg-emerald-50/15'
                    : isExpanded
                    ? 'border-emerald-500 ring-1 ring-emerald-500'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                {/* Lesson Box Header */}
                <div className="p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  
                  {/* Left: Number & Titles */}
                  <div className="flex items-start gap-3.5 flex-1 min-w-0">
                    <button
                      onClick={() => toggleComplete(lesson.id)}
                      className="mt-0.5 text-slate-300 hover:text-emerald-600 transition-colors cursor-pointer shrink-0"
                      title={isCompleted ? 'រៀនចប់ហើយ (ចុចដោះ)' : 'ចុចសម្គាល់ថារៀនចប់'}
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="w-6 h-6 text-emerald-600 fill-emerald-100" />
                      ) : (
                        <Circle className="w-6 h-6 hover:text-slate-500" />
                      )}
                    </button>

                    <div className="space-y-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`px-2.5 py-0.5 rounded-md text-xs font-bold ${
                          isCompleted
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-emerald-50 text-emerald-700 border border-emerald-200/80'
                        }`}>
                          {lesson.unitNumber}
                        </span>

                        <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          {lesson.duration}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-slate-900 flex flex-wrap items-baseline gap-2 font-khmer">
                        <span>{lesson.titleKhmer}</span>
                        <span className="text-xs sm:text-sm font-semibold text-slate-500 font-sans">
                          ({lesson.titleEnglish})
                        </span>
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 font-khmer">
                        {lesson.descriptionKhmer}
                      </p>
                    </div>
                  </div>

                  {/* Right: Quick Actions */}
                  <div className="flex items-center gap-2 w-full md:w-auto justify-end pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
                    <button
                      onClick={() => {
                        setActiveModalLesson(lesson);
                        setSelectedQuizOption(null);
                        setQuizSubmitted(false);
                      }}
                      className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>ចូលរៀន</span>
                    </button>

                    <button
                      onClick={() => setExpandedLessonId(isExpanded ? null : lesson.id)}
                      className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
                      title={isExpanded ? 'បង្រួញ' : 'ពង្រីកមើលខ្លឹមសារ'}
                    >
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>

                </div>

                {/* EXPANDED ACCORDION VIEW */}
                {isExpanded && (
                  <div className="border-t border-slate-100 bg-slate-50/70 p-4 sm:p-6 space-y-6">
                    
                    {/* SPECIAL HIGHLIGHT FOR LESSON 1: Alphabet & Phonics Groups specified by the user */}
                    {lesson.id === 1 && lesson.alphabetGroups && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                          <div>
                            <h4 className="text-sm font-bold text-slate-900 font-khmer flex items-center gap-2">
                              <Sparkles className="w-4 h-4 text-emerald-600" />
                              <span>តារាងតួអក្សរ A ដល់ Z និងសំឡេង Phonics</span>
                            </h4>
                            <p className="text-xs text-slate-500 mt-0.5">
                              ចុចលើកាតអក្សរនីមួយៗដើម្បីស្តាប់សំឡេងគ្រូបង្រៀន (ឧទាហរណ៍៖ "A, អេ")
                            </p>
                          </div>
                          <span className="text-xs bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full font-bold">
                            ២៦ តួអក្សរ
                          </span>
                        </div>

                        {/* 5 Alphabet Groups: A-E, F-J, K-O, P-T, U-Z */}
                        <div className="space-y-4">
                          {lesson.alphabetGroups.map((group, gIdx) => (
                            <div key={gIdx} className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-2xs">
                              <div className="flex items-center justify-between mb-2.5">
                                <span className="text-xs font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md font-sans">
                                  ក្រុម {group.groupName}
                                </span>
                                <span className="text-[11px] text-slate-400 font-khmer">
                                  សំឡេង៖ [ឈ្មោះអក្សរ] + [សំឡេងអានខ្មែរ]
                                </span>
                              </div>

                              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                                {group.letters.map((item, lIdx) => {
                                  const isPlaying = playingItem === item.letter;
                                  return (
                                    <button
                                      key={lIdx}
                                      onClick={() => handleSpeakLetter(item.letter, item.khmerSound)}
                                      className={`p-3.5 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center justify-between gap-1.5 shadow-2xs group/btn ${
                                        isPlaying
                                          ? 'bg-amber-100 border-amber-400 ring-2 ring-amber-300 scale-105'
                                          : 'bg-slate-50 hover:bg-emerald-50/70 border-slate-200 hover:border-emerald-400'
                                      }`}
                                      title={`ចុចស្តាប់ "${item.letter}, ${item.khmerSound}"`}
                                    >
                                      <div className="flex items-baseline gap-1">
                                        <span className="text-2xl font-black text-slate-900 font-sans group-hover/btn:text-emerald-700">
                                          {item.letter}
                                        </span>
                                        <span className="text-sm font-semibold text-slate-400 font-sans">
                                          {item.letter.toLowerCase()}
                                        </span>
                                      </div>

                                      <div className="px-2.5 py-0.5 rounded-full bg-emerald-100/90 text-emerald-800 text-xs font-bold font-khmer">
                                        {item.khmerSound}
                                      </div>

                                      <div className="w-full pt-1.5 border-t border-slate-200/80 flex items-center justify-center gap-1.5 text-[11px] text-slate-500 font-khmer font-medium">
                                        <Volume2 className={`w-3.5 h-3.5 ${isPlaying ? 'text-amber-700 animate-bounce' : 'text-emerald-600'}`} />
                                        <span>{item.letter}, {item.khmerSound}</span>
                                      </div>
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Vocabulary section */}
                    <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-khmer flex items-center gap-1.5">
                          <BookOpen className="w-4 h-4 text-emerald-600" />
                          <span>វាក្យសព្ទសំខាន់ប្រចាំមេរៀន (Key Vocabulary)</span>
                        </h4>
                        <span className="text-[11px] text-slate-400">ពាក្យ + សំឡេងអាន</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                        {lesson.vocabulary.map((vocab, vIdx) => (
                          <div
                            key={vIdx}
                            onClick={() => handleSpeakEnglish(vocab.word)}
                            className="p-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50/50 border border-slate-200/80 hover:border-emerald-300 transition-all flex items-center justify-between gap-2 cursor-pointer group"
                          >
                            <div>
                              <div className="flex items-baseline gap-1.5">
                                <span className="font-bold text-slate-900 text-xs sm:text-sm font-sans">
                                  {vocab.word}
                                </span>
                                <span className="text-[11px] text-emerald-700 font-khmer font-medium">
                                  ({vocab.khmerSound})
                                </span>
                              </div>
                              <p className="text-[11px] text-slate-600 font-khmer mt-0.5">
                                {vocab.meaningKhmer}
                              </p>
                            </div>
                            <Volume2 className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 shrink-0" />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Phrases with Audio */}
                    <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-khmer flex items-center gap-1.5 pb-2 border-b border-slate-100">
                        <Volume2 className="w-4 h-4 text-emerald-600" />
                        <span>ប្រយោគគំរូ និងការបញ្ចេញសំឡេង (Sample Phrases)</span>
                      </h4>

                      <div className="space-y-2">
                        {lesson.samplePhrases.map((phrase, pIdx) => (
                          <div
                            key={pIdx}
                            className="p-3 rounded-xl bg-emerald-50/40 border border-emerald-100 flex items-start sm:items-center justify-between gap-3 text-xs"
                          >
                            <div>
                              <p className="font-bold text-slate-900 font-sans text-xs sm:text-sm">
                                {phrase.english}
                              </p>
                              <p className="text-slate-500 mt-0.5 font-khmer">
                                សំឡេងអាន៖ <span className="font-medium text-slate-700">{phrase.khmerSound}</span>
                              </p>
                              <p className="text-emerald-800 font-medium font-khmer mt-0.5">
                                ប្រែថា៖ {phrase.khmerMeaning}
                              </p>
                            </div>

                            <button
                              onClick={() => handleSpeakEnglish(phrase.english)}
                              className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold flex items-center gap-1 shadow-2xs shrink-0 cursor-pointer"
                            >
                              <Play className="w-3 h-3 fill-white" />
                              <span>ចាក់សំឡេង</span>
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom CTA to open detailed lesson modal */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                      <p className="text-xs text-slate-500 font-khmer">
                        ចុច «ចូលរៀនលម្អិត» ដើម្បីធ្វើតេស្តសាកល្បង និងផ្ទៀងផ្ទាត់ចំណេះដឹង
                      </p>

                      <button
                        onClick={() => {
                          setActiveModalLesson(lesson);
                          setSelectedQuizOption(null);
                          setQuizSubmitted(false);
                        }}
                        className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-black text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
                      >
                        <BookOpen className="w-4 h-4" />
                        <span>បើកមេរៀនពេញលេញ និងធ្វើលំហាត់</span>
                      </button>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>

      {/* FULL LESSON STUDY & QUIZ MODAL */}
      {activeModalLesson && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-8">
            
            {/* Modal Header */}
            <div className="p-6 pb-5 bg-gradient-to-r from-emerald-600 to-teal-700 text-white flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-white text-xs font-bold">
                    {activeModalLesson.unitNumber}
                  </span>
                  <span className="text-xs text-emerald-100">កម្រិតចាប់ផ្ដើមពីសូន្យ</span>
                </div>
                <h3 className="text-xl font-bold mt-1 text-white font-khmer">
                  {activeModalLesson.titleKhmer}
                </h3>
                <p className="text-xs text-emerald-100 font-sans">
                  {activeModalLesson.titleEnglish} · {activeModalLesson.duration}
                </p>
              </div>

              <button
                onClick={() => setActiveModalLesson(null)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 max-h-[68vh] overflow-y-auto space-y-6">
              
              {/* Grammar / Core Rule Note */}
              <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200">
                <span className="text-xs font-bold text-amber-900 uppercase tracking-wider block mb-1">
                  ចំណុចសំខាន់ (Key Rule)
                </span>
                <p className="text-xs sm:text-sm text-amber-900 leading-relaxed font-khmer font-medium">
                  {activeModalLesson.grammarOrKeyRule}
                </p>
              </div>

              {/* Vocabulary List */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-900 font-khmer flex items-center justify-between">
                  <span>វាក្យសព្ទប្រចាំមេរៀន</span>
                  <span className="text-xs text-slate-400 font-normal">ចុចដើម្បីស្តាប់</span>
                </h4>

                <div className="divide-y divide-slate-100 rounded-2xl border border-slate-200 overflow-hidden bg-white">
                  {activeModalLesson.vocabulary.map((vocab, vIdx) => (
                    <div
                      key={vIdx}
                      onClick={() => handleSpeakEnglish(vocab.word)}
                      className="p-3 hover:bg-emerald-50/40 flex items-center justify-between gap-3 cursor-pointer transition-colors"
                    >
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="font-bold text-slate-900 text-sm font-sans">{vocab.word}</span>
                          <span className="text-xs text-emerald-700 font-khmer">({vocab.khmerSound})</span>
                        </div>
                        <p className="text-xs text-slate-600 font-khmer mt-0.5">{vocab.meaningKhmer}</p>
                        <p className="text-[11px] text-slate-400 italic mt-0.5 font-sans">ឧ. {vocab.example}</p>
                      </div>

                      <Volume2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Practice Quiz */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                    លំហាត់តេស្តស្ទង់សមត្ថភាព (Quiz)
                  </span>
                  <HelpCircle className="w-4 h-4 text-slate-400" />
                </div>

                <div>
                  <h5 className="text-sm sm:text-base font-bold text-slate-900 font-sans">
                    {activeModalLesson.quiz.question}
                  </h5>
                  <p className="text-xs text-slate-500 mt-0.5 font-khmer">
                    {activeModalLesson.quiz.questionKhmer}
                  </p>
                </div>

                <div className="space-y-2">
                  {activeModalLesson.quiz.options.map((opt, oIdx) => {
                    let optStyle = 'border-slate-200 bg-white hover:border-emerald-300';
                    if (selectedQuizOption === oIdx) {
                      optStyle = 'border-emerald-600 bg-emerald-50 text-emerald-900 font-bold';
                    }
                    if (quizSubmitted) {
                      if (oIdx === activeModalLesson.quiz.correctIndex) {
                        optStyle = 'border-emerald-600 bg-emerald-100 text-emerald-900 font-bold';
                      } else if (selectedQuizOption === oIdx) {
                        optStyle = 'border-rose-500 bg-rose-50 text-rose-900 font-bold';
                      }
                    }

                    return (
                      <button
                        key={oIdx}
                        disabled={quizSubmitted}
                        onClick={() => setSelectedQuizOption(oIdx)}
                        className={`w-full p-3 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-center justify-between cursor-pointer ${optStyle}`}
                      >
                        <span>{opt}</span>
                        {quizSubmitted && oIdx === activeModalLesson.quiz.correctIndex && (
                          <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Feedback */}
                {quizSubmitted && (
                  <div className={`p-3.5 rounded-xl text-xs sm:text-sm border font-khmer ${
                    selectedQuizOption === activeModalLesson.quiz.correctIndex
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                      : 'bg-rose-50 border-rose-200 text-rose-900'
                  }`}>
                    <p className="font-bold mb-0.5">
                      {selectedQuizOption === activeModalLesson.quiz.correctIndex
                        ? 'ចម្លើយត្រឹមត្រូវ! អបអរសាទរ!'
                        : 'មិនទាន់ត្រឹមត្រូវទេ សូមព្យាយាមម្តងទៀត!'}
                    </p>
                    <p className="text-xs leading-relaxed">{activeModalLesson.quiz.explanation}</p>
                  </div>
                )}

                {/* Submit Quiz button */}
                <div className="pt-1 flex items-center justify-between">
                  {quizSubmitted ? (
                    <button
                      onClick={() => {
                        setSelectedQuizOption(null);
                        setQuizSubmitted(false);
                      }}
                      className="px-4 py-2 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-semibold flex items-center gap-1.5 cursor-pointer font-khmer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>សាកល្បងឡើងវិញ</span>
                    </button>
                  ) : (
                    <button
                      disabled={selectedQuizOption === null}
                      onClick={() => {
                        setQuizSubmitted(true);
                        if (selectedQuizOption === activeModalLesson.quiz.correctIndex) {
                          if (!completedLessonIds.includes(activeModalLesson.id)) {
                            toggleComplete(activeModalLesson.id);
                          }
                        }
                      }}
                      className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-semibold text-xs sm:text-sm transition-all shadow-xs cursor-pointer font-khmer"
                    >
                      ពិនិត្យចម្លើយ
                    </button>
                  )}
                </div>

              </div>

            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={() => toggleComplete(activeModalLesson.id)}
                className={`w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 border transition-all cursor-pointer font-khmer ${
                  completedLessonIds.includes(activeModalLesson.id)
                    ? 'bg-emerald-100 border-emerald-300 text-emerald-800'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>
                  {completedLessonIds.includes(activeModalLesson.id) ? 'បានសម្គាល់ថារៀនចប់' : 'សម្គាល់ថារៀនចប់'}
                </span>
              </button>

              <button
                onClick={() => setActiveModalLesson(null)}
                className="w-full sm:w-auto px-6 py-2 rounded-xl bg-slate-900 hover:bg-black text-white text-xs font-semibold cursor-pointer font-khmer"
              >
                បិទ
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
