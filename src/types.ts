export type View = 'hub' | 'sources' | 'intelligence' | 'discovery' | 'reports';

export interface AgentStatus {
  name: string;
  status: 'active' | 'idle' | 'synthesizing';
  progress?: number;
}

export interface DataSource {
  id: string;
  name: string;
  url: string;
  type: 'real-time' | 'daily' | 'dynamic';
  health: 'excellent' | 'stable' | 'optimizing';
  healthValue: number;
  lastCapture: string;
  agent?: string;
}

export interface IntelligenceItem {
  id: string;
  title: string;
  summary: string;
  risk: 'high' | 'medium' | 'low' | 'opportunity';
  time: string;
  category: string;
  tags: string[];
  score?: number;
  source?: string;
  image?: string;
}
