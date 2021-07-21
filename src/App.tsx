import React from 'react';
import './App.css';
import './tailwind.output.css';
import Main from './components/Main';

function App() {
  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500">
       <header>
         <Main />
      </header>
    </div>
  );
}

export default App;
