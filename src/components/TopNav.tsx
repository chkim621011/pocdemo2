import React from 'react';
import { Bell, Settings, HelpCircle } from 'lucide-react';
import { View } from '../types';

interface TopNavProps {
  currentView: View;
}

export function TopNav({ currentView }: TopNavProps) {
  return (
    <header className="h-14 bg-background border-b border-outline-variant/10 flex items-center justify-between px-6 sticky top-0 z-50">
      <div className="flex items-center gap-8">
        <span className="text-xl font-bold text-primary tracking-tighter font-headline">Xianniu Brain</span>
        <nav className="hidden md:flex items-center gap-6">
          <button className="text-xs font-bold uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors">Admin</button>
          <button className="text-xs font-bold uppercase tracking-widest text-primary border-b-2 border-primary pb-1">Enterprise</button>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <button className="p-2 text-on-surface-variant hover:text-primary hover:bg-surface-container-highest rounded-lg transition-all">
            <Bell className="w-5 h-5" />
          </button>
          <button className="p-2 text-on-surface-variant hover:text-primary hover:bg-surface-container-highest rounded-lg transition-all">
            <Settings className="w-5 h-5" />
          </button>
          <button className="p-2 text-on-surface-variant hover:text-primary hover:bg-surface-container-highest rounded-lg transition-all">
            <HelpCircle className="w-5 h-5" />
          </button>
        </div>
        
        <div className="h-8 w-8 rounded-full overflow-hidden border border-outline-variant/30">
          <img 
            src="https://picsum.photos/seed/analyst/100/100" 
            alt="User Avatar" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </header>
  );
}
