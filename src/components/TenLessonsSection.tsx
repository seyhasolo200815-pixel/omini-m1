import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Circle, 
  Volume2, 
  BookOpen, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Clock, 
  Sparkles,
  ArrowRight,
  Trophy,
  Play
} from 'lucide-react';
import { COURSES_DATA, LessonUnit, LanguageCourse } from '../data/lessonsData';

interface TenLessonsSectionProps {
  selectedLanguage: 'english' | 'japanese' | 'korean';
  onSelectLanguage: (lang: 'english' | 'japanese' | 'korean') => void;
  onOpenLessonModal: (lesson: LessonUnit, course: LanguageCourse) => void;
  completedLessons: Record<string, number[]>; // courseId -> array of completed lesson IDs
  onToggleComplete: (courseId: string, lessonId: number) => void;
}

export const TenLessonsSection: React.FC<TenLessonsSectionProps> = ({
  selectedLanguage,
  onSelectLanguage,
  onOpenLessonModal,
  completedLessons,
  onToggleComplete,
}) => {
  const [expandedBoxId, setExpandedBoxId] = useState<number | null>(1);
  const [speakingPhrase, setSpeakingPhrase] = useState<string | null>(null);

  const currentCourse = COURSES_DATA[selectedLanguage];
  const completedList = completedLessons[selectedLanguage] || [];
  const completedCount = completedList.length;
  const progressPercent = Math.round((completedCount / 10) * 100);

  // Text-To-Speech helper
  const handleSpeak = (text: string, langCode: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = langCode;
      utterance.rate = 0.9;
      setSpeakingPhrase(text);
      utterance.onend = () => setSpeakingPhrase(null);
      utterance.onerror = () => setSpeakingPhrase(null);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <section id="ten-lessons-section" className="py-12 bg-white border-y border-slate-200 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>កាលវិភាគមេរៀនស្តង់ដារ ១០ ជួរ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            ប្រអប់មេរៀនទាំង ១០ នៃ {currentCourse.nameKhmer}
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            ជ្រើសរើសមេរៀនខាងក្រោមជាជួរដើម្បីចាប់ផ្ដើមរៀន ស្ដាប់សំឡេងដើម អានពាក្យគន្លឹះ និងធ្វើលំហាត់វាស់ស្ទង់សមត្ថភាព
          </p>
        </div>

        {/* Language Tabs & Progress Bar Controls */}
        <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200 mb-8 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Language Switcher Tabs */}
            <div className="flex items-center gap-2 bg-slate-200/70 p-1.5 rounded-xl w-full sm:w-auto overflow-x-auto">
              <button
                onClick={() => onSelectLanguage('english')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  selectedLanguage === 'english'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200/50'
                }`}
              >
                <span>🇬🇧</span>
                <span>English (អង់គ្លេស)</span>
              </button>

              <button
                onClick={() => onSelectLanguage('japanese')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  selectedLanguage === 'japanese'
                    ? 'bg-rose-600 text-white shadow-sm'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200/50'
                }`}
              >
                <span>🇯🇵</span>
                <span>Japanese (ជប៉ុន)</span>
              </button>

              <button
                onClick={() => onSelectLanguage('korean')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  selectedLanguage === 'korean'
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200/50'
                }`}
              >
                <span>🇰🇷</span>
                <span>Korean (កូរ៉េ)</span>
              </button>
            </div>

            {/* Overall Course Progress */}
            <div className="flex items-center gap-3 w-full sm:w-64">
              <div className="flex-1">
                <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                  <span>វឌ្ឍនភាព៖ {completedCount}/10 មេរៀន</span>
                  <span className="text-blue-600 font-bold">{progressPercent}%</span>
                </div>
                <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
              {progressPercent === 100 && (
                <div className="p-1.5 rounded-full bg-amber-100 text-amber-700" title="បញ្ចប់វគ្គសិក្សា!">
                  <Trophy className="w-5 h-5 text-amber-600" />
                </div>
              )}
            </div>

          </div>
        </div>

        {/* 10 LESSON BOXES IN A VERTICAL COLUMN (ប្រអប់10ប្រអប់ជាជួរចុះក្រេាម) */}
        <div className="flex flex-col space-y-4">
          {currentCourse.lessons.map((lesson) => {
            const isCompleted = completedList.includes(lesson.id);
            const isExpanded = expandedBoxId === lesson.id;

            return (
              <div
                key={lesson.id}
                className={`rounded-2xl border transition-all duration-200 bg-white shadow-sm hover:shadow-md overflow-hidden ${
                  isCompleted
                    ? 'border-emerald-200 bg-emerald-50/20'
                    : isExpanded
                    ? 'border-blue-400 ring-1 ring-blue-400'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                {/* Main Box Header Banner */}
                <div className="p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  
                  {/* Left: Unit Number & Titles */}
                  <div className="flex items-start gap-3.5 flex-1">
                    {/* Completion Checkbox */}
                    <button
                      onClick={() => onToggleComplete(currentCourse.id, lesson.id)}
                      className="mt-0.5 text-slate-400 hover:text-emerald-600 transition-colors cursor-pointer shrink-0"
                      title={isCompleted ? 'រៀនចប់ហើយ (ចុចដើម្បីដោះ)' : 'ចុចសម្គាល់ថារៀនចប់'}
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="w-6 h-6 text-emerald-600 fill-emerald-100" />
                      ) : (
                        <Circle className="w-6 h-6 hover:text-slate-600" />
                      )}
                    </button>

                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        {/* Unit Number Badge */}
                        <span className={`px-2.5 py-0.5 rounded-md text-xs font-bold ${
                          isCompleted
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {lesson.unitNumber}
                        </span>

                        <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          {lesson.duration}
                        </span>

                        <span className="text-xs text-slate-500 font-medium">
                          · {lesson.level}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-slate-900 flex flex-wrap items-baseline gap-2">
                        <span>{lesson.titleKhmer}</span>
                        <span className="text-xs sm:text-sm font-semibold text-slate-500 font-sans">
                          ({lesson.titleTarget})
                        </span>
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 line-clamp-2">
                        {lesson.descriptionKhmer}
                      </p>
                    </div>
                  </div>

                  {/* Right Actions: Quick Audio, Expand, and Study Modal Trigger */}
                  <div className="flex items-center gap-2 w-full md:w-auto justify-end pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
                    
                    {/* Quick Native Audio Playback */}
                    <button
                      onClick={() => handleSpeak(lesson.pronunciationSample.phrase, currentCourse.speechCode)}
                      className={`p-2 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1.5 cursor-pointer ${
                        speakingPhrase === lesson.pronunciationSample.phrase
                          ? 'bg-amber-100 text-amber-800 border-amber-300 animate-pulse'
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                      }`}
                      title="ស្តាប់សំឡេងបញ្ចេញសំឡេងដើម"
                    >
                      <Volume2 className="w-4 h-4 text-blue-600" />
                      <span className="hidden sm:inline">ស្តាប់សំឡេង</span>
                    </button>

                    {/* Open Full Lesson Modal */}
                    <button
                      onClick={() => onOpenLessonModal(lesson, currentCourse)}
                      className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>ចូលរៀន</span>
                    </button>

                    {/* Expand/Collapse Accordion */}
                    <button
                      onClick={() => setExpandedBoxId(isExpanded ? null : lesson.id)}
                      className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
                      title={isExpanded ? 'បង្រួញ' : 'ពង្រីកមើលចំណុចសំខាន់'}
                    >
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>

                  </div>

                </div>

                {/* EXPANDED ACCORDION VIEW: Vocabulary, Dialogue & Quick Quiz inside the Box */}
                {isExpanded && (
                  <div className="border-t border-slate-100 bg-slate-50/60 p-4 sm:p-6 space-y-5">
                    
                    {/* Audio Phrase Banner */}
                    <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
                      <div>
                        <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block mb-1">
                          ឃ្លាសំខាន់ប្រចាំមេរៀន (Key Sample Phrase)
                        </span>
                        <p className="text-base sm:text-lg font-bold text-slate-900 font-sans">
                          {lesson.pronunciationSample.phrase}
                        </p>
                        <p className="text-xs text-slate-500 mt-0.5">
                          សំឡេងអាន៖ <span className="font-medium text-slate-700">{lesson.pronunciationSample.romanization}</span>
                        </p>
                        <p className="text-xs text-blue-700 font-medium mt-0.5">
                          ប្រែសម្រួល៖ {lesson.pronunciationSample.khmer}
                        </p>
                      </div>

                      <button
                        onClick={() => handleSpeak(lesson.pronunciationSample.phrase, currentCourse.speechCode)}
                        className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 text-xs font-semibold flex items-center gap-1.5 shrink-0 cursor-pointer"
                      >
                        <Play className="w-3.5 h-3.5 fill-blue-600 text-blue-600" />
                        <span>ចាក់សំឡេង</span>
                      </button>
                    </div>

                    {/* 2-Column Split: Vocabulary and Dialogue */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      
                      {/* Key Vocabulary Table */}
                      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                        <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-slate-100">
                          <h4 className="text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-1.5">
                            <BookOpen className="w-4 h-4 text-emerald-600" />
                            <span>វាក្យសព្ទគន្លឹះ ({lesson.vocabulary.length} ពាក្យ)</span>
                          </h4>
                          <span className="text-[11px] text-slate-400">ពាក្យសំខាន់</span>
                        </div>

                        <div className="space-y-2.5">
                          {lesson.vocabulary.map((vocab, vIdx) => (
                            <div key={vIdx} className="text-xs flex flex-col justify-between p-2 rounded-lg bg-slate-50 hover:bg-slate-100/80 transition-colors">
                              <div className="flex items-center justify-between">
                                <span className="font-bold text-slate-900 font-sans">{vocab.word}</span>
                                <span className="font-medium text-emerald-700">{vocab.meaningKhmer}</span>
                              </div>
                              {vocab.reading && (
                                <span className="text-[11px] text-slate-500 italic">{vocab.reading}</span>
                              )}
                              <p className="text-[11px] text-slate-500 mt-1 italic">
                                ឧ. {vocab.example} ({vocab.exampleKhmer})
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Dialogue Sample */}
                      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-slate-100">
                            <h4 className="text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-1.5">
                              <Sparkles className="w-4 h-4 text-blue-600" />
                              <span>ការសន្ទនាគំរូ (Sample Conversation)</span>
                            </h4>
                            <span className="text-[11px] text-slate-400">ការអនុវត្ត</span>
                          </div>

                          <div className="space-y-3 text-xs">
                            <div className="p-2.5 rounded-lg bg-blue-50/50 border border-blue-100">
                              <div className="flex items-center gap-1.5 font-bold text-blue-900 mb-0.5">
                                <span className="w-4 h-4 rounded-full bg-blue-600 text-white text-[9px] flex items-center justify-center">A</span>
                                <span>{lesson.dialogue.speakerA}</span>
                              </div>
                              <p className="font-medium text-slate-800">{lesson.dialogue.lineA}</p>
                              <p className="text-slate-500 mt-0.5">{lesson.dialogue.khmerA}</p>
                            </div>

                            <div className="p-2.5 rounded-lg bg-emerald-50/50 border border-emerald-100">
                              <div className="flex items-center gap-1.5 font-bold text-emerald-900 mb-0.5">
                                <span className="w-4 h-4 rounded-full bg-emerald-600 text-white text-[9px] flex items-center justify-center">B</span>
                                <span>{lesson.dialogue.speakerB}</span>
                              </div>
                              <p className="font-medium text-slate-800">{lesson.dialogue.lineB}</p>
                              <p className="text-slate-500 mt-0.5">{lesson.dialogue.khmerB}</p>
                            </div>
                          </div>
                        </div>

                        {/* Grammar Focus strip */}
                        <div className="mt-3 pt-2.5 border-t border-slate-100 text-[11px] text-slate-600 flex items-center gap-1.5">
                          <span className="font-bold text-slate-800">វេយ្យាករណ៍៖</span>
                          <span className="truncate">{lesson.grammarFocus}</span>
                        </div>
                      </div>

                    </div>

                    {/* Bottom CTA to open complete interactive modal */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                      <p className="text-xs text-slate-500">
                        ចុច "ចូលរៀនលម្អិត" ដើម្បីបើកផ្ទាំងរៀនពេញលេញ និងធ្វើតេស្តសាកល្បង
                      </p>

                      <button
                        onClick={() => onOpenLessonModal(lesson, currentCourse)}
                        className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-black text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
                      >
                        <span>បើកមេរៀនពេញលេញ និងធ្វើលំហាត់</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
