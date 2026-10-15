import React, { useState } from 'react';
import { Search, GraduationCap, Menu, X, Globe, User } from 'lucide-react';

interface HeaderProps {
  onOpenLessons: () => void;
  onOpenAuth: (mode: 'login' | 'register') => void;
  onOpenSearch: () => void;
  onScrollToWhyUs: () => void;
  onScrollToFeatures: () => void;
  onNavigateHome?: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenLessons,
  onOpenAuth,
  onOpenSearch,
  onScrollToWhyUs,
  onScrollToFeatures,
  onNavigateHome,
  activeSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigateHome) {
      onNavigateHome();
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.04)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Zone */}
          <div className="flex items-center gap-3">
            <button onClick={handleHomeClick} className="flex items-center gap-2.5 group cursor-pointer text-left">
              <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 transition-transform group-hover:scale-105 shadow-sm">
                <GraduationCap className="w-7 h-7 text-blue-600 fill-blue-600/10" strokeWidth={2.2} />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-400 border-2 border-white"></span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-2xl font-extrabold tracking-tight text-blue-600 font-display">
                    OmniLearn
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 font-medium tracking-tight whitespace-nowrap">
                  Learn English · Japanese · Korean
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-slate-700">
            <button
              onClick={handleHomeClick}
              className={`transition-colors py-1 cursor-pointer font-semibold relative ${
                activeSection === 'home'
                  ? 'text-blue-600 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600 after:rounded-full'
                  : 'text-slate-700 hover:text-blue-600'
              }`}
            >
              ទំព័រដើម
            </button>
            <button
              onClick={onOpenLessons}
              className={`hover:text-blue-600 transition-colors cursor-pointer py-1 ${
                activeSection === 'lessons' ? 'text-blue-600 font-semibold' : 'text-slate-700'
              }`}
            >
              កម្រិតសិក្សាទាំង ៨
            </button>
            <button
              onClick={onScrollToWhyUs}
              className="hover:text-blue-600 transition-colors cursor-pointer py-1 text-slate-700"
            >
              អំពីយើង
            </button>
            <button
              onClick={onScrollToFeatures}
              className="hover:text-blue-600 transition-colors cursor-pointer py-1 text-slate-700"
            >
              វិធីសាស្ត្ររៀន
            </button>
            <button
              onClick={onScrollToWhyUs}
              className="hover:text-blue-600 transition-colors cursor-pointer py-1 text-slate-700"
            >
              ទំនាក់ទំនង
            </button>
          </nav>

          {/* Right Action Zone */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenSearch}
              className="p-2.5 text-slate-600 hover:text-blue-600 hover:bg-slate-100 rounded-full transition-colors"
              title="ស្វែងរកមេរៀន"
            >
              <Search className="w-5 h-5" />
            </button>
            
            <button
              onClick={() => onOpenAuth('login')}
              className="px-5 py-2 text-sm font-semibold text-blue-600 border border-blue-600/40 rounded-full hover:bg-blue-50/80 transition-all cursor-pointer whitespace-nowrap"
            >
              ចូលគណនី
            </button>

            <button
              onClick={() => onOpenAuth('register')}
              className="px-5 py-2 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all shadow-md shadow-blue-500/20 active:scale-95 cursor-pointer whitespace-nowrap"
            >
              ចុះឈ្មោះ
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={onOpenSearch}
              className="p-2 text-slate-600 hover:text-blue-600 rounded-full"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-blue-600 rounded-lg"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-2 text-sm font-medium text-slate-700">
            <button
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleHomeClick(e);
              }}
              className="text-left px-3 py-2 rounded-lg bg-blue-50 text-blue-600 font-semibold"
            >
              ទំព័រដើម
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLessons();
              }}
              className="text-left px-3 py-2 rounded-lg hover:bg-slate-50 font-medium"
            >
              កម្រិតសិក្សាទាំង ៨
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onScrollToWhyUs();
              }}
              className="text-left px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              អំពីយើង
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onScrollToFeatures();
              }}
              className="text-left px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              វិធីសាស្ត្ររៀន
            </button>
          </div>
          <div className="pt-3 border-t border-slate-100 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth('login');
              }}
              className="flex-1 py-2 text-center text-sm font-semibold text-blue-600 border border-blue-600/40 rounded-full hover:bg-blue-50"
            >
              ចូលគណនី
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth('register');
              }}
              className="flex-1 py-2 text-center text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700"
            >
              ចុះឈ្មោះ
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
