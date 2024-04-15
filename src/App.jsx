import { useState, useEffect } from 'react';
import './App.css';
import SimpleBottomNavigation from './components/Navbar';

function App() {
  const [textMode, setTextMode] = useState(false);
  const [drawMode, setDrawMode] = useState(false);
  const [dots, setDots] = useState([]);
  const [textCoords, setTextCoords] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);  // Track if the mouse button is down

  useEffect(() => {
    // Add event listeners for mouse move and mouse up on the window to handle drawing outside component bounds
    const handleMouseMove = (event) => {
      if (isDrawing && drawMode) {  // Only track movement if drawing (mouse is down)
        setDots(dots => [...dots, { x: event.clientX, y: event.clientY }]);
      }
    };

    const handleMouseUp = () => {
      setIsDrawing(false);  // Stop drawing when mouse is released
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    // Clean up the event listeners when the component unmounts
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDrawing, drawMode]);  // Depend on isDrawing to reset event listeners when it changes

  const handleMouseDown = (event) => {
    setIsDrawing(true);  // Start drawing
    if (drawMode)
      setDots(dots => [...dots, { x: event.clientX, y: event.clientY }]);
    else if (textMode){
      //write code here
      const text = prompt("Enter text that you wish to add");
      if (text)
        setTextCoords(textCoords => [...textCoords, {x: event.clientX, y: event.clientY, text}])
    }
  };

  return (
    <>
      <div className="navbar-top">
        <SimpleBottomNavigation setDrawMode={setDrawMode} setTextMode={setTextMode}/>
      </div>
      <div
        onMouseDown={handleMouseDown}
        style={{ width: '100vw', height: '100vh', cursor: 'crosshair' }}
      >
        {dots.map((dot, index) => (
          <div key={index} style={{
            position: 'absolute',
            left: `${dot.x}px`,
            top: `${dot.y}px`,
            width: '20px',
            height: '10px',
            backgroundColor: 'black',
            borderRadius: '50%',
          }} />
        ))}

        {textCoords.map((item, index) => (
          <div key={index} style={{
            position: 'absolute',
            left: `${item.x}px`,
            top: `${item.y}px`,
            color: 'white', // Ensure text is visible on a typical dark background
            userSelect: 'none' // Prevent text from being selectable
          }}>
            {item.text}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;