import React, { useState } from 'react';
import { X, Volume2, CheckCircle2, AlertCircle, ArrowRight, RotateCcw, BookOpen, MessageSquare, HelpCircle } from 'lucide-react';
import { LessonUnit, LanguageCourse } from '../data/lessonsData';
import { speakNaturalEnglish } from '../utils/speechEngine';

interface LessonModalProps {
  lesson: LessonUnit;
  course: LanguageCourse;
  isCompleted: boolean;
  onToggleComplete: () => void;
  onClose: () => void;
}

export const LessonModal: React.FC<LessonModalProps> = ({
  lesson,
  course,
  isCompleted,
  onToggleComplete,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'study' | 'quiz'>('study');
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  const speakText = (text: string) => {
    if (course.speechCode.startsWith('en')) {
      speakNaturalEnglish(
        text,
        () => setIsPlayingAudio(true),
        () => setIsPlayingAudio(false)
      );
    } else if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = course.speechCode;
      utterance.rate = 0.8;
      utterance.pitch = 1.0;
      setIsPlayingAudio(true);
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleQuizSubmit = () => {
    if (selectedOption !== null) {
      setQuizSubmitted(true);
      if (selectedOption === lesson.quiz.correctIndex && !isCompleted) {
        onToggleComplete();
      }
    }
  };

  const handleResetQuiz = () => {
    setSelectedOption(null);
    setQuizSubmitted(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-8">
        
        {/* Top Header */}
        <div className="px-6 py-5 bg-gradient-to-r from-blue-600 to-indigo-700 text-white flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-white text-xs font-bold">
                {lesson.unitNumber}
              </span>
              <span className="text-xs text-blue-100">{course.nameKhmer}</span>
            </div>
            <h3 className="text-xl font-bold mt-1 text-white">
              {lesson.titleKhmer}
            </h3>
            <p className="text-xs text-blue-100 font-sans">
              {lesson.titleTarget} · {lesson.duration}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6">
          <button
            onClick={() => setActiveTab('study')}
            className={`py-3 px-4 font-semibold text-sm border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'study'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>ខ្លឹមសារមេរៀន (Study)</span>
          </button>

          <button
            onClick={() => setActiveTab('quiz')}
            className={`py-3 px-4 font-semibold text-sm border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'quiz'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>លំហាត់តេស្ត (Practice Quiz)</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[68vh] overflow-y-auto space-y-6">
          {activeTab === 'study' ? (
            <>
              {/* Pronunciation Section */}
              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                    ការបញ្ចេញសំឡេងគំរូ
                  </span>
                  <button
                    onClick={() => speakText(lesson.pronunciationSample.phrase)}
                    className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm cursor-pointer"
                  >
                    <Volume2 className="w-4 h-4" />
                    <span>{isPlayingAudio ? 'កំពុងអាន...' : 'ចាក់សំឡេង'}</span>
                  </button>
                </div>
                <p className="text-lg font-bold text-slate-900 font-sans">
                  "{lesson.pronunciationSample.phrase}"
                </p>
                <p className="text-xs text-slate-500">
                  សំឡេងអាន៖ <span className="font-medium text-slate-700">{lesson.pronunciationSample.romanization}</span>
                </p>
                <p className="text-xs text-blue-800 font-medium">
                  អត្ថន័យ៖ {lesson.pronunciationSample.khmer}
                </p>
              </div>

              {/* Grammar Focus */}
              <div className="space-y-1.5">
                <h4 className="text-sm font-bold text-slate-900">
                  ចំណុចវេយ្យាករណ៍សំខាន់ (Grammar Point)
                </h4>
                <div className="p-3 bg-amber-50/80 border border-amber-200 rounded-xl text-xs sm:text-sm text-amber-900 font-medium">
                  {lesson.grammarFocus}
                </div>
              </div>

              {/* Vocabulary Table */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-900 flex items-center justify-between">
                  <span>វាក្យសព្ទប្រចាំមេរៀន</span>
                  <span className="text-xs font-normal text-slate-500">ចុចលើរូបបំពងសំឡេងដើម្បីស្តាប់</span>
                </h4>

                <div className="divide-y divide-slate-100 rounded-2xl border border-slate-200 overflow-hidden bg-white">
                  {lesson.vocabulary.map((vocab, idx) => (
                    <div key={idx} className="p-3 hover:bg-slate-50 flex items-center justify-between gap-3">
                      <div className="min-w-0">
                        <div className="flex items-baseline gap-2">
                          <span className="font-bold text-slate-900 text-sm font-sans">{vocab.word}</span>
                          {vocab.reading && (
                            <span className="text-xs text-slate-500">({vocab.reading})</span>
                          )}
                        </div>
                        <p className="text-xs text-emerald-700 font-medium mt-0.5">{vocab.meaningKhmer}</p>
                        <p className="text-[11px] text-slate-500 italic mt-0.5">
                          {vocab.example} · {vocab.exampleKhmer}
                        </p>
                      </div>

                      <button
                        onClick={() => speakText(vocab.word)}
                        className="p-2 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors shrink-0 cursor-pointer"
                        title="ស្តាប់ពាក្យនេះ"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dialogue Transcript */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                  <MessageSquare className="w-4 h-4 text-blue-600" />
                  <span>ការសន្ទនាជាក់ស្តែង (Dialogue)</span>
                </h4>

                <div className="space-y-2.5">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm space-y-1">
                    <span className="font-bold text-blue-700">{lesson.dialogue.speakerA}:</span>
                    <p className="font-semibold text-slate-900 font-sans">{lesson.dialogue.lineA}</p>
                    <p className="text-slate-500 text-xs">{lesson.dialogue.khmerA}</p>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm space-y-1">
                    <span className="font-bold text-emerald-700">{lesson.dialogue.speakerB}:</span>
                    <p className="font-semibold text-slate-900 font-sans">{lesson.dialogue.lineB}</p>
                    <p className="text-slate-500 text-xs">{lesson.dialogue.khmerB}</p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            /* Quiz Tab */
            <div className="space-y-5">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">
                  សំណួរទី ១ (Question 1 of 1)
                </span>
                <h4 className="text-base font-bold text-slate-900 font-sans">
                  {lesson.quiz.question}
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  {lesson.quiz.questionKhmer}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-2.5">
                {lesson.quiz.options.map((opt, oIdx) => {
                  let optStyle = 'border-slate-200 bg-white hover:border-blue-400 hover:bg-blue-50/30';
                  
                  if (selectedOption === oIdx) {
                    optStyle = 'border-blue-600 bg-blue-50 text-blue-900 font-bold';
                  }

                  if (quizSubmitted) {
                    if (oIdx === lesson.quiz.correctIndex) {
                      optStyle = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold';
                    } else if (selectedOption === oIdx) {
                      optStyle = 'border-rose-500 bg-rose-50 text-rose-900 font-bold';
                    }
                  }

                  return (
                    <button
                      key={oIdx}
                      disabled={quizSubmitted}
                      onClick={() => setSelectedOption(oIdx)}
                      className={`w-full p-3.5 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-center justify-between cursor-pointer ${optStyle}`}
                    >
                      <span>{opt}</span>
                      {quizSubmitted && oIdx === lesson.quiz.correctIndex && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Feedback Alert */}
              {quizSubmitted && (
                <div className={`p-4 rounded-xl text-xs sm:text-sm border ${
                  selectedOption === lesson.quiz.correctIndex
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                    : 'bg-rose-50 border-rose-200 text-rose-900'
                }`}>
                  <div className="flex items-center gap-2 font-bold mb-1">
                    {selectedOption === lesson.quiz.correctIndex ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        <span>ចម្លើយត្រឹមត្រូវ! អបអរសាទរ!</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-5 h-5 text-rose-600" />
                        <span>មិនទាន់ត្រឹមត្រូវទេ សូមសាកល្បងម្ដងទៀត!</span>
                      </>
                    )}
                  </div>
                  <p className="text-xs leading-relaxed mt-1">
                    {lesson.quiz.explanation}
                  </p>
                </div>
              )}

              {/* Quiz Submit Button */}
              <div className="flex items-center justify-between pt-2">
                {quizSubmitted ? (
                  <button
                    onClick={handleResetQuiz}
                    className="px-4 py-2 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>ធ្វើឡើងវិញ</span>
                  </button>
                ) : (
                  <button
                    disabled={selectedOption === null}
                    onClick={handleQuizSubmit}
                    className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold text-xs sm:text-sm transition-all shadow-md cursor-pointer"
                  >
                    ពិនិត្យចម្លើយ
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onToggleComplete}
            className={`w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 border transition-all cursor-pointer ${
              isCompleted
                ? 'bg-emerald-100 border-emerald-300 text-emerald-800'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>{isCompleted ? 'បានសម្គាល់ថារៀនចប់' : 'សម្គាល់ថារៀនចប់'}</span>
          </button>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2 rounded-xl bg-slate-900 hover:bg-black text-white text-xs font-semibold cursor-pointer"
          >
            បិទ
          </button>
        </div>

      </div>
    </div>
  );
};
