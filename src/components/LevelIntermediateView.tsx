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
  Trophy, 
  RotateCcw, 
  Check, 
  X, 
  MessageSquare, 
  BookMarked, 
  Lightbulb, 
  Table, 
  CheckCheck,
  FileText,
  Mail,
  Send
} from 'lucide-react';
import { LEVEL_INTERMEDIATE_LESSONS, LevelIntermediateLesson } from '../data/levelIntermediateLessons';
import { speakIntermediateEnglish } from '../utils/speechEngine';

interface LevelIntermediateViewProps {
  onBack: () => void;
}

export const LevelIntermediateView: React.FC<LevelIntermediateViewProps> = ({ onBack }) => {
  const [expandedLessonId, setExpandedLessonId] = useState<number | null>(1);
  const [activeModalLesson, setActiveModalLesson] = useState<LevelIntermediateLesson | null>(null);
  const [completedLessonIds, setCompletedLessonIds] = useState<number[]>([1]);
  const [playingItem, setPlayingItem] = useState<string | null>(null);
  const [selectedQuizOption, setSelectedQuizOption] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);

  // User-specified audio rule: utterance.rate = 0.65 (Medium fluent, clear & natural)
  const handleSpeak = (text: string) => {
    speakIntermediateEnglish(
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

  const progressPercent = Math.round((completedLessonIds.length / LEVEL_INTERMEDIATE_LESSONS.length) * 100);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Navigation Top Bar */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
          <button
            onClick={onBack}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-amber-700 font-semibold text-sm shadow-xs transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>← ថយទៅកម្រិតទាំង ៨ (Back)</span>
          </button>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <span>ភាសាអង់គ្លេស</span>
            <span>/</span>
            <span className="text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md font-bold border border-amber-200">
              កម្រិត ៤ (កម្រិតមធ្យម · Intermediate B1.1)
            </span>
          </div>
        </div>

        {/* Level Header Banner */}
        <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 rounded-3xl p-6 sm:p-8 text-white shadow-lg mb-8 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-52 h-52 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 text-white text-xs font-bold mb-3 backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5 text-yellow-200" />
              <span>កម្រិតមធ្យម (Pre-Intermediate · CEFR B1.1)</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight font-khmer">
              មេរៀនស៊ីជម្រៅទាំង ១២
            </h1>
            
            <p className="mt-2 text-amber-100 text-xs sm:text-sm leading-relaxed font-khmer">
              ខ្លឹមសារស៊ីជម្រៅ និងទូលំទូលាយ៖ Present Perfect (ever/never/already/yet/just), ភាពខុសគ្នានឹង Past Simple, For & Since, Modals (Must, Have to, Should, Might), Past Continuous (When/While), First Conditional, ការបញ្ចេញមតិយោបល់, វាក្យសព្ទការងារ & ការសរសេរអ៊ីមែល, បច្ចេកវិទ្យា & បណ្តាញសង្គម, ១៥ Phrasal Verbs, Question Tags, និង Storytelling។
            </p>

            {/* Progress bar inside banner */}
            <div className="mt-6 p-3.5 bg-white/15 backdrop-blur-md rounded-2xl border border-white/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex-1 w-full">
                <div className="flex justify-between text-xs font-bold text-white mb-1.5">
                  <span>វឌ្ឍនភាពសិក្សា៖ {completedLessonIds.length} / {LEVEL_INTERMEDIATE_LESSONS.length} មេរៀន</span>
                  <span>{progressPercent}%</span>
                </div>
                <div className="w-full bg-amber-950/40 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-yellow-300 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
              {progressPercent === 100 && (
                <div className="flex items-center gap-1.5 text-xs font-bold text-yellow-300 bg-yellow-400/20 px-3 py-1 rounded-full">
                  <Trophy className="w-4 h-4" />
                  <span>បានបញ្ចប់ទាំងស្រុង!</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 12 LESSONS LIST IN A SINGLE COLUMN */}
        <div className="flex flex-col space-y-4">
          {LEVEL_INTERMEDIATE_LESSONS.map((lesson) => {
            const isCompleted = completedLessonIds.includes(lesson.id);
            const isExpanded = expandedLessonId === lesson.id;

            return (
              <div
                key={lesson.id}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden shadow-xs hover:shadow-md ${
                  isCompleted
                    ? 'border-amber-300 bg-amber-50/15'
                    : isExpanded
                    ? 'border-amber-500 ring-1 ring-amber-500'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                {/* Lesson Box Header */}
                <div className="p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  
                  {/* Left: Number & Titles */}
                  <div className="flex items-start gap-3.5 flex-1 min-w-0">
                    <button
                      onClick={() => toggleComplete(lesson.id)}
                      className="mt-0.5 text-slate-300 hover:text-amber-600 transition-colors cursor-pointer shrink-0"
                      title={isCompleted ? 'រៀនចប់ហើយ (ចុចដោះ)' : 'ចុចសម្គាល់ថារៀនចប់'}
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="w-6 h-6 text-amber-600 fill-amber-100" />
                      ) : (
                        <Circle className="w-6 h-6 hover:text-slate-500" />
                      )}
                    </button>

                    <div className="space-y-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`px-2.5 py-0.5 rounded-md text-xs font-bold ${
                          isCompleted
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-amber-50 text-amber-800 border border-amber-200'
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
                      className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
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
                    
                    {/* Grammar Rule Section if exists */}
                    {lesson.grammarRule && (
                      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-amber-100 shadow-xs space-y-3">
                        <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                          <Lightbulb className="w-4 h-4 text-amber-600" />
                          <span>រូបមន្ត និងច្បាប់វេយ្យាករណ៍ (Grammar Formula)</span>
                        </div>
                        
                        <div className="p-3 bg-amber-50/80 border border-amber-200 rounded-xl text-amber-950 font-mono text-xs sm:text-sm font-bold">
                          {lesson.grammarRule.formula}
                        </div>

                        <p className="text-xs sm:text-sm text-slate-700 font-khmer leading-relaxed">
                          {lesson.grammarRule.explanation}
                        </p>

                        {lesson.grammarRule.subRules && (
                          <div className="space-y-2 pt-2 border-t border-slate-100">
                            {lesson.grammarRule.subRules.map((sr, idx) => (
                              <div key={idx} className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1">
                                <span className="font-bold text-slate-900">{sr.title} </span>
                                <span className="font-khmer">{sr.detail}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Grammar Examples with Audio */}
                        {lesson.grammarRule.examples && lesson.grammarRule.examples.length > 0 && (
                          <div className="pt-2">
                            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                              ឧទាហរណ៍ប្រយោគគំរូ (Examples with Audio)
                            </h4>
                            <div className="space-y-2">
                              {lesson.grammarRule.examples.map((ex, eIdx) => (
                                <div
                                  key={eIdx}
                                  className="flex items-start justify-between gap-3 p-3 bg-white hover:bg-amber-50/40 rounded-xl border border-slate-200 transition-colors"
                                >
                                  <div className="space-y-0.5 min-w-0">
                                    <div className="font-bold text-sm text-slate-900 font-sans">
                                      {ex.english}
                                    </div>
                                    <div className="text-xs text-amber-800 font-sans">
                                      សូរសព្ទ៖ {ex.khmerSound}
                                    </div>
                                    <div className="text-xs text-slate-600 font-khmer">
                                      {ex.khmerMeaning}
                                    </div>
                                  </div>

                                  <button
                                    onClick={() => handleSpeak(ex.english)}
                                    className={`p-2 rounded-xl transition-all cursor-pointer shrink-0 ${
                                      playingItem === ex.english
                                        ? 'bg-amber-600 text-white scale-110 shadow-xs ring-2 ring-amber-300'
                                        : 'bg-amber-50 text-amber-800 hover:bg-amber-100'
                                    }`}
                                    title="ស្តាប់សំឡេងអាន"
                                  >
                                    <Volume2 className="w-4 h-4" />
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Table Data (Present Perfect vs Past Simple, For vs Since, or Phrasal Verbs) */}
                    {lesson.tableData && (
                      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                        <div className="bg-slate-100/80 px-4 py-2.5 border-b border-slate-200 flex items-center gap-2 font-bold text-xs text-slate-800">
                          <Table className="w-4 h-4 text-amber-600" />
                          <span>តារាងសិក្សាសំខាន់ (Reference Table)</span>
                        </div>
                        <div className="overflow-x-auto">
                          <table className="w-full text-left text-xs">
                            <thead className="bg-slate-50 border-b border-slate-200 font-bold text-slate-700">
                              <tr>
                                {lesson.tableData.headers.map((h, i) => (
                                  <th key={i} className="px-3 py-2.5">{h}</th>
                                ))}
                                <th className="px-3 py-2.5 text-center">សំឡេង</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                              {lesson.tableData.rows.map((row, rIdx) => (
                                <tr key={rIdx} className="hover:bg-amber-50/30 transition-colors">
                                  {row.map((cell, cIdx) => (
                                    <td key={cIdx} className={`px-3 py-2 ${cIdx === 0 || cIdx === 1 ? 'font-bold text-slate-900 font-sans' : ''}`}>
                                      {cell}
                                    </td>
                                  ))}
                                  <td className="px-3 py-2 text-center">
                                    <button
                                      onClick={() => handleSpeak(row[0])}
                                      className="p-1 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-800 transition-colors cursor-pointer"
                                      title="ស្តាប់សំឡេង"
                                    >
                                      <Volume2 className="w-3.5 h-3.5" />
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    {/* Email Sample if exists (Lesson 8) */}
                    {lesson.emailSample && (
                      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-amber-200 shadow-xs space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                            <Mail className="w-4 h-4 text-amber-600" />
                            <span>គំរូសរសេរអ៊ីមែលផ្លូវការ (Professional Email Sample)</span>
                          </div>
                          <button
                            onClick={() => handleSpeak(lesson.emailSample!.bodyEnglish)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-800 font-bold text-xs transition-colors cursor-pointer"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                            <span>ស្តាប់អត្ថបទអ៊ីមែល</span>
                          </button>
                        </div>

                        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-xs">
                          <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
                            <span className="font-bold text-slate-600">Subject:</span>
                            <span className="font-bold text-slate-900 font-sans">{lesson.emailSample.subject}</span>
                          </div>
                          <div className="whitespace-pre-line font-sans text-slate-800 leading-relaxed py-2">
                            {lesson.emailSample.bodyEnglish}
                          </div>
                          <div className="border-t border-slate-200 pt-2 whitespace-pre-line font-khmer text-slate-600 leading-relaxed text-[11px]">
                            {lesson.emailSample.bodyKhmer}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Paragraph Reading Section if exists (Lesson 9 & Lesson 12) */}
                    {lesson.paragraph && (
                      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-amber-100 shadow-xs space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                            <FileText className="w-4 h-4 text-amber-600" />
                            <span>កថាខណ្ឌអាន៖ {lesson.paragraph.titleKhmer}</span>
                          </div>
                          <button
                            onClick={() => handleSpeak(lesson.paragraph!.englishText)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-800 font-bold text-xs transition-colors cursor-pointer"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                            <span>ស្តាប់កថាខណ្ឌទាំងមូល</span>
                          </button>
                        </div>

                        <div className="p-4 bg-slate-50/80 rounded-xl border border-slate-200 space-y-2">
                          <p className="text-sm font-serif leading-relaxed text-slate-900">
                            "{lesson.paragraph.englishText}"
                          </p>
                          <p className="text-xs font-khmer text-slate-600 leading-relaxed border-t border-slate-200 pt-2">
                            {lesson.paragraph.khmerMeaning}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Dialogue section if exists (Lesson 2, 7, 11) */}
                    {lesson.dialogue && (
                      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-amber-100 shadow-xs space-y-3">
                        <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                          <MessageSquare className="w-4 h-4 text-amber-600" />
                          <span>ការសន្ទនាជាក់ស្តែង (Interactive Dialogue)</span>
                        </div>

                        <div className="space-y-3 pt-1">
                          {lesson.dialogue.map((d, dIdx) => (
                            <div
                              key={dIdx}
                              className={`p-3 rounded-2xl border flex items-start justify-between gap-3 ${
                                dIdx % 2 === 0
                                  ? 'bg-slate-50 border-slate-200'
                                  : 'bg-amber-50/40 border-amber-200'
                              }`}
                            >
                              <div className="space-y-1 min-w-0">
                                <div className="flex items-center gap-2">
                                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                                    dIdx % 2 === 0
                                      ? 'bg-slate-200 text-slate-800'
                                      : 'bg-amber-200 text-amber-900'
                                  }`}>
                                    {d.speaker} ({d.speakerKhmer})
                                  </span>
                                </div>
                                <p className="text-sm font-bold text-slate-900 font-sans">
                                  "{d.text}"
                                </p>
                                <p className="text-xs text-amber-800">
                                  សំឡេង៖ {d.khmerSound}
                                </p>
                                <p className="text-xs text-slate-600 font-khmer">
                                  ន័យខ្មែរ៖ {d.meaningKhmer}
                                </p>
                              </div>

                              <button
                                onClick={() => handleSpeak(d.text)}
                                className={`p-2 rounded-xl transition-all cursor-pointer shrink-0 ${
                                  playingItem === d.text
                                    ? 'bg-amber-600 text-white scale-110 shadow-xs'
                                    : 'bg-white hover:bg-slate-100 text-amber-800 border border-slate-200'
                                }`}
                                title="ស្តាប់ការសន្ទនា"
                              >
                                <Volume2 className="w-4 h-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Vocabulary List */}
                    {lesson.vocabulary.length > 0 && (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5 font-khmer">
                            <BookMarked className="w-4 h-4 text-amber-600" />
                            <span>បញ្ជីវាក្យសព្ទ ({lesson.vocabulary.length} ពាក្យ)</span>
                          </h4>
                          <span className="text-xs text-slate-500">ចុចប៊ូតុងសំឡេង ដើម្បីស្តាប់ការបញ្ចេញសំឡេងច្បាស់ៗ</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {lesson.vocabulary.map((vocab, vIdx) => (
                            <div
                              key={vIdx}
                              className="bg-white p-3.5 rounded-xl border border-slate-200 hover:border-amber-300 transition-all flex items-start justify-between gap-3 shadow-2xs group"
                            >
                              <div className="space-y-1 min-w-0">
                                <div className="flex items-center gap-2">
                                  <span className="font-bold text-base text-slate-900 font-sans group-hover:text-amber-700 transition-colors">
                                    {vocab.word}
                                  </span>
                                </div>
                                <div className="text-xs text-amber-800 font-sans">
                                  សូរសព្ទ៖ {vocab.khmerSound}
                                </div>
                                <div className="text-xs font-semibold text-slate-700 font-khmer">
                                  {vocab.meaningKhmer}
                                </div>
                                {vocab.example && (
                                  <div className="text-[11px] text-slate-500 italic font-sans pt-1 border-t border-slate-100">
                                    ex: "{vocab.example}"
                                  </div>
                                )}
                              </div>

                              <button
                                onClick={() => handleSpeak(vocab.word)}
                                className={`p-2 rounded-xl transition-all cursor-pointer shrink-0 ${
                                  playingItem === vocab.word
                                    ? 'bg-amber-600 text-white scale-110 shadow-xs'
                                    : 'bg-amber-50 hover:bg-amber-100 text-amber-800'
                                }`}
                                title={`ស្តាប់ពាក្យ ${vocab.word}`}
                              >
                                <Volume2 className="w-4 h-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Bottom Action inside accordion: Launch Full Study Modal */}
                    <div className="pt-2 flex justify-between items-center">
                      <button
                        onClick={() => toggleComplete(lesson.id)}
                        className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg border transition-colors cursor-pointer ${
                          isCompleted
                            ? 'bg-amber-100 border-amber-300 text-amber-900'
                            : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        {isCompleted ? <CheckCheck className="w-3.5 h-3.5 text-amber-700" /> : <Circle className="w-3.5 h-3.5" />}
                        <span>{isCompleted ? 'បានរៀនរួចហើយ (ធីកចប់)' : 'សម្គាល់ថារៀនចប់'}</span>
                      </button>

                      <button
                        onClick={() => {
                          setActiveModalLesson(lesson);
                          setSelectedQuizOption(null);
                          setQuizSubmitted(false);
                        }}
                        className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-xl text-white bg-amber-600 hover:bg-amber-700 transition-all shadow-xs cursor-pointer"
                      >
                        <BookOpen className="w-4 h-4" />
                        <span>បើកផ្ទាំងរៀនលម្អិត & ធ្វើតេស្ត (Quiz)</span>
                      </button>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>

      {/* ========================================================================= */}
      {/* FULL LESSON STUDY & QUIZ MODAL                                           */}
      {/* ========================================================================= */}
      {activeModalLesson && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
            
            {/* Modal Header */}
            <div className="p-5 sm:p-6 bg-gradient-to-r from-amber-600 to-orange-700 text-white flex items-center justify-between shrink-0">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-white text-xs font-bold">
                    {activeModalLesson.unitNumber}
                  </span>
                  <span className="text-amber-200 text-xs font-medium">
                    {activeModalLesson.duration}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold font-khmer">
                  {activeModalLesson.titleKhmer}
                </h2>
                <p className="text-xs sm:text-sm text-amber-100 font-sans">
                  {activeModalLesson.titleEnglish}
                </p>
              </div>

              <button
                onClick={() => setActiveModalLesson(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                title="បិទ"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1 text-slate-800">
              
              <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100 text-sm text-amber-950 font-khmer">
                {activeModalLesson.descriptionKhmer}
              </div>

              {/* Grammar Formula if available */}
              {activeModalLesson.grammarRule && (
                <div className="space-y-3 p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <div className="font-bold text-sm text-slate-900 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-amber-600" />
                    <span>រូបមន្តវេយ្យាករណ៍៖</span>
                  </div>
                  <div className="p-3 bg-white border border-amber-200 rounded-xl text-amber-950 font-mono text-xs font-bold">
                    {activeModalLesson.grammarRule.formula}
                  </div>
                  <p className="text-xs text-slate-700 font-khmer leading-relaxed">
                    {activeModalLesson.grammarRule.explanation}
                  </p>
                </div>
              )}

              {/* Vocabulary list with audio */}
              {activeModalLesson.vocabulary.length > 0 && (
                <div className="space-y-3">
                  <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2 font-khmer">
                    <BookMarked className="w-4 h-4 text-amber-600" />
                    <span>វាក្យសព្ទក្នុងមេរៀន ({activeModalLesson.vocabulary.length} ពាក្យ)</span>
                  </h3>

                  <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                    {activeModalLesson.vocabulary.map((v, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3"
                      >
                        <div className="min-w-0">
                          <div className="font-bold text-sm text-slate-900">{v.word}</div>
                          <div className="text-xs text-amber-800 font-sans">
                            សូរសព្ទ៖ {v.khmerSound} · <span className="text-slate-700 font-khmer">{v.meaningKhmer}</span>
                          </div>
                        </div>

                        <button
                          onClick={() => handleSpeak(v.word)}
                          className="p-2 rounded-xl bg-white hover:bg-amber-50 text-amber-800 border border-slate-200 transition-colors cursor-pointer shrink-0"
                          title="ស្តាប់សំឡេង"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Interactive Quiz Section */}
              <div className="pt-4 border-t border-slate-200 space-y-4">
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-amber-600" />
                  <h3 className="font-bold text-base text-slate-900 font-khmer">
                    ធ្វើតេស្តសាកល្បង (Mini Quiz)
                  </h3>
                </div>

                <div className="p-4 sm:p-5 bg-amber-50/60 rounded-2xl border border-amber-200/80 space-y-4">
                  <p className="font-bold text-slate-900 text-sm sm:text-base font-khmer">
                    {activeModalLesson.quiz.question}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeModalLesson.quiz.options.map((opt, oIdx) => {
                      const isSelected = selectedQuizOption === oIdx;
                      const isCorrect = oIdx === activeModalLesson.quiz.correctIndex;

                      let btnStyle = 'bg-white border-slate-200 text-slate-800 hover:border-amber-400';
                      if (quizSubmitted) {
                        if (isCorrect) {
                          btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-800 font-bold';
                        } else if (isSelected && !isCorrect) {
                          btnStyle = 'bg-rose-50 border-rose-500 text-rose-800 line-through';
                        }
                      } else if (isSelected) {
                        btnStyle = 'bg-amber-100 border-amber-500 text-amber-900 font-bold';
                      }

                      return (
                        <button
                          key={oIdx}
                          disabled={quizSubmitted}
                          onClick={() => setSelectedQuizOption(oIdx)}
                          className={`p-3 rounded-xl border text-xs sm:text-sm text-left transition-all cursor-pointer flex items-center justify-between ${btnStyle}`}
                        >
                          <span>{opt}</span>
                          {quizSubmitted && isCorrect && <Check className="w-4 h-4 text-emerald-600" />}
                          {quizSubmitted && isSelected && !isCorrect && <X className="w-4 h-4 text-rose-600" />}
                        </button>
                      );
                    })}
                  </div>

                  {!quizSubmitted ? (
                    <button
                      disabled={selectedQuizOption === null}
                      onClick={() => setQuizSubmitted(true)}
                      className={`w-full py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                        selectedQuizOption !== null
                          ? 'bg-amber-600 text-white hover:bg-amber-700 shadow-xs cursor-pointer'
                          : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                      }`}
                    >
                      ពិនិត្យចម្លើយ (Submit Answer)
                    </button>
                  ) : (
                    <div className="space-y-3 pt-2 animate-in fade-in">
                      <div className={`p-3 rounded-xl text-xs sm:text-sm font-khmer ${
                        selectedQuizOption === activeModalLesson.quiz.correctIndex
                          ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                          : 'bg-rose-100 text-rose-900 border border-rose-300'
                      }`}>
                        <div className="font-bold mb-1">
                          {selectedQuizOption === activeModalLesson.quiz.correctIndex ? '🎉 ចម្លើយត្រឹមត្រូវ!' : '❌ ចម្លើយមិនទាន់ត្រឹមត្រូវទេ'}
                        </div>
                        <div>{activeModalLesson.quiz.explanation}</div>
                      </div>

                      <button
                        onClick={() => {
                          setSelectedQuizOption(null);
                          setQuizSubmitted(false);
                        }}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-amber-700 cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>សាកល្បងម្តងទៀត</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
              <button
                onClick={() => toggleComplete(activeModalLesson.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-colors cursor-pointer ${
                  completedLessonIds.includes(activeModalLesson.id)
                    ? 'bg-amber-100 border-amber-300 text-amber-900'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <CheckCircle2 className="w-4 h-4 text-amber-600" />
                <span>
                  {completedLessonIds.includes(activeModalLesson.id)
                    ? 'បានរៀនរួចហើយ'
                    : 'សម្គាល់ថារៀនចប់'}
                </span>
              </button>

              <button
                onClick={() => setActiveModalLesson(null)}
                className="px-5 py-2 rounded-xl text-xs sm:text-sm font-bold text-white bg-amber-600 hover:bg-amber-700 transition-all cursor-pointer"
              >
                រួចរាល់ (Done)
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
