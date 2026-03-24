import React from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  SlidersHorizontal, 
  ArrowRight, 
  Clock, 
  FileText, 
  Sparkles,
  Zap,
  Bot
} from 'lucide-react';
import { IntelligenceItem } from '../types';

const mockResults: IntelligenceItem[] = [
  {
    id: '1',
    title: 'State Grid: Strategic Deployment of 10GW Offshore Wind Capacity in Bohai Rim',
    summary: 'Detailed analysis of the new framework favoring large-scale offshore turbine clusters. Expected to catalyze over $14B in private sector infrastructure investment by 2026.',
    risk: 'opportunity',
    time: '2h ago',
    category: 'Renewables',
    tags: ['AI Tagged'],
    score: 94,
    source: 'Gov. Central Repository',
    image: 'https://picsum.photos/seed/wind/200/200'
  },
  {
    id: '2',
    title: 'Tier-1 PV Manufacturers Shifting Focus to Perovskite Hybrid Integration',
    summary: 'Market intelligence reveals a 40% increase in patent filings related to perovskite-silicon tandem cells by key players in the Yangtze River Delta industrial park.',
    risk: 'medium',
    time: '5h ago',
    category: 'Manufacturing',
    tags: ['AI Tagged'],
    score: 78,
    source: 'Industrial Intelligence Node',
    image: 'https://picsum.photos/seed/solar/200/200'
  },
  {
    id: '3',
    title: 'Beijing Pilot: AI-Driven Load Balancing for Residential Charging Networks',
    summary: 'Regulatory greenlight for autonomous grid-edge intelligence testing. Policy shift indicates a move toward decentralised energy management standards.',
    risk: 'high',
    time: '8h ago',
    category: 'Smart Grid',
    tags: ['AI Tagged'],
    score: 88,
    source: 'Urban Dynamics Feed',
    image: 'https://picsum.photos/seed/grid/200/200'
  }
];

export function DiscoveryView() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight">Intelligence Discovery Center</h1>
        <p className="text-on-surface-variant max-w-2xl mx-auto text-sm leading-relaxed">
          High-precision AI-driven search across the global energy ecosystem. Identify shifts in policy, infrastructure, and investment.
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-4xl mx-auto">
        <div className="glass-panel p-2 rounded-xl border border-outline-variant/20 flex items-center gap-2 shadow-2xl">
          <div className="pl-4 flex items-center text-primary">
            <Search className="w-5 h-5" />
          </div>
          <input 
            type="text" 
            placeholder="Search by policy, project, or keyword (e.g., 'Offshore Wind investment trends')"
            className="flex-1 bg-transparent border-none focus:ring-0 text-on-surface placeholder-on-surface-variant/50 py-4 font-body text-sm"
          />
          <div className="flex items-center gap-2 pr-2">
            <button className="px-4 py-2 bg-surface-container-high hover:bg-surface-container-highest text-primary rounded-lg text-[10px] font-bold uppercase tracking-wider transition-colors border border-outline-variant/20 flex items-center gap-2">
              <SlidersHorizontal className="w-3 h-3" />
              Multi-Dim
            </button>
            <button className="px-6 py-2 tonal-gradient text-on-primary-fixed rounded-lg font-bold text-sm transition-transform active:scale-95">
              Discover
            </button>
          </div>
        </div>
      </div>

      {/* Keyword Matrix */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {[
          { label: 'Energy Hub', value: '新型能源' },
          { label: 'Renewables', value: '新能源' },
          { label: 'Wind', value: '风电' },
          { label: 'Solar', value: '光伏' },
          { label: 'Storage', value: '储能' },
          { label: 'Hydrogen', value: '氢能' },
          { label: 'Operations', value: '电力运营' },
          { label: 'AI Recommendation', value: '碳中和路径优化', span: 2, secondary: true },
          { label: 'Grid', value: '智能电网' },
          { label: 'Bio', value: '生物质能' },
          { label: 'Nuclear', value: '核能安全' },
        ].map((item, i) => (
          <div 
            key={i} 
            className={`p-4 bg-surface-container-low rounded-xl border border-outline-variant/10 hover:border-primary/40 transition-all cursor-pointer group ${item.span ? 'col-span-2' : ''}`}
          >
            <span className={`text-[10px] uppercase font-bold block mb-1 ${item.secondary ? 'text-secondary' : 'text-primary/60'}`}>
              {item.label}
            </span>
            <span className="text-sm font-medium group-hover:text-primary transition-colors">{item.value}</span>
          </div>
        ))}
      </div>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-72 space-y-10">
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Business Type</h4>
            <div className="space-y-3">
              {['Industry News', 'Factory Dynamics', 'Investment Data'].map((filter, i) => (
                <label key={i} className="flex items-center gap-3 text-sm text-on-surface-variant cursor-pointer hover:text-primary group">
                  <input type="checkbox" className="rounded bg-surface-container border-outline-variant text-primary focus:ring-0" />
                  <span className="transition-colors">{filter}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Information Type</h4>
            <div className="space-y-3">
              {['Tendering (招标)', 'Equipment Specs', 'Marketing Reports'].map((filter, i) => (
                <label key={i} className="flex items-center gap-3 text-sm text-on-surface-variant cursor-pointer hover:text-primary group">
                  <input type="checkbox" className="rounded bg-surface-container border-outline-variant text-primary focus:ring-0" />
                  <span className="transition-colors">{filter}</span>
                </label>
              ))}
            </div>
          </div>

          {/* AI Policy Guide */}
          <div className="p-6 rounded-2xl bg-surface-container-low border border-secondary/20 relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-secondary/5 rounded-full blur-2xl group-hover:bg-secondary/10 transition-colors"></div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-4 flex items-center gap-2">
              <Zap className="w-3 h-3" /> AI Policy Guide
            </h4>
            <p className="text-xs text-on-surface-variant mb-6 leading-relaxed">Concentrated overview of latest industry standards and regulatory shifts.</p>
            <ul className="space-y-4">
              <li className="text-[11px] flex items-start gap-3 text-on-surface hover:text-secondary cursor-pointer transition-colors">
                <span className="text-secondary opacity-50 mt-1">•</span>
                2024 Green Hydrogen Subsidy Standard
              </li>
              <li className="text-[11px] flex items-start gap-3 text-on-surface hover:text-secondary cursor-pointer transition-colors">
                <span className="text-secondary opacity-50 mt-1">•</span>
                Ultra-High Voltage Grid Expansion Act
              </li>
            </ul>
            <button className="mt-6 w-full py-2.5 bg-secondary-container text-[10px] uppercase font-bold tracking-widest rounded-lg border border-secondary/20 hover:bg-secondary-container/80 transition-colors">
              View All Standards
            </button>
          </div>
        </aside>

        {/* Results List */}
        <div className="flex-1 space-y-6">
          <div className="flex justify-between items-center px-2">
            <span className="text-xs text-on-surface-variant font-medium">Found 12,482 intelligence items</span>
            <div className="flex items-center gap-4">
              <span className="text-xs text-on-surface-variant">Sort by:</span>
              <select className="bg-transparent border-none text-xs text-primary focus:ring-0 font-bold p-0 cursor-pointer">
                <option>Policy Impact</option>
                <option>Recency</option>
                <option>Relevance</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            {mockResults.map((item) => (
              <motion.div 
                key={item.id}
                whileHover={{ scale: 1.01 }}
                className="bg-surface-container p-6 rounded-2xl border border-outline-variant/10 hover:border-primary/30 transition-all flex gap-8 group cursor-pointer"
              >
                <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0 border border-outline-variant/20">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-1 space-y-3">
                  <div className="flex justify-between items-start">
                    <div className="flex gap-2">
                      {item.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-0.5 bg-secondary-container/50 text-[10px] text-on-secondary-container font-bold rounded uppercase">
                          {tag}
                        </span>
                      ))}
                      <span className="px-2 py-0.5 bg-surface-variant text-[10px] text-on-surface-variant font-bold rounded uppercase">
                        {item.category}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] uppercase text-on-surface-variant font-bold block mb-1">政策影响 Score</span>
                      <span className={`text-2xl font-headline font-bold ${item.score! > 90 ? 'text-primary' : item.score! > 80 ? 'text-secondary' : 'text-tertiary'}`}>
                        {item.score}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant line-clamp-2 leading-relaxed">
                    {item.summary}
                  </p>
                  <div className="flex items-center justify-between text-[11px] text-on-surface-variant pt-2">
                    <div className="flex items-center gap-6">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" /> {item.time}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5" /> {item.source}
                      </span>
                    </div>
                    <button className="text-primary font-bold hover:underline flex items-center gap-1.5">
                      Full Analysis
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* FAB */}
      <button className="fixed bottom-8 right-8 w-14 h-14 tonal-gradient text-on-primary-fixed rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50">
        <Bot className="w-7 h-7" />
      </button>
    </div>
  );
}
