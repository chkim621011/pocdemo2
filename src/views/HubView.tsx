import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Shield, Mail, Lock, ChevronRight, Globe, Cpu, Users } from 'lucide-react';

export function HubView({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #46484d 1px, transparent 0)', backgroundSize: '40px 40px' }}>
      </div>

      {/* Header */}
      <header className="p-6 flex justify-between items-center relative z-10">
        <span className="text-xl font-bold text-primary tracking-tighter font-headline">XIANNIU BRAIN</span>
        <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
          <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> SOVEREIGN PROTOCOL</span>
          <Globe className="w-4 h-4 cursor-pointer hover:text-primary transition-colors" />
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-6 relative z-10">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 border border-secondary/20 rounded-full">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">AI Agent Collaboration Active</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-headline font-bold tracking-tighter leading-none">
              Enter the <span className="text-primary italic">Intelligence</span> Hub
            </h1>
            
            <p className="text-on-surface-variant text-lg max-w-md leading-relaxed">
              Orchestrate complex enterprise workflows through our sovereign observer platform. Data-driven authority at scale.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
              <div className="p-6 bg-surface-container-low rounded-xl border border-outline-variant/10 space-y-4">
                <Cpu className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="font-bold uppercase text-xs tracking-widest">Compute Nodes</h3>
                  <p className="text-[10px] text-on-surface-variant">Global distribution: 14/14 Online</p>
                </div>
              </div>
              <div className="p-6 bg-surface-container-low rounded-xl border border-outline-variant/10 space-y-4">
                <Users className="w-6 h-6 text-secondary" />
                <div>
                  <h3 className="font-bold uppercase text-xs tracking-widest">Active Agents</h3>
                  <p className="text-[10px] text-on-surface-variant">2,492 Concurrent Instances</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content: Auth Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-panel p-10 rounded-2xl border border-outline-variant/20 shadow-2xl space-y-8"
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-headline font-bold">System Authentication</h2>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">Enterprise Access Portal</p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Enterprise Email Address</label>
                <div className="relative group">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full bg-surface-container-lowest border-b-2 border-outline-variant p-4 text-sm focus:border-primary focus:ring-0 transition-all outline-none"
                  />
                  <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant group-focus-within:text-primary" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Security Credentials</label>
                <div className="relative group">
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-surface-container-lowest border-b-2 border-outline-variant p-4 text-sm focus:border-primary focus:ring-0 transition-all outline-none"
                  />
                  <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant group-focus-within:text-primary" />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input type="checkbox" className="rounded bg-surface-container border-outline-variant text-primary focus:ring-0" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant group-hover:text-on-surface transition-colors">Keep Session Encrypted</span>
                </label>
                <button className="text-[10px] font-bold uppercase tracking-widest text-secondary hover:text-primary transition-colors">Identity Recovery?</button>
              </div>

              <button 
                onClick={onLogin}
                className="w-full py-4 tonal-gradient text-on-primary-fixed font-bold uppercase tracking-[0.2em] rounded-lg shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all active:scale-95"
              >
                Enter Intelligence Hub
              </button>
            </div>

            <div className="p-4 bg-surface-container-lowest/50 rounded-lg border border-outline-variant/10 flex gap-4">
              <Shield className="w-5 h-5 text-secondary shrink-0" />
              <div className="space-y-1">
                <h4 className="text-[10px] font-bold uppercase tracking-widest">Private Deployment Security</h4>
                <p className="text-[9px] text-on-surface-variant leading-relaxed">
                  Data is processed within your air-gapped environment. No external model training authorized.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant relative z-10">
        <span>© 2024 XIANNIU INTELLIGENCE. SOVEREIGN SECURITY PROTOCOL ACTIVE.</span>
        <div className="flex gap-8">
          <button className="hover:text-on-surface transition-colors">Privacy Policy</button>
          <button className="hover:text-on-surface transition-colors">Terms of Service</button>
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> System Status</span>
        </div>
      </footer>
    </div>
  );
}
