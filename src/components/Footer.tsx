import React from 'react';
import { GraduationCap, Heart, Globe, Mail, Phone } from 'lucide-react';

interface FooterProps {
  onOpenLessons: () => void;
  onScrollToWhyUs: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLessons, onScrollToWhyUs }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800 text-sm">
          
          {/* Col 1: Brand */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-extrabold text-white font-display">
                OmniLearn
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              វេទិកាសិក្សាភាសាអង់គ្លេស ជប៉ុន និងកូរ៉េ ជាមួយមេរៀនផ្ដោតគុណភាព និងងាយស្រួលយល់។
            </p>
            <p className="text-xs text-blue-400 font-medium">
              Learn English · Japanese · Korean
            </p>
          </div>

          {/* Col 2: Courses */}
          <div className="space-y-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              វគ្គសិក្សាភាសា
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <button onClick={onOpenLessons} className="hover:text-white transition-colors cursor-pointer">
                  ភាសាអង់គ្លេស (English Course)
                </button>
              </li>
              <li>
                <button onClick={onOpenLessons} className="hover:text-white transition-colors cursor-pointer">
                  ភាសាជប៉ុន (Japanese Course N5)
                </button>
              </li>
              <li>
                <button onClick={onOpenLessons} className="hover:text-white transition-colors cursor-pointer">
                  ភាសាកូរ៉េ (Korean Course TOPIK)
                </button>
              </li>
              <li>
                <button onClick={onOpenLessons} className="hover:text-white transition-colors cursor-pointer">
                  ប្រអប់មេរៀនទាំង ១០ ជួរ
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Features */}
          <div className="space-y-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              អំពី OmniLearn
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <button onClick={onScrollToWhyUs} className="hover:text-white transition-colors cursor-pointer">
                  ហេតុអ្វីជ្រើសរើសយើង
                </button>
              </li>
              <li>
                <span className="hover:text-white transition-colors">វិធីសាស្ត្ររៀនតាមអនឡាញ</span>
              </li>
              <li>
                <span className="hover:text-white transition-colors">តេស្តវាស់ស្ទង់កម្រិតឥតគិតថ្លៃ</span>
              </li>
              <li>
                <span className="hover:text-white transition-colors">វិញ្ញាបនបត្របញ្ចប់ការសិក្សា</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="space-y-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              ទំនាក់ទំនង
            </h4>
            <div className="space-y-1.5 text-xs text-slate-400">
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>support@omnilearn.kh</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>+855 23 999 888</span>
              </p>
              <p className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-blue-400" />
                <span>រាជធានីភ្នំពេញ, ប្រទេសកម្ពុជា</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© {new Date().getFullYear()} OmniLearn. រក្សាសិទ្ធិគ្រប់យ៉ាង។</p>
          <p className="flex items-center gap-1 font-handwriting text-base text-slate-400">
            <span>រៀនភាសាដើម្បីអនាគតកាន់តែភ្លឺស្វាង</span>
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
          </p>
        </div>

      </div>
    </footer>
  );
};
