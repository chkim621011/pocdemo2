import React from 'react';
import { 
  LayoutGrid, 
  Compass, 
  BarChart3, 
  Network, 
  Plus, 
  Settings, 
  Bot,
  Zap
} from 'lucide-react';
import { View } from '../types';
import { motion } from 'motion/react';

interface SidebarProps {
  currentView: View;
  onViewChange: (view: View) => void;
}

export function Sidebar({ currentView, onViewChange }: SidebarProps) {
  const menuItems = [
    { id: 'sources', label: 'Sources & Strategy', icon: LayoutGrid },
    { id: 'intelligence', label: 'Intelligence Center', icon: Compass },
    { id: 'reports', label: 'Reports', icon: BarChart3 },
    { id: 'discovery', label: 'System Status', icon: Network },
  ];

  return (
    <aside className="w-64 bg-surface-container-low border-r border-outline-variant/10 flex flex-col h-screen sticky top-0 z-40">
      <div className="p-6 border-b border-outline-variant/10">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center">
            <Zap className="w-6 h-6 text-primary" />
          </div>
          <div>
            <div className="text-lg font-black text-primary font-headline">Sovereign Observer</div>
            <div className="text-[10px] text-on-surface-variant uppercase tracking-widest font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              AI Node Active
            </div>
          </div>
        </div>
        
        <button className="mt-6 w-full py-2.5 bg-primary-container text-on-primary-fixed font-bold text-xs uppercase tracking-widest rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-all active:scale-95">
          <Plus className="w-4 h-4" /> New Analysis
        </button>
      </div>

      <nav className="flex-1 py-4 px-2 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onViewChange(item.id as View)}
            className={`w-full px-4 py-3 flex items-center gap-3 rounded-lg transition-all duration-200 group ${
              currentView === item.id 
                ? 'bg-surface-container text-primary border-l-4 border-primary' 
                : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest'
            }`}
          >
            <item.icon className={`w-5 h-5 ${currentView === item.id ? 'text-primary' : 'group-hover:text-primary'}`} />
            <span className="text-sm font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-outline-variant/10 space-y-1">
        <button className="w-full px-4 py-2 flex items-center gap-3 text-xs uppercase tracking-wider text-on-surface-variant hover:text-on-surface transition-colors">
          <Settings className="w-4 h-4" />
          <span>Settings</span>
        </button>
        <button className="w-full px-4 py-2 flex items-center gap-3 text-xs uppercase tracking-wider text-on-surface-variant hover:text-on-surface transition-colors">
          <Bot className="w-4 h-4" />
          <span>Agent Health</span>
        </button>
      </div>
    </aside>
  );
}
