import React, { useState } from 'react';
import { ArrowLeft, ChevronRight, CheckCircle2, BookOpen, Clock, Sparkles, Volume2, Award, Play } from 'lucide-react';
import { speakNaturalEnglish, speakJapanese } from '../utils/speechEngine';
import { JAPANESE_LEVELS } from '../data/japaneseLessonsData';

export interface LevelItem {
  id: number;
  khmerNumber: string;
  title: string;
  englishTitle?: string;
  japaneseTitle?: string;
  description: string;
  cefr: string;
  lessonsCount: number;
  badge?: {
    text: string;
    type: 'completed' | 'next' | 'standard';
  };
  numBg: string; // Pastel background class for the number box
  numText: string;
  numBorder: string;
  samplePhrases: { text: string; reading?: string; khmer: string }[];
}

interface LevelSelectionViewProps {
  onBack: () => void;
  languageName?: string;
  selectedLanguage?: 'english' | 'japanese' | 'korean';
  onSelectLevelZero?: () => void;
  onSelectLevelBasic?: () => void;
  onSelectLevelElementary?: () => void;
  onSelectLevelIntermediate?: () => void;
  onSelectJapaneseLevel?: (levelId: number) => void;
}

export const LevelSelectionView: React.FC<LevelSelectionViewProps> = ({
  onBack,
  languageName = 'ភាសាអង់គ្លេស (English)',
  selectedLanguage = 'english',
  onSelectLevelZero,
  onSelectLevelBasic,
  onSelectLevelElementary,
  onSelectLevelIntermediate,
  onSelectJapaneseLevel,
}) => {
  const [selectedLevel, setSelectedLevel] = useState<LevelItem | null>(null);
  const [playingAudio, setPlayingAudio] = useState<string | null>(null);

  const englishLevels: LevelItem[] = [
    {
      id: 1,
      khmerNumber: '១',
      title: 'កម្រិតចាប់ផ្ដើមពីសូន្យ',
      englishTitle: 'Absolute Beginner (A0)',
      description: 'A–Z, ពាក្យដំបូង និងប្រយោគសាមញ្ញ។',
      cefr: 'CEFR A0',
      lessonsCount: 10,
      badge: {
        text: 'បានបញ្ចប់',
        type: 'completed',
      },
      numBg: 'bg-emerald-100',
      numText: 'text-emerald-800',
      numBorder: 'border-emerald-200',
      samplePhrases: [
        { text: 'Hello, what is your name?', khmer: 'សួស្តី តើអ្នកឈ្មោះអ្វីដែរ?' },
        { text: 'Nice to meet you!', khmer: 'រីករាយណាស់ដែលបានស្គាល់អ្នក!' },
        { text: 'I am a student.', khmer: 'ខ្ញុំគឺជានិស្សិត/សិស្ស។' },
      ],
    },
    {
      id: 2,
      khmerNumber: '២',
      title: 'កម្រិតមូលដ្ឋាន',
      englishTitle: 'Beginner (A1)',
      description: 'វាក្យសព្ទ វេយ្យាករណ៍ និងការសន្ទនាខ្លីៗ។',
      cefr: 'CEFR A1',
      lessonsCount: 10,
      badge: {
        text: 'បន្ទាប់',
        type: 'next',
      },
      numBg: 'bg-sky-100',
      numText: 'text-sky-800',
      numBorder: 'border-sky-200',
      samplePhrases: [
        { text: 'Where do you work?', khmer: 'តើអ្នកធ្វើការនៅកន្លែងណា?' },
        { text: 'Can I have the menu please?', khmer: 'តើខ្ញុំអាចសុំមើលបញ្ជីមុខម្ហូបបានទេ?' },
        { text: 'What time does the class start?', khmer: 'តើថ្នាក់រៀនចាប់ផ្តើមនៅម៉ោងប៉ុន្មាន?' },
      ],
    },
    {
      id: 3,
      khmerNumber: '៣',
      title: 'កម្រិតមូលដ្ឋានខ្ពស់',
      englishTitle: 'Elementary (A2)',
      description: 'សរសេរកថាខណ្ឌ និងសន្ទនាបានយូរជាងមុន។',
      cefr: 'CEFR A2',
      lessonsCount: 12,
      numBg: 'bg-violet-100',
      numText: 'text-violet-800',
      numBorder: 'border-violet-200',
      samplePhrases: [
        { text: 'I went to Siem Reap last weekend.', khmer: 'ខ្ញុំបានទៅលេងខេត្តសៀមរាបកាលពីចុងសប្តាហ៍មុន។' },
        { text: 'Could you give me some directions?', khmer: 'តើអ្នកអាចប្រាប់ផ្លូវខ្ញុំបន្តិចបានទេ?' },
      ],
    },
    {
      id: 4,
      khmerNumber: '៤',
      title: 'កម្រិតមធ្យម',
      englishTitle: 'Pre-Intermediate (B1.1)',
      description: 'វេយ្យាករណ៍សំខាន់ៗ និងការប្រាស្រ័យទាក់ទងប្រចាំថ្ងៃ។',
      cefr: 'CEFR B1.1',
      lessonsCount: 12,
      numBg: 'bg-amber-100',
      numText: 'text-amber-800',
      numBorder: 'border-amber-200',
      samplePhrases: [
        { text: 'If I have enough free time, I will travel abroad.', khmer: 'ប្រសិនបើខ្ញុំមានពេលទំនេរគ្រប់គ្រាន់ ខ្ញុំនឹងទៅដើរកម្សាន្តនៅក្រៅប្រទេស។' },
        { text: 'I have lived in Phnom Penh for five years.', khmer: 'ខ្ញុំបានរស់នៅរាជធានីភ្នំពេញអស់រយៈពេល ៥ ឆ្នាំមកហើយ។' },
      ],
    },
    {
      id: 5,
      khmerNumber: '៥',
      title: 'កម្រិតមធ្យមខ្ពស់',
      englishTitle: 'Intermediate (B1.2)',
      description: 'អានអត្ថបទវែង ស្តាប់ការសន្ទនា និងសរសេរបានច្បាស់។',
      cefr: 'CEFR B1.2',
      lessonsCount: 20,
      numBg: 'bg-teal-100',
      numText: 'text-teal-800',
      numBorder: 'border-teal-200',
      samplePhrases: [
        { text: 'Although the weather was harsh, we completed the journey.', khmer: 'ទោះបីជាអាកាសធាតុមិនអំណោយផល ក៏ពួកយើងបានបញ្ចប់ដំណើរកម្សាន្តដោយជោគជ័យ។' },
        { text: 'Can you summarize the main findings of this report?', khmer: 'តើអ្នកអាចសង្ខេបចំណុចសំខាន់ៗនៃរបាយការណ៍នេះបានទេ?' },
      ],
    },
    {
      id: 6,
      khmerNumber: '៦',
      title: 'កម្រិតខ្ពស់',
      englishTitle: 'Upper-Intermediate (B2)',
      description: 'ប្រើភាសាក្នុងការងារ ការសិក្សា និងការពិភាក្សា។',
      cefr: 'CEFR B2',
      lessonsCount: 20,
      numBg: 'bg-rose-100',
      numText: 'text-rose-800',
      numBorder: 'border-rose-200',
      samplePhrases: [
        { text: 'The initiative was successfully executed ahead of schedule.', khmer: 'គំនិតផ្តួចផ្តើមនេះត្រូវបានអនុវត្តដោយជោគជ័យមុនកាលវិភាគកំណត់។' },
      ],
    },
    {
      id: 7,
      khmerNumber: '៧',
      title: 'កម្រិតជំនាញ',
      englishTitle: 'Advanced (C1)',
      description: 'បញ្ចេញមតិយោបល់ស៊ីជម្រៅ សរសេរឯកសារផ្លូវការ និងការស្រាវជ្រាវ។',
      cefr: 'CEFR C1',
      lessonsCount: 22,
      numBg: 'bg-indigo-100',
      numText: 'text-indigo-800',
      numBorder: 'border-indigo-200',
      samplePhrases: [
        { text: 'Critical thinking enables learners to dissect complex arguments effectively.', khmer: 'ការគិតបែបស៊ីជម្រៅជួយឱ្យអ្នកសិក្សាអាចវិភាគលើអំណះអំណាងស្មុគស្មាញបានយ៉ាងមានប្រសិទ្ធភាព។' },
      ],
    },
    {
      id: 8,
      khmerNumber: '៨',
      title: 'កម្រិតស្ទាត់ជំនាញពេញលេញ',
      englishTitle: 'Proficient (C2)',
      description: 'ស្ទាត់ជំនាញក្នុងការអាន សរសេរ ស្តាប់ និយាយ និងប្រើភាសាក្នុងស្ថានភាពស្មុគស្មាញ។',
      cefr: 'CEFR C2',
      lessonsCount: 24,
      numBg: 'bg-purple-100',
      numText: 'text-purple-800',
      numBorder: 'border-purple-200',
      samplePhrases: [
        { text: 'Achieving linguistic fluency requires continuous immersion and contextual mastery.', khmer: 'ការទទួលបានភាពស្ទាត់ជំនាញផ្នែកភាសាទាមទារនូវការជ្រមុជខ្លួនរៀនសូត្រជាប់ជានិច្ច។' },
      ],
    },
  ];

  // Pick Japanese levels or English levels based on selected language
  const activeLevels: LevelItem[] = selectedLanguage === 'japanese' 
    ? (JAPANESE_LEVELS as unknown as LevelItem[])
    : englishLevels;

  const handleSpeak = (text: string) => {
    if (selectedLanguage === 'japanese') {
      speakJapanese(
        text,
        () => setPlayingAudio(text),
        () => setPlayingAudio(null),
        0.65 // Japanese requirement rate: 0.65
      );
    } else {
      speakNaturalEnglish(
        text,
        () => setPlayingAudio(text),
        () => setPlayingAudio(null)
      );
    }
  };

  const isJapanese = selectedLanguage === 'japanese';

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 py-6 sm:py-8 px-3 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        
        {/* Navigation & Back Action */}
        <div className="flex items-center justify-between mb-6 sm:mb-8 pb-4 border-b border-slate-200">
          <button
            onClick={onBack}
            className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-blue-600 font-semibold text-xs sm:text-sm shadow-xs transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>← ថយក្រោយ (Back)</span>
          </button>

          {/* Breadcrumb / Course indicator */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <span>ទំព័រដើម</span>
            <span>/</span>
            <span className={`font-bold ${isJapanese ? 'text-rose-600' : 'text-blue-600'}`}>
              {languageName}
            </span>
          </div>
        </div>

        {/* Section Heading */}
        <div className="text-center mb-6 sm:mb-8 space-y-2">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold border ${
            isJapanese 
              ? 'bg-rose-50 border-rose-200 text-rose-700' 
              : 'bg-blue-50 border-blue-200 text-blue-700'
          }`}>
            <Sparkles className={`w-3.5 h-3.5 ${isJapanese ? 'text-rose-600' : 'text-blue-600'}`} />
            <span>
              {isJapanese 
                ? 'ផែនទីសិក្សាភាសាជប៉ុនស្តង់ដារ (JLPT N5–N1 & Hiragana/Katakana)'
                : 'ផែនទីសិក្សាតាមស្តង់ដារអន្តរជាតិ (CEFR Framework A0–C2)'}
            </span>
          </div>
          
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-khmer">
            {isJapanese ? 'កម្រិតសិក្សាទាំង ៨ នៃភាសាជប៉ុន' : 'កម្រិតសិក្សាទាំង ៨'}
          </h1>
          
          <p className="text-xs sm:text-base text-slate-600 max-w-lg mx-auto">
            {isJapanese
              ? 'ជ្រើសរើសប្រអប់មេរៀនចាប់ពី Hiragana, Katakana រហូតដល់កម្រិត JLPT N1 ជាមួយសំឡេងស្តង់ដារជប៉ុន (ja-JP)'
              : 'ជ្រើសរើសកម្រិតដែលស័ក្តិសមនឹងសមត្ថភាពរបស់អ្នក ដើម្បីចាប់ផ្ដើមការរៀនសូត្រជាប្រព័ន្ធ'}
          </p>
        </div>

        {/* List of 8 Level Cards (Single Column) */}
        <div className="flex flex-col space-y-3.5 sm:space-y-4">
          {activeLevels.map((level) => (
            <button
              key={level.id}
              onClick={() => {
                if (isJapanese) {
                  if (onSelectJapaneseLevel) {
                    onSelectJapaneseLevel(level.id);
                  } else {
                    setSelectedLevel(level);
                  }
                } else {
                  if (level.id === 1 && onSelectLevelZero) {
                    onSelectLevelZero();
                  } else if (level.id === 2 && onSelectLevelBasic) {
                    onSelectLevelBasic();
                  } else if (level.id === 3 && onSelectLevelElementary) {
                    onSelectLevelElementary();
                  } else if (level.id === 4 && onSelectLevelIntermediate) {
                    onSelectLevelIntermediate();
                  } else {
                    setSelectedLevel(level);
                  }
                }
              }}
              className="w-full lesson-card card-full-width text-left bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 hover:border-rose-400 hover:shadow-md transition-all duration-200 flex items-center justify-between gap-4 group cursor-pointer active:scale-[0.99]"
              style={{ width: '100%', boxSizing: 'border-box' }}
            >
              {/* Left: Rounded Square with Khmer Number and Pastel Background */}
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${level.numBg} ${level.numText} border ${level.numBorder} flex items-center justify-center font-bold text-2xl sm:text-3xl shrink-0 shadow-xs font-khmer transition-transform group-hover:scale-105`}
              >
                {level.khmerNumber}
              </div>

              {/* Center: Title & Short Description */}
              <div className="flex-1 min-w-0 pr-2">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className={`text-base sm:text-lg font-bold text-slate-900 transition-colors font-khmer truncate ${
                    isJapanese ? 'group-hover:text-rose-600' : 'group-hover:text-blue-600'
                  }`}>
                    {level.title}
                  </h3>
                  <span className="text-xs text-slate-400 font-sans font-medium hidden sm:inline">
                    · {level.englishTitle || level.japaneseTitle}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-snug font-khmer line-clamp-2">
                  {level.description}
                </p>
              </div>

              {/* Right: Status Badge or Chevron Arrow */}
              <div className="flex items-center gap-3 shrink-0">
                {level.badge ? (
                  level.badge.type === 'completed' ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold border border-emerald-200 whitespace-nowrap">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{level.badge.text}</span>
                    </span>
                  ) : (
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border whitespace-nowrap ${
                      isJapanese 
                        ? 'bg-rose-100 text-rose-800 border-rose-200' 
                        : 'bg-blue-100 text-blue-800 border-blue-200'
                    }`}>
                      <Sparkles className={`w-3.5 h-3.5 ${isJapanese ? 'text-rose-600' : 'text-blue-600'}`} />
                      <span>{level.badge.text}</span>
                    </span>
                  )
                ) : (
                  <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-rose-50 flex items-center justify-center transition-colors">
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-rose-600 transition-colors" />
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>

      </div>

      {/* Interactive Level Detail Modal */}
      {selectedLevel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            
            {/* Header */}
            <div className={`p-6 pb-5 text-white flex items-start justify-between ${
              isJapanese 
                ? 'bg-gradient-to-r from-rose-600 to-pink-600' 
                : 'bg-gradient-to-r from-blue-600 to-indigo-700'
            }`}>
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-2xl ${selectedLevel.numBg} ${selectedLevel.numText} border ${selectedLevel.numBorder} flex items-center justify-center font-bold text-2xl shrink-0 font-khmer`}>
                  {selectedLevel.khmerNumber}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-khmer text-white">
                    {selectedLevel.title}
                  </h3>
                  <p className="text-xs text-rose-100 font-sans">
                    {selectedLevel.englishTitle || selectedLevel.japaneseTitle} · {selectedLevel.cefr}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedLevel(null)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-5">
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  គោលដៅ និងខ្លឹមសារ
                </span>
                <p className="text-sm text-slate-700 leading-relaxed font-khmer">
                  {selectedLevel.description}
                </p>
              </div>

              {/* Sample Phrases with Audio */}
              <div className="space-y-2.5">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  ឃ្លាគំរូ និងការបញ្ចេញសំឡេង ({isJapanese ? 'Japanese Audio ja-JP' : 'English Audio'})
                </span>
                <div className="space-y-2">
                  {selectedLevel.samplePhrases.map((phrase, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3 text-xs"
                    >
                      <div>
                        <p className="font-bold text-slate-900 font-sans text-sm">
                          {phrase.text}
                        </p>
                        {phrase.reading && (
                          <p className="text-[11px] text-rose-600 font-sans italic">
                            {phrase.reading}
                          </p>
                        )}
                        <p className="text-slate-500 mt-0.5 font-khmer">
                          {phrase.khmer}
                        </p>
                      </div>
                      <button
                        onClick={() => handleSpeak(phrase.text)}
                        className={`p-2 rounded-lg border transition-all cursor-pointer shrink-0 ${
                          playingAudio === phrase.text
                            ? 'bg-amber-100 text-amber-800 border-amber-300 animate-pulse'
                            : isJapanese
                            ? 'bg-white hover:bg-rose-50 text-rose-600 border-slate-200'
                            : 'bg-white hover:bg-blue-50 text-blue-600 border-slate-200'
                        }`}
                        title="ស្តាប់សំឡេងអាន"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Level Details Grid */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5">
                  <BookOpen className="w-4 h-4 text-blue-600" />
                  <div>
                    <p className="text-[11px] text-slate-500">ចំនួនមេរៀន</p>
                    <p className="text-xs font-bold text-slate-800 font-khmer">
                      {selectedLevel.lessonsCount} មេរៀន
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-100 flex items-center gap-2.5">
                  <Award className="w-4 h-4 text-emerald-600" />
                  <div>
                    <p className="text-[11px] text-slate-500">ស្តង់ដារ</p>
                    <p className="text-xs font-bold text-slate-800">{selectedLevel.cefr}</p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => {
                    const levelId = selectedLevel.id;
                    setSelectedLevel(null);
                    if (isJapanese) {
                      onSelectJapaneseLevel?.(levelId);
                    } else {
                      if (levelId === 1 && onSelectLevelZero) {
                        onSelectLevelZero();
                      } else if (levelId === 2 && onSelectLevelBasic) {
                        onSelectLevelBasic();
                      } else if (levelId === 3 && onSelectLevelElementary) {
                        onSelectLevelElementary();
                      } else if (levelId === 4 && onSelectLevelIntermediate) {
                        onSelectLevelIntermediate();
                      }
                    }
                  }}
                  className={`w-full py-3 rounded-full text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer font-khmer ${
                    isJapanese 
                      ? 'bg-rose-600 hover:bg-rose-700 shadow-rose-500/25' 
                      : 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/25'
                  }`}
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>ចូលរៀនកម្រិត {selectedLevel.khmerNumber} ឥឡូវនេះ</span>
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
};
