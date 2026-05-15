'use client';

import { Sparkles, FileText, Layout, Download, Zap } from 'lucide-react';

interface ResumeEmptyStateProps {
  onStart: () => void;
}

export default function ResumeEmptyState({ onStart }: ResumeEmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center bg-white rounded-3xl border border-slate-100 shadow-xl max-w-2xl mx-auto my-12 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-50 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-50 rounded-full opacity-50 blur-3xl"></div>

      <div className="relative z-10">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-blue-200 rotate-3">
          <FileText className="w-10 h-10 text-white" />
        </div>

        <h2 className="text-3xl font-black text-slate-800 mb-4 tracking-tight">
          Craft Your Professional Story
        </h2>
        
        <p className="text-slate-600 text-lg mb-10 max-w-md mx-auto leading-relaxed">
          Welcome to the CareerX Resume Builder. Create a high-impact, ATS-optimized resume in minutes using our premium templates.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 text-left">
          <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="mt-1 p-1.5 bg-blue-100 rounded-lg">
              <Layout className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm">Premium Templates</h4>
              <p className="text-xs text-slate-500">Choose from recruiter-approved designs.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="mt-1 p-1.5 bg-indigo-100 rounded-lg">
              <Zap className="w-4 h-4 text-indigo-600" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm">ATS Optimized</h4>
              <p className="text-xs text-slate-500">Built to pass modern hiring algorithms.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="mt-1 p-1.5 bg-purple-100 rounded-lg">
              <Sparkles className="w-4 h-4 text-purple-600" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm">Live Preview</h4>
              <p className="text-xs text-slate-500">See changes in real-time as you type.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="mt-1 p-1.5 bg-emerald-100 rounded-lg">
              <Download className="w-4 h-4 text-emerald-600" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm">Instant Export</h4>
              <p className="text-xs text-slate-500">Download in professional PDF or DOCX format.</p>
            </div>
          </div>
        </div>

        <button
          onClick={onStart}
          className="group relative px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-lg shadow-2xl hover:bg-black transition-all duration-300 active:scale-95"
        >
          <span className="flex items-center gap-2">
            Start Building My Resume
            <Zap className="w-5 h-5 text-yellow-400 fill-yellow-400 group-hover:animate-pulse" />
          </span>
        </button>
        
        <p className="mt-6 text-slate-400 text-xs font-medium uppercase tracking-widest">
          No credit card required for basic templates
        </p>
      </div>
    </div>
  );
}
