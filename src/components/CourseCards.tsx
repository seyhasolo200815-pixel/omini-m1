import React from 'react';
import { ArrowRight, BookOpen, Globe2, Sparkles } from 'lucide-react';

interface CourseCardsProps {
  selectedLanguage: 'english' | 'japanese' | 'korean';
  onSelectLanguage: (lang: 'english' | 'japanese' | 'korean') => void;
  onStartLearning: (lang: 'english' | 'japanese' | 'korean') => void;
}

export const CourseCards: React.FC<CourseCardsProps> = ({
  selectedLanguage,
  onSelectLanguage,
  onStartLearning,
}) => {
  const cards = [
    {
      id: 'english' as const,
      title: 'English',
      subtitleKhmer: 'រៀនភាសាអង់គ្លេស',
      skills: 'ស្តាប់ | និយាយ | អាន | សរសេរ',
      flag: '🇬🇧',
      countryName: 'United Kingdom',
      levelCount: '៨ កម្រិត (A0–C2)',
      bgGradient: 'from-blue-600 via-indigo-600 to-sky-700',
      badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
      buttonBg: 'bg-[#2563eb] hover:bg-blue-700 shadow-blue-500/25',
      borderColor: 'border-blue-200 hover:border-blue-400',
      activeRing: 'ring-2 ring-blue-500 ring-offset-2',
      illustration: (
        <svg viewBox="0 0 200 120" className="w-full h-full object-cover opacity-25 mix-blend-overlay">
          <path d="M20 120 V70 H40 V120 M50 120 V40 H70 V120 M80 120 V15 H100 V120 M110 120 V50 H130 V120 M140 120 V80 H160 V120 M170 120 V30 H190 V120" fill="currentColor" />
          <circle cx="90" cy="30" r="6" fill="currentColor" />
          <path d="M0 115 Q100 95 200 115" stroke="currentColor" strokeWidth="3" fill="none" />
        </svg>
      )
    },
    {
      id: 'japanese' as const,
      title: 'Japanese',
      subtitleKhmer: 'រៀនភាសាជប៉ុន',
      skills: 'ស្តាប់ | និយាយ | អាន | សរសេរ',
      flag: '🇯🇵',
      countryName: 'Japan · 日本語',
      levelCount: '៥ កម្រិត (N5–N1)',
      bgGradient: 'from-rose-500 via-pink-600 to-red-600',
      badgeBg: 'bg-rose-50 text-rose-700 border-rose-200',
      buttonBg: 'bg-[#f43f5e] hover:bg-rose-600 shadow-rose-500/25',
      borderColor: 'border-rose-200 hover:border-rose-400',
      activeRing: 'ring-2 ring-rose-500 ring-offset-2',
      illustration: (
        <svg viewBox="0 0 200 120" className="w-full h-full object-cover opacity-25 mix-blend-overlay">
          <path d="M20 120 Q100 20 180 120 Z" fill="currentColor" />
          <circle cx="100" cy="50" r="18" fill="currentColor" />
          <path d="M0 120 H200" stroke="currentColor" strokeWidth="4" />
        </svg>
      )
    },
    {
      id: 'korean' as const,
      title: 'Korean',
      subtitleKhmer: 'រៀនភាសាកូរ៉េ',
      skills: 'ស្តាប់ | និយាយ | អាន | សរសេរ',
      flag: '🇰🇷',
      countryName: 'Korea · 한국어',
      levelCount: '៦ កម្រិត (1–6)',
      bgGradient: 'from-purple-600 via-violet-700 to-indigo-800',
      badgeBg: 'bg-purple-50 text-purple-700 border-purple-200',
      buttonBg: 'bg-[#7c3aed] hover:bg-purple-700 shadow-purple-500/25',
      borderColor: 'border-purple-200 hover:border-purple-400',
      activeRing: 'ring-2 ring-purple-500 ring-offset-2',
      illustration: (
        <svg viewBox="0 0 200 120" className="w-full h-full object-cover opacity-25 mix-blend-overlay">
          <path d="M40 120 V60 Q100 40 160 60 V120" fill="currentColor" />
          <path d="M30 60 L100 35 L170 60 Z" fill="currentColor" />
          <circle cx="100" cy="85" r="12" fill="currentColor" />
        </svg>
      )
    },
  ];

  return (
    <section className="py-4 sm:py-8 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Course Cards Grid - Mobile 2-Column Grid Layout */}
        <div className="language-cards-container grid grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-5 lg:gap-6 w-full">
          {cards.map((card, idx) => {
            const isSelected = selectedLanguage === card.id;

            return (
              <div
                key={card.id}
                onClick={() => onSelectLanguage(card.id)}
                className={`group relative overflow-hidden bg-white border ${card.borderColor} shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col w-full ${
                  isSelected ? card.activeRing : ''
                } ${idx === 2 ? 'col-span-2 md:col-span-1 max-w-sm mx-auto md:max-w-none md:mx-0' : ''}`}
                style={{ borderRadius: '16px', boxSizing: 'border-box' }}
              >
                {/* Visual Banner Header with Modern Vector Motif & Flag */}
                <div className={`relative h-28 sm:h-44 md:h-48 overflow-hidden bg-gradient-to-br ${card.bgGradient} text-white flex flex-col justify-between p-2.5 sm:p-5`}>
                  
                  {/* Background Artistic SVG Silhouette */}
                  <div className="absolute inset-0 text-white pointer-events-none">
                    {card.illustration}
                  </div>

                  {/* Top Flag & Language Code Pill */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 sm:gap-2.5">
                      <div className="w-7 h-7 sm:w-11 sm:h-11 rounded-full bg-white shadow-md flex items-center justify-center text-sm sm:text-2xl border-2 border-white/80 shrink-0">
                        <span>{card.flag}</span>
                      </div>
                      <div className="leading-tight">
                        <span className="text-[9px] sm:text-[11px] font-bold text-white/80 block uppercase tracking-wider truncate max-w-[85px] sm:max-w-none">
                          {card.countryName}
                        </span>
                        <span className="text-[10px] sm:text-xs font-extrabold text-white">
                          {card.levelCount}
                        </span>
                      </div>
                    </div>

                    <span className="px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[9px] sm:text-[11px] font-bold uppercase tracking-wider border border-white/20">
                      {card.id}
                    </span>
                  </div>

                  {/* Landmark Title inside banner */}
                  <div className="relative z-10">
                    <div className="flex items-center gap-1 text-[10px] sm:text-xs text-white/90 font-medium">
                      <Sparkles className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-yellow-300" />
                      <span>ពេញនិយម</span>
                    </div>
                    <div className="text-sm sm:text-xl md:text-2xl font-black text-white font-display">
                      {card.title} Course
                    </div>
                  </div>
                </div>

                {/* Card Content with Sharp, Bold Typography */}
                <div className="p-3 sm:p-6 flex flex-col items-center text-center flex-1 justify-between bg-white w-full">
                  <div className="w-full">
                    <h3 className="text-base sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
                      {card.title}
                    </h3>
                    <p className="mt-0.5 sm:mt-1 text-xs sm:text-base md:text-lg font-bold text-slate-800 font-khmer">
                      {card.subtitleKhmer}
                    </p>
                    
                    {/* Skills Separator text */}
                    <div className="mt-2 sm:mt-3.5 py-1.5 px-2 sm:py-2 sm:px-3 rounded-xl bg-slate-50 border border-slate-200/80 text-[10px] sm:text-sm font-semibold text-slate-700 font-khmer flex items-center justify-center gap-1 sm:gap-2">
                      <BookOpen className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-500 shrink-0" />
                      <span className="truncate">{card.skills}</span>
                    </div>
                  </div>

                  {/* Start Learning Button: "ចាប់ផ្ដើមរៀន ->" */}
                  <div className="mt-3 sm:mt-6 w-full flex justify-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onStartLearning(card.id);
                      }}
                      className={`w-full max-w-[220px] py-2 sm:py-2.5 px-3 sm:px-5 rounded-full text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 sm:gap-2 shadow-md transition-all active:scale-95 cursor-pointer ${card.buttonBg}`}
                      style={{ borderRadius: '9999px', boxSizing: 'border-box' }}
                    >
                      <span className="font-khmer">ចាប់ផ្ដើមរៀន</span>
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
