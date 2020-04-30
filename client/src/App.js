import React, {useState} from 'react';
import ToggleButton from './ToggleButton';


function App() {
  const [isButtonSelected, setIsButtonSelected] = useState(false)

  return (
    <div className="App">
      <ToggleButton 
        isActive={isButtonSelected} 
        onClick={() => setIsButtonSelected(!isButtonSelected)}>
      Hello</ToggleButton>
    </div>
  );
}

export default App;
