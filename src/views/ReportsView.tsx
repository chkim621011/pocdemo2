import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, 
  Zap, 
  Clock, 
  Mail, 
  MessageSquare, 
  Share2, 
  Plus, 
  ChevronRight, 
  ChevronLeft,
  X,
  Calendar,
  BarChart3,
  Circle,
  Download,
  Send
} from 'lucide-react';

export function ReportsView() {
  const [isPanelOpen, setIsPanelOpen] = useState(true);

  return (
    <div className="h-full flex overflow-hidden relative">
      <div className="flex-1 overflow-y-auto no-scrollbar p-10 space-y-12">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="label-sm text-secondary">Intelligence Center</span>
            <h1 className="text-5xl font-headline font-bold tracking-tight">Report Generation</h1>
            <p className="text-on-surface-variant max-w-xl text-sm leading-relaxed">
              Synthesis of enterprise data through distributed AI agents. Sovereign multi-channel delivery active.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="bg-surface-container-low px-6 py-3 rounded-lg flex flex-col items-center">
              <span className="text-primary font-headline text-2xl font-bold">142</span>
              <span className="text-[10px] text-on-surface-variant uppercase font-bold">Active Subs</span>
            </div>
            <div className="bg-surface-container-low px-6 py-3 rounded-lg flex flex-col items-center">
              <span className="text-secondary font-headline text-2xl font-bold">0.8s</span>
              <span className="text-[10px] text-on-surface-variant uppercase font-bold">Avg Synthesis</span>
            </div>
          </div>
        </header>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-6">
          <section className="col-span-12 lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-headline font-bold">Subject Reports</h3>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-xs bg-surface-container-highest text-on-surface rounded-full">Recent</button>
                <button className="px-3 py-1 text-xs text-on-surface-variant hover:text-on-surface transition-colors">Archived</button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Q3 Cyber-Threat Landscape', time: '2 HOURS AGO', img: 'https://picsum.photos/seed/cyber/400/200' },
                { title: 'Supply Chain Node Optimization', time: 'YESTERDAY', img: 'https://picsum.photos/seed/supply/400/200' },
              ].map((report, i) => (
                <div key={i} className="group bg-surface-container border border-outline-variant/10 rounded-xl overflow-hidden cursor-pointer hover:bg-surface-container-high transition-all">
                  <div className="h-40 relative overflow-hidden">
                    <img 
                      src={report.img} 
                      alt={report.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-container to-transparent"></div>
                    <span className="absolute top-4 right-4 bg-secondary-container px-2 py-1 rounded text-[10px] font-bold text-white flex items-center gap-1">
                      <Zap className="w-3 h-3 fill-current" /> AI GEN
                    </span>
                  </div>
                  <div className="p-5 space-y-3">
                    <h4 className="font-bold text-on-surface group-hover:text-primary transition-colors">{report.title}</h4>
                    <p className="text-on-surface-variant text-xs line-clamp-2 leading-relaxed">
                      Autonomous scanning of distributed edge nodes revealed a 14% increase in lateral movement attempts...
                    </p>
                    <div className="flex items-center justify-between pt-2 border-t border-outline-variant/5">
                      <div className="flex -space-x-2">
                        <div className="w-6 h-6 rounded-full bg-surface-container-highest border border-surface flex items-center justify-center">
                          <FileText className="w-3 h-3" />
                        </div>
                        <div className="w-6 h-6 rounded-full bg-surface-container-highest border border-surface flex items-center justify-center">
                          <Zap className="w-3 h-3" />
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-on-surface-variant">{report.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <aside className="col-span-12 lg:col-span-4 space-y-6">
            <div className="bg-surface-container-low p-6 rounded-xl border-l-4 border-primary space-y-6">
              <h3 className="text-lg font-headline font-bold">Template Forge</h3>
              <div className="space-y-3">
                {[
                  { label: 'Executive Briefing', sub: 'Condensed High-Level', icon: FileText, color: 'text-primary' },
                  { label: 'Deep Technical Dive', sub: 'Raw Data & Correlations', icon: BarChart3, color: 'text-secondary' },
                  { label: 'Real-time Pulse', sub: 'Updated every 5m', icon: Zap, color: 'text-primary-fixed' },
                ].map((item, i) => (
                  <div key={i} className="p-3 bg-surface rounded-lg flex items-center gap-4 cursor-pointer hover:bg-surface-variant transition-colors group">
                    <item.icon className={`${item.color} group-hover:scale-110 transition-transform w-5 h-5`} />
                    <div className="flex-1">
                      <p className="text-sm font-bold">{item.label}</p>
                      <p className="text-[10px] text-on-surface-variant uppercase font-bold">{item.sub}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-on-surface-variant" />
                  </div>
                ))}
              </div>
              <button className="w-full py-2 border border-outline text-[10px] font-bold uppercase tracking-widest rounded-md hover:bg-surface hover:text-primary transition-all">
                Custom Configurator
              </button>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-xl space-y-4 border border-outline-variant/5">
              <h3 className="text-[10px] font-black uppercase text-on-surface-variant tracking-widest flex items-center gap-2">
                <Zap className="w-3 h-3 text-secondary" /> AI Agent Collaboration
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <BarChart3 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border border-surface"></span>
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold">Analyst Agent</span>
                      <span className="text-[9px] text-on-surface-variant uppercase font-bold">Synthesizing</span>
                    </div>
                    <div className="w-full h-1 bg-surface-container mt-1 rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[75%]"></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 opacity-60">
                  <div className="relative">
                    <div className="bg-secondary/10 p-2 rounded-full">
                      <FileText className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="absolute bottom-0 right-0 w-2 h-2 bg-on-surface-variant rounded-full border border-surface"></span>
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold">Designer Agent</span>
                      <span className="text-[9px] text-on-surface-variant uppercase font-bold">Idle</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Delivery Channels */}
        <section className="bg-surface-container-low p-8 rounded-2xl relative overflow-hidden border border-outline-variant/5">
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
            <Share2 className="w-32 h-32" />
          </div>
          <div className="relative z-10 grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-headline font-bold">Delivery Channels</h3>
                <p className="text-on-surface-variant text-sm mt-1">Configure where your intelligence flows.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { label: 'Email', icon: Mail, color: '#1D9BF0', active: true },
                  { label: 'WeChat', icon: MessageSquare, color: '#07C160', active: false },
                  { label: 'Feishu', icon: Share2, color: '#3B82F6', active: true },
                ].map((channel, i) => (
                  <div key={i} className={`p-4 rounded-lg border transition-all flex items-center justify-between cursor-pointer ${
                    channel.active ? 'bg-surface-container border-primary/20' : 'bg-surface border-outline-variant/10 opacity-40 hover:opacity-100'
                  }`}>
                    <div className="flex items-center gap-3">
                      <channel.icon className="w-5 h-5" style={{ color: channel.color }} />
                      <span className="text-sm font-medium">{channel.label}</span>
                    </div>
                    <div className={`w-8 h-4 rounded-full relative p-1 transition-colors ${channel.active ? 'bg-primary' : 'bg-slate-600'}`}>
                      <div className={`w-2 h-2 bg-white rounded-full transition-all ${channel.active ? 'ml-auto' : ''}`}></div>
                    </div>
                  </div>
                ))}
                <div className="p-4 bg-surface rounded-lg flex items-center justify-between cursor-pointer border border-dashed border-outline-variant/30 hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <Plus className="w-5 h-5 text-on-surface-variant" />
                    <span className="text-sm font-medium text-on-surface-variant">API Webhook</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 border-l border-outline-variant/10 pl-0 md:pl-12">
              <div>
                <h3 className="text-2xl font-headline font-bold">API Integration</h3>
                <p className="text-on-surface-variant text-sm mt-1">Sovereign observer node status.</p>
              </div>
              <div className="bg-surface p-4 rounded-lg font-mono text-[10px] text-primary border border-primary/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-on-surface-variant uppercase font-bold">Authorization Token</span>
                  <button className="hover:text-white transition-colors"><FileText className="w-3 h-3" /></button>
                </div>
                <p className="truncate opacity-80">xb_live_88f217c0-d33a-4a7b-9e4a-5f5c531d2024_auth_key_v1</p>
              </div>
              <div className="flex items-center justify-between p-3 bg-primary/5 rounded border border-primary/20">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-[10px] font-bold uppercase tracking-widest">Node Healthy</span>
                </div>
                <span className="text-[10px] text-on-surface-variant font-bold">99.9% Uptime</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Side Panel Toggle Button */}
      {!isPanelOpen && (
        <button 
          onClick={() => setIsPanelOpen(true)}
          className="fixed right-0 top-1/2 -translate-y-1/2 bg-surface-container p-3 rounded-l-xl text-primary shadow-2xl z-50 hover:translate-x-[-4px] transition-transform"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Right Side Detail Panel */}
      <AnimatePresence>
        {isPanelOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 w-[450px] h-screen glass-panel z-50 shadow-2xl flex flex-col"
          >
            <div className="p-8 flex-1 overflow-y-auto no-scrollbar space-y-10">
              <div className="flex items-center justify-between">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Live Report View</span>
                <button 
                  onClick={() => setIsPanelOpen(false)}
                  className="text-on-surface-variant hover:text-on-surface transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-headline font-bold leading-tight">Decentralized Asset Volatility Synthesis</h2>
                <div className="flex items-center gap-4 text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> Oct 24, 2023</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> 4 min read</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-[10px] font-bold uppercase text-on-surface-variant tracking-widest">AI Insights</h4>
                  <span className="text-[10px] bg-secondary-container px-2 py-0.5 rounded text-white font-bold">98% CONFIDENCE</span>
                </div>
                <div className="p-6 bg-surface-container-highest rounded-xl border border-secondary/20 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 blur-[60px] rounded-full"></div>
                  <p className="text-sm leading-relaxed text-on-surface italic">
                    "The correlation between cross-chain liquidity surges and regional regulatory shifts has reached a critical threshold. We recommend immediate hedging within the Layer 2 ecosystem."
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-[10px] font-bold uppercase text-on-surface-variant tracking-widest">Trend Analysis</h4>
                <div className="h-48 bg-surface-container rounded-xl flex items-end p-4 gap-2 border border-outline-variant/10">
                  {[30, 45, 60, 90, 75, 50, 85].map((h, i) => (
                    <div 
                      key={i} 
                      className="flex-1 bg-primary/20 rounded-t-sm hover:bg-primary transition-all cursor-pointer" 
                      style={{ height: `${h}%` }}
                    ></div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-[10px] font-bold uppercase text-on-surface-variant tracking-widest">Expert Summary</h4>
                <div className="space-y-4">
                  {[
                    'Network security remains stable despite increased probing from botnet clusters in Eastern Europe.',
                    'Storage efficiency improved by 12% following the implementation of the new compression algorithm.'
                  ].map((text, i) => (
                    <div key={i} className="flex gap-3">
                      <Circle className="w-2 h-2 text-primary fill-current mt-1.5 shrink-0" />
                      <p className="text-xs text-on-surface-variant leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-8 bg-surface-container-low border-t border-outline-variant/10 grid grid-cols-2 gap-4">
              <button className="py-3 bg-surface-container-highest rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-surface-variant transition-colors flex items-center justify-center gap-2">
                <Download className="w-4 h-4" /> Download PDF
              </button>
              <button className="py-3 bg-primary text-on-primary-fixed rounded-lg text-[10px] font-bold uppercase tracking-widest hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                <Send className="w-4 h-4" /> Push to Feishu
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
