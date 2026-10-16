import React, { useState } from 'react';
import { ArrowRight, Sparkles, BookOpen, CheckCircle, Star } from 'lucide-react';
import heroStudentImg from '../assets/images/hero_student_girl_1792032356398.jpg';

interface HeroProps {
  onStartLearning: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartLearning }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f0f6ff]/70 via-[#f8fafc] to-[#f8fafc] pt-4 sm:pt-10 pb-8 sm:pb-16 lg:pt-14 lg:pb-20">
      {/* Subtle background ambient blur spots */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-sky-200/25 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Main Hero Container with side-by-side support on mobile */}
        <div className="hero-section grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center w-full">
          
          {/* Left Column: Heading, Subtitle & Start Learning Button (55% on mobile) */}
          <div className="hero-text lg:col-span-6 flex flex-col items-start space-y-2.5 sm:space-y-6 text-left">
            
            {/* Tagline kicker */}
            <div className="inline-flex items-center gap-1 sm:gap-2 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-blue-100/70 border border-blue-200 text-blue-700 text-[10px] sm:text-xs font-semibold">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-600 shrink-0" />
              <span className="truncate">កម្មវិធីសិក្សាភាសាទំនើប</span>
            </div>

            {/* Main Headline matching image with OmniLearn */}
            <h1 className="text-xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.25] tracking-tight">
              រៀនភាសា{' '}
              <span className="relative inline-block text-blue-600">
                ជាមួយ<span className="font-black">OmniLearn</span>
                {/* Decorative underline */}
                <svg className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 sm:h-3 text-blue-400/40" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 9C50 3 150 3 197 9" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Subtitle matching exact Khmer text in the image */}
            <p className="text-xs sm:text-base lg:text-lg text-slate-600 leading-snug sm:leading-relaxed max-w-xl font-normal line-clamp-2 sm:line-clamp-none">
              សិក្សាភាសាអង់គ្លេស ជប៉ុន កូរ៉េ ជាមួយមេរៀនផ្ដោតគុណភាព ងាយស្រួល ទៅដល់គោលដៅអនាគតរបស់អ្នក!
            </p>

            {/* CTA Button */}
            <div className="pt-0.5 sm:pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4 w-full sm:w-auto">
              <button
                onClick={onStartLearning}
                id="hero-start-button"
                className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-3 px-3.5 py-2 sm:px-8 sm:py-3.5 text-xs sm:text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] rounded-full shadow-[0_8px_20px_-4px_rgba(37,99,235,0.4)] transition-all cursor-pointer whitespace-nowrap"
              >
                <span>ចាប់ផ្ដើមរៀន</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500 pl-1">
                <div className="flex -space-x-1.5">
                  <span className="inline-block w-6 h-6 rounded-full bg-blue-500 border-2 border-white text-[9px] text-white font-bold text-center leading-5">EN</span>
                  <span className="inline-block w-6 h-6 rounded-full bg-rose-500 border-2 border-white text-[9px] text-white font-bold text-center leading-5">JP</span>
                  <span className="inline-block w-6 h-6 rounded-full bg-purple-500 border-2 border-white text-[9px] text-white font-bold text-center leading-5">KR</span>
                </div>
                <span>១០ មេរៀនស្តង់ដារក្នុង ១ ភាសា</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual with Headphones Student (45% on mobile) */}
          <div className="hero-image lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[490px]">
              
              {/* Outer decorative glow container */}
              <div className="relative rounded-2xl sm:rounded-3xl p-1.5 sm:p-2.5 bg-gradient-to-tr from-blue-100/60 via-white to-sky-100/60 shadow-[0_15px_35px_-10px_rgba(59,130,246,0.18)] border border-white">
                
                {/* Main Student Photo */}
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-blue-600 via-indigo-600 to-sky-700 shadow-inner flex items-center justify-center">
                  {!imgError ? (
                    <img
                      src={heroStudentImg}
                      alt="សិស្សស្រីរៀនភាសាជាមួយ OmniLearn"
                      className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-500"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <div className="text-white text-center p-4 sm:p-6 flex flex-col items-center justify-center space-y-2 sm:space-y-3">
                      <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                        <BookOpen className="w-5 h-5 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <p className="font-bold text-xs sm:text-lg">OmniLearn Academy</p>
                      <p className="text-[10px] sm:text-xs text-blue-100 max-w-xs">រៀនភាសាអង់គ្លេស ជប៉ុន កូរ៉េ</p>
                    </div>
                  )}
                  {/* Subtle contrast gradient at the bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/25 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Note 1 (Top Left): "Small Steps Big Dreams ♡" */}
                <div className="hidden xs:block absolute -top-2.5 -left-2 sm:-top-4 sm:-left-3 bg-white/95 backdrop-blur-sm px-2 py-1 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg border border-sky-100 rotate-[-4deg] transform scale-75 sm:scale-100 origin-top-left hover:rotate-0 transition-transform cursor-default">
                  <div className="flex items-center gap-1 font-handwriting text-blue-600 text-xs sm:text-xl font-bold leading-tight">
                    <span>Small Steps</span>
                  </div>
                  <div className="font-handwriting text-blue-500 text-[11px] sm:text-lg font-bold leading-tight flex items-center gap-1">
                    <span>Big Dreams</span>
                    <span className="text-rose-400">♡</span>
                  </div>
                </div>

                {/* Floating Note 2 (Top Right): "Dream Learn Achieve ♡" */}
                <div className="hidden xs:block absolute -top-2 -right-1.5 sm:-top-3 sm:-right-2 bg-white/95 backdrop-blur-sm px-2 py-1 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg border border-slate-100 rotate-[4deg] transform scale-75 sm:scale-100 origin-top-right hover:rotate-0 transition-transform cursor-default">
                  <p className="font-handwriting text-slate-800 text-[11px] sm:text-lg font-bold leading-tight">
                    Dream
                  </p>
                  <p className="font-handwriting text-slate-700 text-[11px] sm:text-lg font-bold leading-tight">
                    Learn
                  </p>
                  <p className="font-handwriting text-blue-600 text-[11px] sm:text-lg font-bold leading-tight flex items-center gap-0.5 sm:gap-1">
                    Achieve <span className="text-rose-400">♡</span>
                  </p>
                </div>

                {/* Floating Note 3 (Bottom Center): "Better English Brighter Future" */}
                <div className="hidden xs:block absolute -bottom-2 right-2 sm:-bottom-4 sm:right-8 bg-[#1e293b]/90 backdrop-blur-md px-2.5 py-1 sm:px-4 sm:py-2.5 rounded-lg sm:rounded-xl shadow-lg border border-slate-700 text-white transform scale-75 sm:scale-100 origin-bottom-right rotate-[-2deg] hover:rotate-0 transition-transform cursor-default">
                  <div className="text-center font-display">
                    <p className="text-[9px] sm:text-[11px] text-blue-300 font-semibold uppercase tracking-wider">Better Language</p>
                    <p className="text-[10px] sm:text-sm font-bold text-white leading-tight">Brighter Future</p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Trust points bar placed below side-by-side row */}
        <div className="mt-4 sm:mt-8 pt-3 sm:pt-4 grid grid-cols-3 gap-2 sm:gap-3 border-t border-slate-200/80 w-full max-w-lg mx-auto sm:mx-0">
          <div className="text-center sm:text-left">
            <p className="text-sm sm:text-xl font-bold text-slate-800">100%</p>
            <p className="text-[10px] sm:text-xs text-slate-500">មេរៀនងាយយល់</p>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-sm sm:text-xl font-bold text-slate-800">10 ជួរ</p>
            <p className="text-[10px] sm:text-xs text-slate-500">មេរៀនជាប្រព័ន្ធ</p>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-sm sm:text-xl font-bold text-slate-800">24/7</p>
            <p className="text-[10px] sm:text-xs text-slate-500">រៀនគ្រប់ពេល</p>
          </div>
        </div>

      </div>
    </section>
  );
};
