import React from 'react';
import { motion } from 'motion/react';
import { 
  AlertTriangle, 
  Zap, 
  Shield, 
  Activity, 
  Search, 
  Filter, 
  ArrowRight,
  Clock,
  Database,
  Cpu,
  Layers
} from 'lucide-react';
import { IntelligenceItem } from '../types';

const mockIntelligence: IntelligenceItem[] = [
  {
    id: '1',
    title: 'North Sector Refinery: Gas Leak containment protocol initiated.',
    summary: 'AI Summary: Critical infrastructure failure at Sector 4. No casualties reported. Immediate shutdown sequence active.',
    risk: 'high',
    time: '02:14 PM',
    category: '安全事故 (SAFETY INCIDENTS)',
    tags: ['Extraction: Agent_09'],
    source: 'LIVE • 4 New'
  },
  {
    id: '2',
    title: 'Warehouse 12: Automated drone collision reported during sorting.',
    summary: 'AI Summary: Minor property damage. Supply chain delay estimated at 2 hours.',
    risk: 'medium',
    time: '11:45 AM',
    category: '安全事故 (SAFETY INCIDENTS)',
    tags: [],
    source: 'LIVE • 4 New'
  }
];

export function IntelligenceView() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero Visual Section */}
      <section className="relative h-64 w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-container-low/0 via-background to-background z-10"></div>
        
        {/* Abstract AI Core Visual */}
        <div className="absolute w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] -top-1/2"></div>
        <div className="absolute w-[400px] h-[400px] rounded-full border border-primary/20 animate-[spin_60s_linear_infinite] flex items-center justify-center">
          <div className="w-[300px] h-[300px] rounded-full border border-secondary/20 animate-[spin_40s_linear_infinite_reverse]"></div>
        </div>
        
        <div className="relative z-20 text-center space-y-2">
          <h1 className="text-5xl md:text-6xl font-headline font-bold tracking-tighter">Xianniu Brain</h1>
          <p className="text-on-surface-variant font-label text-sm uppercase tracking-[0.4em] opacity-80">Sovereign Enterprise Intelligence Core</p>
        </div>
      </section>

      {/* Real-time Activity Ticker */}
      <div className="mx-6 mb-8 py-3 px-6 bg-surface-container-low rounded-xl flex items-center gap-6 overflow-hidden border-l-4 border-secondary shadow-lg">
        <div className="flex items-center gap-2 whitespace-nowrap text-xs font-bold text-secondary uppercase tracking-widest shrink-0">
          <Activity className="w-4 h-4" />
          Active Agents:
        </div>
        <div className="flex items-center gap-12 animate-[marquee_40s_linear_infinite] whitespace-nowrap">
          {[
            { id: '09', action: 'Cleaning', target: 'Safety Incidents', color: 'bg-green-500' },
            { id: '24', action: 'Aggregating', target: 'Competitor Dynamics', color: 'bg-blue-500' },
            { id: '03', action: 'Analyzing', target: 'Policy Updates', color: 'bg-purple-500' },
            { id: '17', action: 'Extracting', target: 'Earthquake logs', color: 'bg-amber-500' },
          ].map((agent, i) => (
            <span key={i} className="flex items-center gap-2 text-[10px] text-on-surface-variant font-medium">
              <span className={`w-1.5 h-1.5 rounded-full ${agent.color}`}></span>
              [Agent_{agent.id}] {agent.action} <span className="text-primary">{agent.target}</span> feed...
            </span>
          ))}
        </div>
      </div>

      {/* Intelligence Grid */}
      <div className="px-6 pb-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {/* Safety Incidents */}
        <div className="space-y-4">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 text-on-surface">
              <span className="w-2 h-2 rounded-full bg-error-dim shadow-[0_0_10px_rgba(215,56,59,0.5)]"></span>
              安全事故 (Safety Incidents)
            </h2>
            <span className="text-[10px] text-on-surface-variant font-medium">LIVE • 4 New</span>
          </div>
          <div className="space-y-4">
            {mockIntelligence.map((item) => (
              <motion.div 
                key={item.id}
                whileHover={{ scale: 1.02 }}
                className={`glass-panel rounded-xl p-5 border-l-2 hover:bg-surface-container-highest transition-all cursor-pointer ${
                  item.risk === 'high' ? 'border-error' : 'border-outline-variant/30'
                }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <span className={`text-[10px] font-bold uppercase tracking-tighter px-2 py-0.5 rounded ${
                    item.risk === 'high' ? 'bg-error/10 text-error' : 'bg-amber-500/10 text-amber-500'
                  }`}>
                    Risk: {item.risk}
                  </span>
                  <span className="text-[10px] text-on-surface-variant font-mono">{item.time}</span>
                </div>
                <h3 className="text-sm font-semibold mb-3 leading-tight">{item.title}</h3>
                <div className="bg-surface-container-lowest/50 p-3 rounded-lg text-[11px] text-on-surface-variant italic mb-4">
                  {item.summary}
                </div>
                {item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, i) => (
                      <span key={i} className="text-[9px] px-2 py-0.5 rounded-full bg-secondary-container/20 text-secondary border border-secondary/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Alerts & Quakes */}
        <div className="space-y-4">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 text-on-surface">
              <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]"></span>
              灾害预警 & 地震 (Alerts & Quakes)
            </h2>
            <span className="text-[10px] text-on-surface-variant font-medium">REGIONAL • GLOBAL</span>
          </div>
          <div className="space-y-4">
            <div className="h-40 w-full rounded-xl overflow-hidden relative group border border-outline-variant/10">
              <img 
                src="https://picsum.photos/seed/seismic/600/300?grayscale" 
                alt="Seismic Map" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-4">
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Taiwan Strait Area</span>
              </div>
            </div>
            <div className="glass-panel rounded-xl p-5 border-l-2 border-primary hover:bg-surface-container-highest transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-[10px] font-bold text-primary uppercase tracking-tighter">Mag 5.2</span>
                </div>
                <span className="text-[10px] text-on-surface-variant font-mono">12:02 PM</span>
              </div>
              <h3 className="text-sm font-semibold mb-3">Coastal Region: Moderate tremor detected at depth 10km.</h3>
              <div className="bg-surface-container-lowest/50 p-3 rounded-lg text-[11px] text-on-surface-variant italic">
                AI Summary: Low impact predicted for logistics hubs. Monitoring secondary waves.
              </div>
            </div>
          </div>
        </div>

        {/* Policy & Competitors */}
        <div className="space-y-4">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 text-on-surface">
              <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(172,137,255,0.5)]"></span>
              政策 & 竞争 (Policy & Competitors)
            </h2>
            <span className="text-[10px] text-on-surface-variant font-medium">STRATEGIC • 12H</span>
          </div>
          <div className="space-y-4">
            {[
              { title: '最新政策 (Policy): New green energy subsidies announced for Q4.', risk: 'opportunity', time: 'Just Now', summary: 'AI Summary: Direct alignment with current R&D pipeline. Potential 15% tax reduction.' },
              { title: '竞争企业 (Competitor): Competitor B shifts production to Vietnam.', risk: 'intelligence', time: '08:30 AM', summary: 'AI Summary: Labor cost optimization strategy detected. Potential price wars in Southeast Asian markets.' },
              { title: '厂家动态: Semiconductor partner announces 10% yield increase.', risk: 'manufacturer', time: 'Yesterday', summary: 'AI Summary: Supply stability improving. Recommend increasing order volume.' },
            ].map((item, i) => (
              <div key={i} className="glass-panel rounded-xl p-5 border-l-2 border-outline-variant/30 hover:bg-surface-container-highest transition-all">
                <div className="flex justify-between items-start mb-3">
                  <span className={`text-[10px] font-bold uppercase tracking-tighter px-2 py-0.5 rounded ${
                    item.risk === 'opportunity' ? 'bg-secondary/10 text-secondary' : 'bg-on-surface-variant/10 text-on-surface-variant'
                  }`}>
                    {item.risk}
                  </span>
                  <span className="text-[10px] text-on-surface-variant font-mono">{item.time}</span>
                </div>
                <h3 className="text-sm font-semibold mb-3 leading-tight">{item.title}</h3>
                <div className="bg-surface-container-lowest/50 p-3 rounded-lg text-[11px] text-on-surface-variant italic">
                  {item.summary}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
