import React from 'react';
import { GraduationCap, CheckCircle } from 'lucide-react';

interface WhyChooseUsProps {
  onStartNow: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onStartNow }) => {
  const points = [
    'មេរៀនរៀបចំតាមកម្រិតស្តង់ដារ',
    'មានការធ្វើលំហាត់ និងសកម្មភាព',
    'បរិយាកាសរៀនសកម្មភាព',
    'តម្លៃសមរម្យ និងមានការបញ្ចុះតម្លៃពិសេស',
  ];

  return (
    <section id="why-choose-us" className="py-14 sm:py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Graduation Cap Icon + Headline + Subtitle */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                <GraduationCap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-khmer">
                ហេតុអ្វីជ្រើសរើស <span className="text-blue-600">OmniLearn</span> ?
              </h3>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-khmer">
              យើងផ្ដល់ជូននូវមេរៀនភាសាដែលមានគុណភាព សម្បូរបែប និងងាយស្រួល ជួយអ្នកឱ្យសម្រេចក្តីសុបិនរបស់អ្នក
            </p>
          </div>

          {/* Middle Column: 4 Green Checkmark Bullet Points */}
          <div className="lg:col-span-4 space-y-3.5">
            {points.map((point, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-4 h-4 text-white fill-emerald-500" />
                </div>
                <span className="text-sm sm:text-[15px] font-semibold text-slate-800 font-khmer">
                  {point}
                </span>
              </div>
            ))}
          </div>

          {/* Right Column: Handwritten Playful Script Text */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-end justify-center text-center lg:text-right pt-4 lg:pt-0">
            <div
              onClick={onStartNow}
              className="cursor-pointer group transform hover:scale-105 transition-transform"
            >
              <p className="font-handwriting text-2xl sm:text-3xl text-blue-700 font-bold leading-tight">
                ចាប់ផ្ដើមថ្ងៃនេះ...
              </p>
              <p className="font-handwriting text-xl sm:text-2xl text-blue-600 font-bold leading-tight mt-1 flex items-center justify-center lg:justify-end gap-1.5">
                <span>ដើម្បីអនាគតកាន់តែភ្លឺស្វាង!</span>
                <span className="text-rose-500 text-2xl">♡</span>
              </p>
              <span className="text-[11px] text-slate-400 group-hover:text-blue-600 transition-colors font-medium">
                (ចុចត្រង់នេះដើម្បីរៀន ១០ មេរៀន)
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
