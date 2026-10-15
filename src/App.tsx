/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CourseCards } from './components/CourseCards';
import { LevelSelectionView } from './components/LevelSelectionView';
import { LevelZeroView } from './components/LevelZeroView';
import { LevelBasicView } from './components/LevelBasicView';
import { LevelElementaryView } from './components/LevelElementaryView';
import { LevelIntermediateView } from './components/LevelIntermediateView';
import { FeatureRow } from './components/FeatureRow';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AuthModal } from './components/AuthModal';
import { SearchModal } from './components/SearchModal';
import { Footer } from './components/Footer';
import { COURSES_DATA, LessonUnit, LanguageCourse } from './data/lessonsData';

export default function App() {
  // Navigation view state: 'home' | 'levels' | 'level-zero' | 'level-basic' | 'level-elementary' | 'level-intermediate'
  const [currentView, setCurrentView] = useState<'home' | 'levels' | 'level-zero' | 'level-basic' | 'level-elementary' | 'level-intermediate'>('home');
  const [selectedLanguage, setSelectedLanguage] = useState<'english' | 'japanese' | 'korean'>('english');
  const [authModalMode, setAuthModalMode] = useState<'login' | 'register' | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  // When clicking "ចាប់ផ្ដើមរៀន" on English or Hero CTA
  const handleStartCourse = (lang: 'english' | 'japanese' | 'korean') => {
    setSelectedLanguage(lang);
    setCurrentView('levels');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenLevelZero = () => {
    setCurrentView('level-zero');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenLevelBasic = () => {
    setCurrentView('level-basic');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenLevelElementary = () => {
    setCurrentView('level-elementary');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenLevelIntermediate = () => {
    setCurrentView('level-intermediate');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToLevels = () => {
    setCurrentView('levels');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToWhyUs = () => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        const el = document.getElementById('why-choose-us');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('why-choose-us');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFeatures = () => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        const el = document.getElementById('feature-row-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('feature-row-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getLanguageLabel = () => {
    switch (selectedLanguage) {
      case 'japanese':
        return 'ភាសាជប៉ុន (Japanese)';
      case 'korean':
        return 'ភាសាកូរ៉េ (Korean)';
      case 'english':
      default:
        return 'ភាសាអង់គ្លេស (English)';
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800 font-khmer selection:bg-blue-100 selection:text-blue-900">
      
      {/* 1. Header with OmniLearn branding and navigation */}
      <Header
        onOpenLessons={() => {
          setCurrentView('levels');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateHome={handleBackToHome}
        onOpenAuth={(mode) => setAuthModalMode(mode)}
        onOpenSearch={() => setSearchOpen(true)}
        onScrollToWhyUs={scrollToWhyUs}
        onScrollToFeatures={scrollToFeatures}
        activeSection={currentView === 'home' ? 'home' : 'lessons'}
      />

      <main className="flex-1">
        {currentView === 'home' && (
          /* ============================================================ */
          /* HOMEPAGE: Clean, stunning, uncluttered with only the 3 cards */
          /* ============================================================ */
          <>
            {/* 1. Hero Section matching photo with Asian student & sticky notes */}
            <Hero onStartLearning={() => handleStartCourse('english')} />

            {/* 2. 3 Big Language Cards: English, Japanese, Korean */}
            <CourseCards
              selectedLanguage={selectedLanguage}
              onSelectLanguage={(lang) => setSelectedLanguage(lang)}
              onStartLearning={handleStartCourse}
            />

            {/* 3. Feature Highlights Row (5 colored icons) */}
            <div id="feature-row-section">
              <FeatureRow />
            </div>

            {/* 4. Why Choose Us Section with 4 green checkmarks & handwritten script */}
            <WhyChooseUs onStartNow={() => handleStartCourse('english')} />
          </>
        )}

        {currentView === 'levels' && (
          /* ============================================================ */
          /* LEVEL SELECTION VIEW (ផ្ទាំងកម្រិតសិក្សាទាំង ៨)             */
          /* ============================================================ */
          <LevelSelectionView
            onBack={handleBackToHome}
            languageName={getLanguageLabel()}
            onSelectLevelZero={handleOpenLevelZero}
            onSelectLevelBasic={handleOpenLevelBasic}
            onSelectLevelElementary={handleOpenLevelElementary}
            onSelectLevelIntermediate={handleOpenLevelIntermediate}
          />
        )}

        {currentView === 'level-zero' && (
          /* ============================================================ */
          /* LEVEL 0 VIEW: 10 LESSONS FOR ABSOLUTE BEGINNER             */
          /* ============================================================ */
          <LevelZeroView
            onBack={handleBackToLevels}
          />
        )}

        {currentView === 'level-basic' && (
          /* ============================================================ */
          /* LEVEL BASIC VIEW: 10 LESSONS FOR BEGINNER A1                 */
          /* ============================================================ */
          <LevelBasicView
            onBack={handleBackToLevels}
          />
        )}

        {currentView === 'level-elementary' && (
          /* ============================================================ */
          /* LEVEL ELEMENTARY VIEW: 12 LESSONS FOR ELEMENTARY A2          */
          /* ============================================================ */
          <LevelElementaryView
            onBack={handleBackToLevels}
          />
        )}

        {currentView === 'level-intermediate' && (
          /* ============================================================ */
          /* LEVEL INTERMEDIATE VIEW: 12 LESSONS FOR INTERMEDIATE B1.1   */
          /* ============================================================ */
          <LevelIntermediateView
            onBack={handleBackToLevels}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onOpenLessons={() => {
          setCurrentView('levels');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onScrollToWhyUs={scrollToWhyUs}
      />

      {/* Auth Modal (Login / Register) */}
      {authModalMode && (
        <AuthModal
          initialMode={authModalMode}
          onClose={() => setAuthModalMode(null)}
          onSuccess={(email) => {
            setUserEmail(email);
            setAuthModalMode(null);
          }}
        />
      )}

      {/* Search Modal */}
      {searchOpen && (
        <SearchModal
          onClose={() => setSearchOpen(false)}
          onSelectLesson={(lesson, course) => {
            setSelectedLanguage(course.id);
            setCurrentView('levels');
          }}
        />
      )}

    </div>
  );
}
