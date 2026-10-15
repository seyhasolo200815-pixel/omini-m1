import React, { useState } from 'react';
import { Search, X, BookOpen, ArrowRight } from 'lucide-react';
import { COURSES_DATA, LessonUnit, LanguageCourse } from '../data/lessonsData';

interface SearchModalProps {
  onClose: () => void;
  onSelectLesson: (lesson: LessonUnit, course: LanguageCourse) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ onClose, onSelectLesson }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Collect all lessons across all courses
  const allLessonsWithCourse = Object.values(COURSES_DATA).flatMap((course) =>
    course.lessons.map((lesson) => ({
      lesson,
      course,
    }))
  );

  const filtered = searchTerm.trim() === ''
    ? allLessonsWithCourse.slice(0, 6)
    : allLessonsWithCourse.filter(({ lesson, course }) => {
        const query = searchTerm.toLowerCase();
        return (
          lesson.titleKhmer.toLowerCase().includes(query) ||
          lesson.titleTarget.toLowerCase().includes(query) ||
          lesson.descriptionKhmer.toLowerCase().includes(query) ||
          course.nameEnglish.toLowerCase().includes(query) ||
          lesson.vocabulary.some(
            (v) =>
              v.word.toLowerCase().includes(query) ||
              v.meaningKhmer.toLowerCase().includes(query)
          )
        );
      });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:pt-20 bg-slate-900/60 backdrop-blur-xs">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
        
        {/* Search Bar Input */}
        <div className="p-4 border-b border-slate-100 flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="ស្វែងរកមេរៀន ពាក្យ ឬប្រធានបទ (Search lessons...)"
            className="w-full text-sm sm:text-base text-slate-800 placeholder-slate-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-slate-100 text-slate-500 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-4 max-h-[60vh] overflow-y-auto space-y-2">
          <div className="text-xs font-semibold text-slate-400 px-2 pb-1">
            {searchTerm.trim() === '' ? 'មេរៀនណែនាំពេញនិយម' : `លទ្ធផលស្វែងរក (${filtered.length})`}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-8 text-slate-400 text-xs sm:text-sm">
              រកមិនឃើញមេរៀនដែលត្រូវនឹង "{searchTerm}" ទេ
            </div>
          ) : (
            filtered.map(({ lesson, course }, idx) => (
              <div
                key={idx}
                onClick={() => {
                  onSelectLesson(lesson, course);
                  onClose();
                }}
                className="p-3 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all flex items-center justify-between gap-3 cursor-pointer group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-sm font-bold shrink-0">
                    {course.flagEmoji}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-900 truncate">
                        {lesson.unitNumber}: {lesson.titleKhmer}
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded-sm bg-slate-100 text-slate-600 font-medium shrink-0">
                        {course.nameEnglish}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 truncate font-sans">
                      {lesson.titleTarget} · {lesson.duration}
                    </p>
                  </div>
                </div>

                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all shrink-0" />
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};
