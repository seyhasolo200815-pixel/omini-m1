import React from 'react';
import { Laptop, PlaySquare, Users, BarChart3, Headphones } from 'lucide-react';

export const FeatureRow: React.FC = () => {
  const features = [
    {
      id: 1,
      title: 'មេរៀនតាមអនឡាញ',
      subtitle: 'រៀនបានគ្រប់ពេល គ្រប់កន្លែង',
      icon: <Laptop className="w-5 h-5 text-white" strokeWidth={2.3} />,
      bgIcon: 'bg-[#0ea5e9]', // Vibrant Blue
    },
    {
      id: 2,
      title: 'វីដេអូមេរៀនគុណភាព',
      subtitle: 'ពន្យល់ងាយស្រួល យល់ច្បាស់',
      icon: <PlaySquare className="w-5 h-5 text-white" strokeWidth={2.3} />,
      bgIcon: 'bg-[#6366f1]', // Indigo / Purple
    },
    {
      id: 3,
      title: 'គ្រូបង្រៀនជំនាញ',
      subtitle: 'បទពិសោធន៍ពិត និងវិធីសាស្រ្តល្អ',
      icon: <Users className="w-5 h-5 text-white" strokeWidth={2.3} />,
      bgIcon: 'bg-[#10b981]', // Emerald Green
    },
    {
      id: 4,
      title: 'តាមដានវឌ្ឍនភាព',
      subtitle: 'ដឹងពីកម្រិត និងកែលម្អជាប្រចាំ',
      icon: <BarChart3 className="w-5 h-5 text-white" strokeWidth={2.3} />,
      bgIcon: 'bg-[#f97316]', // Warm Orange
    },
    {
      id: 5,
      title: 'គាំទ្រអតិថិជន 24/7',
      subtitle: 'ជួយរហ័ស មានទំនួលខុសត្រូវ',
      icon: <Headphones className="w-5 h-5 text-white" strokeWidth={2.3} />,
      bgIcon: 'bg-[#8b5cf6]', // Violet
    },
  ];

  return (
    <section className="py-10 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 5-Item Feature Row matching the uploaded design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
          {features.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-100 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.04)] hover:shadow-md transition-all duration-200 flex items-center gap-3.5"
            >
              {/* Rounded/Pill Icon matching the design */}
              <div
                className={`w-12 h-12 rounded-2xl ${item.bgIcon} flex items-center justify-center shrink-0 shadow-sm`}
              >
                {item.icon}
              </div>

              {/* Text Block */}
              <div className="flex flex-col min-w-0">
                <h4 className="text-sm font-bold text-slate-900 truncate font-khmer">
                  {item.title}
                </h4>
                <p className="text-[12px] text-slate-500 line-clamp-2 mt-0.5 font-khmer leading-snug">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
