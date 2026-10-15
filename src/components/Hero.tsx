import React from 'react';
import { ArrowRight, Sparkles, BookOpen, CheckCircle, Star } from 'lucide-react';

interface HeroProps {
  onStartLearning: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartLearning }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f0f6ff]/70 via-[#f8fafc] to-[#f8fafc] pt-10 pb-16 lg:pt-14 lg:pb-20">
      {/* Subtle background ambient blur spots */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-sky-200/25 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Subtitle & Start Learning Button */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6 text-left">
            
            {/* Tagline kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 border border-blue-200 text-blue-700 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>កម្មវិធីសិក្សាភាសាទំនើប និងលឿនរហ័ស</span>
            </div>

            {/* Main Headline matching image with OmniLearn */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.25] tracking-tight">
              រៀនភាសា{' '}
              <span className="relative inline-block text-blue-600">
                ជាមួយ<span className="font-black">OmniLearn</span>
                {/* Decorative underline */}
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-blue-400/40" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 9C50 3 150 3 197 9" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Subtitle matching exact Khmer text in the image */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl font-normal">
              សិក្សាភាសាអង់គ្លេស ជប៉ុន កូរ៉េ ជាមួយមេរៀនផ្ដោតគុណភាព ងាយស្រួល ទៅដល់គោលដៅអនាគតរបស់អ្នក!
            </p>

            {/* CTA Button matching image */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onStartLearning}
                id="hero-start-button"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-base sm:text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] rounded-full shadow-[0_10px_25px_-5px_rgba(37,99,235,0.4)] transition-all cursor-pointer whitespace-nowrap"
              >
                <span>ចាប់ផ្ដើមរៀនឥឡូវនេះ</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1.5" />
              </button>

              <div className="flex items-center gap-2 text-xs text-slate-500 pl-1">
                <div className="flex -space-x-1.5">
                  <span className="inline-block w-6 h-6 rounded-full bg-blue-500 border-2 border-white text-[9px] text-white font-bold text-center leading-5">EN</span>
                  <span className="inline-block w-6 h-6 rounded-full bg-rose-500 border-2 border-white text-[9px] text-white font-bold text-center leading-5">JP</span>
                  <span className="inline-block w-6 h-6 rounded-full bg-purple-500 border-2 border-white text-[9px] text-white font-bold text-center leading-5">KR</span>
                </div>
                <span>១០ មេរៀនស្តង់ដារក្នុង ១ ភាសា</span>
              </div>
            </div>

            {/* Trust points */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-slate-200/80 w-full max-w-lg">
              <div>
                <p className="text-xl font-bold text-slate-800">100%</p>
                <p className="text-xs text-slate-500">មេរៀនងាយយល់</p>
              </div>
              <div>
                <p className="text-xl font-bold text-slate-800">10 ជួរ</p>
                <p className="text-xs text-slate-500">មេរៀនជាប្រព័ន្ធ</p>
              </div>
              <div>
                <p className="text-xl font-bold text-slate-800">24/7</p>
                <p className="text-xs text-slate-500">រៀនគ្រប់ពេលវេលា</p>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual with Headphones Student & Floating Motivational Cards */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[490px]">
              
              {/* Outer decorative glow container */}
              <div className="relative rounded-3xl p-2.5 bg-gradient-to-tr from-blue-100/60 via-white to-sky-100/60 shadow-[0_20px_50px_-15px_rgba(59,130,246,0.18)] border border-white">
                
                {/* Main Student Photo */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-inner">
                  <img
                    src="/src/assets/images/hero_student_girl_1792032356398.jpg"
                    alt="សិស្សស្រីរៀនភាសាជាមួយ OmniLearn"
                    className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle contrast gradient at the bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/25 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Note 1 (Top Left): "Small Steps Big Dreams ♡" */}
                <div className="absolute -top-4 -left-3 sm:-left-6 bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-2xl shadow-lg border border-sky-100 rotate-[-4deg] transform hover:rotate-0 transition-transform cursor-default">
                  <div className="flex items-center gap-1.5 font-handwriting text-blue-600 text-lg sm:text-xl font-bold leading-tight">
                    <span>Small Steps</span>
                  </div>
                  <div className="font-handwriting text-blue-500 text-base sm:text-lg font-bold leading-tight flex items-center gap-1">
                    <span>Big Dreams</span>
                    <span className="text-rose-400">♡</span>
                  </div>
                </div>

                {/* Floating Note 2 (Top Right): "Dream Learn Achieve ♡" */}
                <div className="absolute -top-3 -right-2 sm:-right-4 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg border border-slate-100 rotate-[4deg] transform hover:rotate-0 transition-transform cursor-default">
                  <p className="font-handwriting text-slate-800 text-base sm:text-lg font-bold leading-tight">
                    Dream
                  </p>
                  <p className="font-handwriting text-slate-700 text-base sm:text-lg font-bold leading-tight">
                    Learn
                  </p>
                  <p className="font-handwriting text-blue-600 text-base sm:text-lg font-bold leading-tight flex items-center gap-1">
                    Achieve <span className="text-rose-400">♡</span>
                  </p>
                </div>

                {/* Floating Note 3 (Bottom Center): "Better English Brighter Future" */}
                <div className="absolute -bottom-4 right-8 bg-[#1e293b]/90 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-xl border border-slate-700 text-white transform rotate-[-2deg] hover:rotate-0 transition-transform cursor-default">
                  <div className="text-center font-display">
                    <p className="text-[11px] text-blue-300 font-semibold uppercase tracking-wider">Better Language</p>
                    <p className="text-xs sm:text-sm font-bold text-white leading-tight">Brighter Future</p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
