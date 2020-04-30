import React, {useState} from 'react';
import ToggleButton from './ToggleButton';


function App() {
  const [isButtonSelected, setIsButtonSelected] = useState(false)

  return (
    <div className="App">
      <ToggleButton 
        isActive={isButtonSelected} 
        defaultText="Hello"
        activeText="World"
        onClick={() => setIsButtonSelected(!isButtonSelected)}/>
    </div>
  );
}

export default App;
