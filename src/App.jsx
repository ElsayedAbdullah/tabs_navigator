import { useState } from 'react';
import './App.css';
import Tabs from './components/Tabs';

function App() {
  const [activeTab, setActiveTab] = useState('users');
  return (
    <>
      <div className='container'>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </>
  );
}

export default App;
