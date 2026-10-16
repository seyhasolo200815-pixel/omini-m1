import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Volume2, 
  BookOpen, 
  CheckCircle2, 
  Sparkles, 
  Play, 
  Trophy, 
  RotateCcw, 
  Check, 
  X,
  Languages,
  PenTool,
  HelpCircle,
  MessageSquare
} from 'lucide-react';
import { 
  HIRAGANA_GROUPS, 
  KATAKANA_GROUPS, 
  JAPANESE_GREETINGS, 
  JAPANESE_INTRO_DIALOGUE,
  JAPANESE_LEVELS 
} from '../data/japaneseLessonsData';
import { speakJapanese } from '../utils/speechEngine';

interface JapaneseLevelViewProps {
  onBack: () => void;
  initialLevelId?: number;
}

export const JapaneseLevelView: React.FC<JapaneseLevelViewProps> = ({ 
  onBack,
  initialLevelId = 1 
}) => {
  const [activeTab, setActiveTab] = useState<'hiragana' | 'katakana' | 'aisatsu'>(
    initialLevelId === 2 ? 'katakana' : initialLevelId === 3 ? 'aisatsu' : 'hiragana'
  );
  const [playingItem, setPlayingItem] = useState<string | null>(null);
  const [selectedChar, setSelectedChar] = useState<any>(HIRAGANA_GROUPS[0].letters[0]);
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);

  // Play pure Japanese audio at rate = 0.65 (ja-JP)
  const handlePlayJapanese = (text: string) => {
    speakJapanese(
      text,
      () => setPlayingItem(text),
      () => setPlayingItem(null),
      0.65 // User requirement: utterance.rate = 0.65
    );
  };

  // Hiragana Quiz questions
  const quizQuestions = [
    {
      question: 'តើតួអក្សរ «あ» អានជាសំឡេងអ្វី?',
      options: ['អា (A)', 'អ៊ី (I)', 'អ៊ូ (U)', 'អេ (E)'],
      correct: 0,
      explanation: '«あ» គឺជាស្រៈដំបូងបង្អស់ក្នុងតារាង Gojūon អានថា «អា (A)»។',
    },
    {
      question: 'តើតួអក្សរណាជា «កា (Ka)»?',
      options: ['き', 'か', 'く', 'け'],
      correct: 1,
      explanation: '«か» អានថា «ខា/កា (Ka)» ប្រើក្នុងពាក្យ かさ (ឆ័ត្រ)។',
    },
    {
      question: 'ពាក្យ «こんにちは» មានន័យដូចម្តេចជាភាសាខ្មែរ?',
      options: ['អរុណសួស្តី', 'ទិវាសួស្តី / សួស្តី', 'រាត្រីសួស្តី', 'លាហើយ'],
      correct: 1,
      explanation: '«こんにちは (Konnichiwa)» ប្រើសម្រាប់ស្វាគមន៍នៅពេលថ្ងៃ មានន័យថា «ទិវាសួស្តី / សួស្តី»។',
    },
  ];
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);

  const currentQ = quizQuestions[currentQuizIndex];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 py-6 sm:py-8 px-3 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Top Navigation */}
        <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-200">
          <button
            onClick={onBack}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-rose-600 font-semibold text-xs sm:text-sm shadow-xs transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>← ថយទៅកម្រិតជប៉ុនទាំង ៨ (Back)</span>
          </button>

          <div className="flex items-center gap-1.5 sm:gap-2 text-xs font-semibold text-slate-500">
            <span className="text-rose-600 font-bold">ភាសាជប៉ុន (Japanese · 日本語)</span>
            <span>/</span>
            <span className="text-rose-700 bg-rose-50 px-2 py-0.5 rounded-md font-bold">
              {activeTab === 'hiragana' ? 'ប្រអប់ ១ (Hiragana)' : activeTab === 'katakana' ? 'ប្រអប់ ២ (Katakana)' : 'ប្រអប់ ៣ (Aisatsu)'}
            </span>
          </div>
        </div>

        {/* Japanese Hero Banner */}
        <div className="bg-gradient-to-r from-rose-600 via-pink-600 to-red-600 rounded-3xl p-5 sm:p-8 text-white shadow-lg mb-6 sm:mb-8 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold mb-3 backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>ភាសាជប៉ុនពិតប្រាកដ (Japanese Genuine Curriculum)</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight font-khmer">
              រៀនភាសាជប៉ុនពីកម្រិតគ្រឹះ
            </h1>
            
            <p className="mt-2 text-rose-100 text-xs sm:text-sm leading-relaxed font-khmer">
              តួអក្សរ Hiragana (៤៦ តួ), Katakana, វាក្យសព្ទពាក្យកម្ចី, ការស្វាគមន៍ (Aisatsu) និងការណែនាំខ្លួន ជាមួយសំឡេងស្តង់ដារជប៉ុន (ja-JP)។
            </p>

            {/* Level Tabs Switcher */}
            <div className="mt-5 flex flex-wrap gap-2">
              <button
                onClick={() => setActiveTab('hiragana')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'hiragana'
                    ? 'bg-white text-rose-700 shadow-md scale-102'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <span>ប្រអប់ ១: Hiragana (៤៦ តួ)</span>
              </button>

              <button
                onClick={() => setActiveTab('katakana')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'katakana'
                    ? 'bg-white text-rose-700 shadow-md scale-102'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <span>ប្រអប់ ២: Katakana (៤៦ តួ)</span>
              </button>

              <button
                onClick={() => setActiveTab('aisatsu')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'aisatsu'
                    ? 'bg-white text-rose-700 shadow-md scale-102'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <span>ប្រអប់ ៣: ស្វាគមន៍ & ណែនាំខ្លួន</span>
              </button>
            </div>
          </div>
        </div>

        {/* ================================================================= */}
        {/* TAB 1: HIRAGANA 46 CHARACTERS (ប្រអប់ទី ១)                        */}
        {/* ================================================================= */}
        {activeTab === 'hiragana' && (
          <div className="space-y-6">
            
            {/* Stroke Guide & Audio Highlight Card */}
            {selectedChar && (
              <div className="bg-white rounded-2xl border-2 border-rose-300 p-4 sm:p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-5">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center text-4xl sm:text-5xl font-black text-rose-700 shadow-inner">
                    {selectedChar.char}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl sm:text-2xl font-bold text-slate-900 font-sans">
                        Romaji: {selectedChar.romaji}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 text-xs font-bold font-khmer">
                        សំឡេងខ្មែរ៖ {selectedChar.khmerSound}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 font-khmer mt-1 flex items-center gap-1.5">
                      <PenTool className="w-3.5 h-3.5 text-rose-600" />
                      <span><strong>របៀបគូស៖</strong> {selectedChar.strokeCount} គំនូស ({selectedChar.strokeGuide})</span>
                    </p>
                    <p className="text-xs text-slate-500 font-khmer mt-0.5">
                      ឧទាហរណ៍៖ <strong>{selectedChar.exampleWord}</strong> ({selectedChar.exampleReading}) — {selectedChar.exampleKhmer}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto">
                  <button
                    onClick={() => handlePlayJapanese(selectedChar.char)}
                    className="flex-1 md:flex-none px-5 py-3 rounded-full bg-rose-600 hover:bg-rose-700 active:scale-95 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-rose-500/25 transition-all cursor-pointer font-khmer"
                  >
                    <Volume2 className="w-4 h-4" />
                    <span>ស្តាប់សំឡេង «{selectedChar.char}» (ja-JP)</span>
                  </button>
                  <button
                    onClick={() => handlePlayJapanese(selectedChar.exampleWord)}
                    className="flex-1 md:flex-none px-4 py-3 rounded-full bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer font-khmer"
                  >
                    <Volume2 className="w-3.5 h-3.5 text-slate-500" />
                    <span>ស្តាប់ពាក្យ «{selectedChar.exampleWord}»</span>
                  </button>
                </div>
              </div>
            )}

            {/* Complete 46 Hiragana Groups */}
            <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-khmer flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-rose-600" />
                    <span>តារាងតួអក្សរ Hiragana ទាំង ៤៦ តួ (Gojūon)</span>
                  </h3>
                  <p className="text-xs text-slate-500 font-khmer mt-0.5">
                    ចុចលើតួអក្សរនីមួយៗដើម្បីស្តាប់សំឡេងជប៉ុនសុទ្ធ (Rate: 0.65) និងមើលក្បួនគូសបន្ទាត់
                  </p>
                </div>
                <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-1 rounded-md">
                  ៤៦ តួពេញលេញ
                </span>
              </div>

              {HIRAGANA_GROUPS.map((group, gIdx) => (
                <div key={gIdx} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded-md font-sans">
                      {group.rowName} — {group.rowNameKhmer}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {group.letters.length} តួ
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 sm:gap-3">
                    {group.letters.map((item, lIdx) => {
                      const isPlaying = playingItem === item.char;
                      const isSelected = selectedChar?.char === item.char;

                      return (
                        <button
                          key={lIdx}
                          onClick={() => {
                            setSelectedChar(item);
                            handlePlayJapanese(item.char);
                          }}
                          className={`p-3 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center justify-between gap-1 shadow-2xs group ${
                            isSelected
                              ? 'bg-rose-50 border-rose-400 ring-2 ring-rose-300 scale-102'
                              : isPlaying
                              ? 'bg-amber-100 border-amber-400 ring-2 ring-amber-300'
                              : 'bg-slate-50 hover:bg-rose-50/60 border-slate-200 hover:border-rose-300'
                          }`}
                        >
                          <div className="text-3xl font-black text-slate-900 group-hover:text-rose-600 transition-colors">
                            {item.char}
                          </div>

                          <div className="flex items-center gap-1">
                            <span className="text-xs font-bold text-slate-500 font-sans">
                              {item.romaji}
                            </span>
                            <span className="text-[11px] font-bold text-rose-700 font-khmer">
                              ({item.khmerSound})
                            </span>
                          </div>

                          <div className="w-full pt-1 border-t border-slate-200 flex items-center justify-center gap-1 text-[11px] text-slate-600 font-khmer">
                            <Volume2 className={`w-3 h-3 ${isPlaying ? 'text-amber-600 animate-bounce' : 'text-rose-600'}`} />
                            <span className="truncate">{item.exampleWord}</span>
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

        {/* ================================================================= */}
        {/* TAB 2: KATAKANA 46 CHARACTERS & GAIRAIGO (ប្រអប់ទី ២)             */}
        {/* ================================================================= */}
        {activeTab === 'katakana' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-khmer flex items-center gap-2">
                    <Languages className="w-5 h-5 text-orange-600" />
                    <span>តារាងតួអក្សរ Katakana (៤៦ តួ) & វាក្យសព្ទពាក្យកម្ចីប្រចាំថ្ងៃ</span>
                  </h3>
                  <p className="text-xs text-slate-500 font-khmer mt-0.5">
                    Katakana ប្រើសម្រាប់សរសេរពាក្យកម្ចីបរទេស (Gairaigo) ឈ្មោះបរទេស និងសម្លេង Onomatopoeia
                  </p>
                </div>
                <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-md">
                  Katakana 46
                </span>
              </div>

              {KATAKANA_GROUPS.map((group, idx) => (
                <div key={idx} className="space-y-2">
                  <span className="text-xs font-extrabold text-orange-700 bg-orange-50 px-2.5 py-0.5 rounded-md font-sans">
                    {group.row}
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2.5">
                    {group.letters.map((item, kIdx) => {
                      const isPlaying = playingItem === item.char;

                      return (
                        <div
                          key={kIdx}
                          onClick={() => handlePlayJapanese(item.char)}
                          className="p-3 rounded-2xl bg-slate-50 hover:bg-orange-50/70 border border-slate-200 hover:border-orange-300 transition-all flex flex-col justify-between gap-1.5 cursor-pointer group"
                        >
                          <div className="flex items-baseline justify-between">
                            <span className="text-2xl font-black text-slate-900 group-hover:text-orange-600">
                              {item.char}
                            </span>
                            <span className="text-xs font-bold text-slate-400 font-sans">
                              {item.romaji}
                            </span>
                            <span className="text-xs font-bold text-orange-700 font-khmer">
                              {item.khmerSound}
                            </span>
                          </div>

                          <div 
                            onClick={(e) => {
                              e.stopPropagation();
                              handlePlayJapanese(item.exampleLoanword);
                            }}
                            className="pt-1.5 border-t border-slate-200/80 flex items-center justify-between text-xs hover:text-orange-700 transition-colors"
                          >
                            <span className="font-bold text-slate-700 group-hover:text-orange-800">
                              {item.exampleLoanword}
                            </span>
                            <span className="text-[11px] text-slate-500 font-khmer">
                              {item.wordMeaning}
                            </span>
                            <Volume2 className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* TAB 3: AISATSU & JIKOSHOUKAI (ប្រអប់ទី ៣)                          */}
        {/* ================================================================= */}
        {activeTab === 'aisatsu' && (
          <div className="space-y-6">
            
            {/* Daily Greetings Grid */}
            <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-khmer flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-pink-600" />
                    <span>ការស្វាគមន៍សំខាន់ប្រចាំថ្ងៃ (Aisatsu · 挨拶)</span>
                  </h3>
                  <p className="text-xs text-slate-500 font-khmer mt-0.5">
                    ចុចដើម្បីស្តាប់ការបញ្ចេញសំឡេងស្វាគមន៍បែបជប៉ុនពិតប្រាកដ
                  </p>
                </div>
                <span className="text-xs font-bold text-pink-600 bg-pink-50 px-2.5 py-1 rounded-md">
                  Aisatsu
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {JAPANESE_GREETINGS.map((greet, idx) => {
                  const isPlaying = playingItem === greet.phrase;

                  return (
                    <div
                      key={idx}
                      onClick={() => handlePlayJapanese(greet.phrase)}
                      className={`p-3.5 rounded-2xl border transition-all flex items-start justify-between gap-3 cursor-pointer group ${
                        isPlaying
                          ? 'bg-pink-100 border-pink-400 ring-2 ring-pink-300'
                          : 'bg-slate-50 hover:bg-pink-50/70 border-slate-200 hover:border-pink-300'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-pink-700">
                            {greet.phrase}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 font-sans italic">
                          {greet.romaji} ({greet.khmerSound})
                        </p>
                        <p className="text-xs font-semibold text-slate-800 font-khmer">
                          {greet.meaning}
                        </p>
                      </div>

                      <div className="p-2 rounded-full bg-white text-pink-600 shadow-xs shrink-0 group-hover:scale-110 transition-transform">
                        <Volume2 className="w-4 h-4" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Self-Introduction Dialogue */}
            <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs space-y-4">
              <div className="pb-3 border-b border-slate-100">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-khmer flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-rose-600" />
                  <span>ការសន្ទនាណែនាំខ្លួនដំបូង (Jikoshoukai · 自己紹介)</span>
                </h3>
                <p className="text-xs text-slate-500 font-khmer mt-0.5">
                  ការជួបគ្នាលើកដំបូងរវាង Tanaka (ជនជាតិជប៉ុន) និង Sokha (និស្សិតកម្ពុជា)
                </p>
              </div>

              <div className="space-y-3">
                {JAPANESE_INTRO_DIALOGUE.map((line, idx) => (
                  <div
                    key={idx}
                    onClick={() => handlePlayJapanese(line.japanese)}
                    className="p-3.5 rounded-2xl bg-rose-50/40 border border-rose-100 hover:border-rose-300 transition-all flex items-start justify-between gap-3 cursor-pointer group"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-full">
                          {line.speakerName}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-rose-700">
                        {line.japanese}
                      </p>
                      <p className="text-xs text-slate-500 font-sans italic">
                        {line.romaji}
                      </p>
                      <p className="text-xs font-semibold text-slate-700 font-khmer">
                        {line.khmer}
                      </p>
                    </div>

                    <div className="p-2 rounded-full bg-white text-rose-600 shadow-xs shrink-0 group-hover:scale-110 transition-transform">
                      <Volume2 className="w-4 h-4" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Grammar Note: ~は~です */}
            <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl border border-rose-200 p-5 space-y-2">
              <h4 className="font-bold text-sm text-rose-900 font-khmer flex items-center gap-2">
                <span>វេយ្យាករណ៍ដំបូង៖ [A] は [B] です (A គឺជា B)</span>
              </h4>
              <p className="text-xs text-slate-700 font-khmer leading-relaxed">
                • <strong>は (អានថា វ៉ា Wa):</strong> គឺជាធ្នាក់សម្គាល់ប្រធាននៃប្រយោគ (Topic Marker)។<br />
                • <strong>です (Desu):</strong> គឺមានន័យថា «គឺជា» ឬប្រើបញ្ចប់ប្រយោគដោយគួរសម។<br />
                • <strong>ឧទាហរណ៍៖</strong> わたしはソカです (Watashi wa Soka desu = ខ្ញុំឈ្មោះ Sokha)។<br />
                • <strong>ទម្រង់បដិសេធ៖</strong> [A] は [B] ではありません (A មិនមែនជា B ទេ)។<br />
                • <strong>ទម្រង់សំនួរ៖</strong> [A] は [B] ですか (តើ A គឺជា B មែនទេ?)។
              </p>
            </div>

          </div>
        )}

        {/* Interactive Japanese Quiz */}
        <div className="mt-8 bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-rose-600" />
              <h3 className="font-bold text-sm sm:text-base text-slate-900 font-khmer">
                តេស្តសាកល្បងភាសាជប៉ុន (Quiz #{currentQuizIndex + 1})
              </h3>
            </div>
            <span className="text-xs font-bold text-slate-500">
              {currentQuizIndex + 1} / {quizQuestions.length}
            </span>
          </div>

          <p className="font-bold text-sm sm:text-base text-slate-800 font-khmer">
            {currentQ.question}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {currentQ.options.map((opt, oIdx) => {
              const isSelected = quizAnswer === oIdx;
              const isCorrect = oIdx === currentQ.correct;

              return (
                <button
                  key={oIdx}
                  onClick={() => {
                    if (!quizSubmitted) setQuizAnswer(oIdx);
                  }}
                  className={`p-3 rounded-xl border text-left text-xs sm:text-sm font-semibold transition-all cursor-pointer font-khmer flex items-center justify-between ${
                    quizSubmitted
                      ? isCorrect
                        ? 'bg-emerald-50 border-emerald-400 text-emerald-800'
                        : isSelected
                        ? 'bg-rose-50 border-rose-400 text-rose-800'
                        : 'bg-slate-50 border-slate-200 text-slate-400'
                      : isSelected
                      ? 'bg-rose-100 border-rose-400 text-rose-900 ring-2 ring-rose-300'
                      : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                  }`}
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
              onClick={() => {
                if (quizAnswer !== null) setQuizSubmitted(true);
              }}
              disabled={quizAnswer === null}
              className={`w-full py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer font-khmer ${
                quizAnswer !== null
                  ? 'bg-rose-600 hover:bg-rose-700 text-white shadow-md'
                  : 'bg-slate-100 text-slate-400 cursor-not-allowed'
              }`}
            >
              ផ្ទៀងផ្ទាត់ចម្លើយ
            </button>
          ) : (
            <div className="space-y-3 pt-2">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 font-khmer">
                <strong>ការពន្យល់៖</strong> {currentQ.explanation}
              </div>
              <button
                onClick={() => {
                  setQuizSubmitted(false);
                  setQuizAnswer(null);
                  setCurrentQuizIndex((prev) => (prev + 1) % quizQuestions.length);
                }}
                className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs sm:text-sm transition-all cursor-pointer font-khmer flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>សំណួរបន្ទាប់</span>
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
