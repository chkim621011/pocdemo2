import React from 'react';
import { motion } from 'motion/react';
import { 
  Activity, 
  Shield, 
  Database, 
  Zap, 
  Globe, 
  Webhook, 
  Bot, 
  PlusCircle, 
  BarChart, 
  X,
  ChevronDown,
  Check
} from 'lucide-react';
import { DataSource } from '../types';

const mockSources: DataSource[] = [
  {
    id: '1',
    name: 'Financial Times',
    url: 'ft.com/markets',
    type: 'real-time',
    health: 'excellent',
    healthValue: 94,
    lastCapture: '2 mins ago'
  },
  {
    id: '2',
    name: 'TradingView API',
    url: 'Internal Data Node',
    type: 'daily',
    health: 'stable',
    healthValue: 82,
    lastCapture: '14 hours ago'
  },
  {
    id: '3',
    name: 'AI Smart Capture',
    url: 'Unstructured Web Intel',
    type: 'dynamic',
    health: 'optimizing',
    healthValue: 70,
    lastCapture: 'Active Agent: Observer-7'
  }
];

export function SourcesView() {
  return (
    <div className="p-8 space-y-10">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-headline font-bold tracking-tight">Source & Strategy Management</h1>
          <p className="text-on-surface-variant mt-2">
            数据源与策略管理 <span className="mx-2 text-outline-variant">|</span> Configure enterprise intelligence ingestion nodes.
          </p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-surface-container rounded-lg border border-outline-variant/10">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Live Monitoring Active</span>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Collaboration Status */}
        <section className="col-span-12 lg:col-span-8">
          <div className="bg-surface-container rounded-xl p-8 relative overflow-hidden border border-outline-variant/10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 blur-[100px] -mr-32 -mt-32"></div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-1">AI Agent Collaboration Status</h3>
                  <p className="text-xl font-headline font-semibold">AI 智能清洗协作状态</p>
                </div>
                <div className="flex -space-x-2">
                  {[Bot, Shield, Database].map((Icon, i) => (
                    <div key={i} className={`w-10 h-10 rounded-full border-2 border-surface-container flex items-center justify-center ${
                      i === 0 ? 'bg-secondary-container' : i === 1 ? 'bg-tertiary-container' : 'bg-primary-container'
                    }`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { label: 'Deduplication', value: '99.8%', sub: 'Efficiency', color: 'primary', progress: 99 },
                  { label: 'Neural Mapping', value: 'Active', sub: '8 Nodes', color: 'secondary', progress: 75 },
                  { label: 'Validation Latency', value: '42ms', sub: 'Ultra-low', color: 'tertiary', progress: 20 },
                ].map((stat, i) => (
                  <div key={i} className="recessed-surface rounded-lg p-4 space-y-3">
                    <p className="text-[10px] text-on-surface-variant uppercase font-bold">{stat.label}</p>
                    <div className="flex items-end gap-2">
                      <span className={`text-2xl font-headline font-bold text-${stat.color}`}>{stat.value}</span>
                      <span className={`text-[10px] text-${stat.color}/60 pb-1`}>{stat.sub}</span>
                    </div>
                    <div className="w-full h-1 bg-surface-variant rounded-full overflow-hidden">
                      <div className={`h-full bg-${stat.color}`} style={{ width: `${stat.progress}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* LLM Registration */}
        <section className="col-span-12 lg:col-span-4">
          <div className="bg-surface-container-low rounded-xl p-6 h-full border border-outline-variant/10">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-headline font-bold">LLM Registration</h3>
              <PlusCircle className="w-5 h-5 text-primary cursor-pointer" />
            </div>
            <div className="space-y-4">
              {[
                { name: 'GPT-4 Turbo', type: 'Public API • Active', icon: Zap, color: 'primary' },
                { name: 'Llama-3-70B', type: 'Private Cluster • Active', icon: Shield, color: 'secondary' },
                { name: 'Claude 3 Opus', type: 'Public API • Offline', icon: Globe, color: 'outline', offline: true },
              ].map((llm, i) => (
                <div key={i} className={`flex items-center justify-between p-3 rounded-lg bg-surface hover:bg-surface-container-highest transition-colors cursor-pointer group ${llm.offline ? 'opacity-50' : ''}`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded bg-surface-container-high flex items-center justify-center text-${llm.color} group-hover:scale-110 transition-transform`}>
                      <llm.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{llm.name}</p>
                      <p className="text-[10px] text-on-surface-variant">{llm.type}</p>
                    </div>
                  </div>
                  <div className={`w-2 h-2 rounded-full bg-${llm.offline ? 'outline' : 'primary'}`}></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Source Repository */}
        <section className="col-span-12 lg:col-span-8">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-xl font-headline font-bold">Data Source Repository</h3>
            <div className="flex gap-2">
              {['All Sources', 'API Only', 'Web Scraping'].map((filter, i) => (
                <button key={i} className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full transition-all ${
                  i === 0 ? 'bg-surface-container-highest text-on-surface border border-outline-variant/20' : 'text-on-surface-variant hover:text-on-surface'
                }`}>
                  {filter}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mockSources.map((source) => (
              <div key={source.id} className="bg-surface-container-low rounded-xl p-5 group hover:bg-surface-container-high transition-all duration-300 border border-outline-variant/5">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center">
                      <Globe className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-on-surface">{source.name}</h4>
                      <p className="text-xs text-on-surface-variant">{source.url}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${
                    source.type === 'real-time' ? 'bg-primary/10 text-primary border border-primary/20' : 'bg-surface-container text-on-surface-variant'
                  }`}>
                    {source.type}
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-xs">
                    <span className="text-on-surface-variant">Health Status</span>
                    <span className={`${source.health === 'excellent' ? 'text-primary' : 'text-on-surface'} font-bold capitalize`}>{source.health}</span>
                  </div>
                  <div className="w-full h-1 bg-surface-container rounded-full overflow-hidden">
                    <div className={`h-full ${source.health === 'excellent' ? 'bg-primary' : 'bg-secondary'}`} style={{ width: `${source.healthValue}%` }}></div>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-[10px] text-on-surface-variant">Last capture: {source.lastCapture}</span>
                    <BarChart className="w-4 h-4 text-outline-variant group-hover:text-primary transition-colors cursor-pointer" />
                  </div>
                </div>
              </div>
            ))}
            <button className="border-2 border-dashed border-outline-variant/20 rounded-xl p-5 flex flex-col items-center justify-center group hover:border-primary/50 transition-all">
              <PlusCircle className="w-8 h-8 text-outline-variant group-hover:text-primary mb-2" />
              <span className="text-sm font-medium text-on-surface-variant group-hover:text-on-surface">Register New Source</span>
            </button>
          </div>
        </section>

        {/* Strategy Config */}
        <section className="col-span-12 lg:col-span-4">
          <div className="glass-panel border border-primary/20 rounded-xl p-6 shadow-2xl relative overflow-hidden h-full">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 blur-[60px]"></div>
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-lg font-headline font-bold">Strategy Config</h3>
              <X className="w-5 h-5 text-on-surface-variant cursor-pointer hover:text-on-surface" />
            </div>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Target URL / Endpoint</label>
                <div className="recessed-surface rounded p-3 border-b-2 border-outline-variant">
                  <p className="text-sm font-body text-primary truncate">https://api.bloomberg.com/v2/market/data</p>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Capture Frequency</label>
                <div className="grid grid-cols-3 gap-2">
                  {['Real-time', 'Hourly', 'Daily'].map((freq, i) => (
                    <button key={i} className={`py-2 text-[10px] font-bold uppercase rounded transition-all ${
                      i === 0 ? 'bg-surface-container-highest border border-primary/50 text-primary' : 'bg-surface hover:bg-surface-container-highest'
                    }`}>
                      {freq}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Processing Model</label>
                <div className="relative">
                  <select className="w-full bg-surface-container rounded border-none text-sm focus:ring-1 focus:ring-primary py-3 appearance-none px-4">
                    <option>Llama-3-70B (Private)</option>
                    <option>GPT-4 Turbo (Public)</option>
                    <option>DeepSeek 67B (Internal)</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant pointer-events-none" />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Auto-Extraction Rules</label>
                {[
                  { label: 'Sentiment Analysis', checked: true },
                  { label: 'Entity Recognition (NER)', checked: true },
                  { label: 'Summary Generation', checked: false },
                ].map((rule, i) => (
                  <label key={i} className="flex items-center gap-3 cursor-pointer group">
                    <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${
                      rule.checked ? 'bg-primary border-primary' : 'bg-surface-container-highest border-outline-variant group-hover:border-primary'
                    }`}>
                      {rule.checked && <Check className="w-3 h-3 text-on-primary-fixed" />}
                    </div>
                    <span className="text-xs text-on-surface-variant group-hover:text-on-surface">{rule.label}</span>
                  </label>
                ))}
              </div>

              <div className="pt-4">
                <button className="w-full py-3 rounded-lg tonal-gradient text-on-primary-fixed font-bold text-sm shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all active:scale-95">
                  Deploy Strategy
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
