import React from 'react';
import { ArrowRight } from 'lucide-react';

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
      skills: 'ស្តាប់  |  និយាយ  |  អាន  |  សរសេរ',
      image: '/src/assets/images/landmark_london_uk_1792032354602.jpg',
      flagBadge: (
        <div className="w-11 h-11 rounded-full border-2 border-white shadow-md overflow-hidden bg-blue-800 flex items-center justify-center text-xl">
          🇬🇧
        </div>
      ),
      buttonBg: 'bg-[#2563eb] hover:bg-blue-700 shadow-blue-500/25',
      borderColor: 'border-blue-100 hover:border-blue-300',
      activeRing: 'ring-2 ring-blue-500 ring-offset-2',
    },
    {
      id: 'japanese' as const,
      title: 'Japanese',
      subtitleKhmer: 'រៀនភាសាជប៉ុន',
      skills: 'ស្តាប់  |  និយាយ  |  អាន  |  សរសេរ',
      image: '/src/assets/images/landmark_japan_fuji_1792032356610.jpg',
      flagBadge: (
        <div className="w-11 h-11 rounded-full border-2 border-white shadow-md overflow-hidden bg-white flex items-center justify-center text-xl">
          🇯🇵
        </div>
      ),
      buttonBg: 'bg-[#f43f5e] hover:bg-rose-600 shadow-rose-500/25',
      borderColor: 'border-rose-100 hover:border-rose-300',
      activeRing: 'ring-2 ring-rose-500 ring-offset-2',
    },
    {
      id: 'korean' as const,
      title: 'Korean',
      subtitleKhmer: 'រៀនភាសាកូរ៉េ',
      skills: 'ស្តាប់  |  និយាយ  |  អាន  |  សរសេរ',
      image: '/src/assets/images/landmark_korea_palace_1792032356597.jpg',
      flagBadge: (
        <div className="w-11 h-11 rounded-full border-2 border-white shadow-md overflow-hidden bg-white flex items-center justify-center text-xl">
          🇰🇷
        </div>
      ),
      buttonBg: 'bg-[#7c3aed] hover:bg-purple-700 shadow-purple-500/25',
      borderColor: 'border-purple-100 hover:border-purple-300',
      activeRing: 'ring-2 ring-purple-500 ring-offset-2',
    },
  ];

  return (
    <section className="py-8 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Course Cards Grid - 3 Columns matching uploaded photo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card) => {
            const isSelected = selectedLanguage === card.id;

            return (
              <div
                key={card.id}
                onClick={() => onSelectLanguage(card.id)}
                className={`group relative rounded-3xl overflow-hidden bg-white border ${card.borderColor} shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col ${
                  isSelected ? card.activeRing : ''
                }`}
              >
                {/* Landmark Photo with Flag Overlay */}
                <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-100">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle top scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
                  
                  {/* Flag Round Badge */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                    {card.flagBadge}
                    <span className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider">
                      {card.id}
                    </span>
                  </div>
                </div>

                {/* Card Content matching image typography */}
                <div className="p-6 flex flex-col items-center text-center flex-1 justify-between bg-white">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
                      {card.title}
                    </h3>
                    <p className="mt-1 text-base sm:text-lg font-semibold text-slate-700 font-khmer">
                      {card.subtitleKhmer}
                    </p>
                    
                    {/* Skills Separator text matching: ស្តាប់ | និយាយ | អាន | សរសេរ */}
                    <div className="mt-3 text-xs sm:text-sm font-medium text-slate-500 font-khmer">
                      {card.skills}
                    </div>
                  </div>

                  {/* Start Learning Button: "ចាប់ផ្ដើមរៀន ->" */}
                  <div className="mt-6 w-full flex justify-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onStartLearning(card.id);
                      }}
                      className={`w-full max-w-[200px] py-2.5 px-5 rounded-full text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 cursor-pointer ${card.buttonBg}`}
                    >
                      <span>ចាប់ផ្ដើមរៀន</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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
