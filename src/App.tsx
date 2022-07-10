import React from 'react';
import './App.css';
import { Thumbnail } from './features/thumbnail/Thumbnail';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        IMGUR IMAGE GALLERY
      </header>
      <Thumbnail />
    </div>
  );
}

export default App;
