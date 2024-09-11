import { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';

function App() {
  const [sidebarToggle,setSidebarToggle]=useState(false)
  return (
<>

<h1 className="flex">
      <Sidebar sidebarToggle={sidebarToggle} />
      <Dashboard
      sidebarToggle={sidebarToggle}
      setSidebarToggle={setSidebarToggle}
      />
    
    </h1>

</>
  );
}

export default App;
