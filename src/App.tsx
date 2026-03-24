import React, { useState } from 'react';
import { 
  HubView, 
  SourcesView, 
  IntelligenceView, 
  DiscoveryView, 
  ReportsView 
} from './views';
import { Sidebar } from './components/Sidebar';
import { TopNav } from './components/TopNav';
import { View } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('hub');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated && currentView === 'hub') {
    return <HubView onLogin={() => {
      setIsAuthenticated(true);
      setCurrentView('intelligence');
    }} />;
  }

  return (
    <div className="flex min-h-screen bg-background text-on-surface">
      <Sidebar currentView={currentView} onViewChange={setCurrentView} />
      <div className="flex-1 flex flex-col min-w-0">
        <TopNav currentView={currentView} />
        <main className="flex-1 overflow-y-auto no-scrollbar">
          {currentView === 'sources' && <SourcesView />}
          {currentView === 'intelligence' && <IntelligenceView />}
          {currentView === 'discovery' && <DiscoveryView />}
          {currentView === 'reports' && <ReportsView />}
        </main>
      </div>
    </div>
  );
}
