import {} from 'antd';
import './App.css';
import { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  
  return (
    <div className="App">
      <Sidebar showSidebar={showSidebar} />
      <Dashboard showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </div>
  );
}

export default App;
