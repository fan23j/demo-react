import logo from './logo.svg';
import './App.css';
import React from 'react';
import data from './data'

function App() {

  React.useEffect(()=>{

    const script = document.createElement("script");
    script.src = './data.js';
    script.async = true;
    document.body.appendChild(script);

  },[])
  
  return (
    <div>
      <div id="stats" />
      <div id="main">
        <div className="container">
          <div className="canvas-wrapper">
            <canvas id="output" />
            <video id="video" playsInline style={{ WebkitTransform: 'scaleX(-1)', transform: 'scaleX(-1)', visibility: 'hidden', width: 'auto', height: 'auto' }}>
            </video>
          </div>
          <div id="scatter-gl-container" />
        </div>
      </div>
    </div>

  );
}

export default App;
