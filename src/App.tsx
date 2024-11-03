import React from 'react';
import { Sidebar } from './components/Sidebar';
import { KanbanBoard } from './components/KanbanBoard';
import { SprintPlanning } from './components/SprintPlanning';
import { Login } from './components/Login';
import { useStore } from './store/useStore';

function App() {
  const { currentUser } = useStore();

  if (!currentUser) {
    return <Login />;
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 overflow-x-hidden">
        <div className="p-6">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Panel de Proyecto</h1>
            <p className="text-gray-600 mt-2">Gestiona las tareas y sprints de tu proyecto ágil</p>
          </header>
          <KanbanBoard />
          {currentUser.role === 'scrum_master' && <SprintPlanning />}
        </div>
      </main>
    </div>
  );
}

export default App;