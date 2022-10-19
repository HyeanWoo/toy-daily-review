import React from 'react';
import { useState } from 'react';

const App = () => {
  const [flag, setFlag] = useState(false);
  
  const onMeButtonClick = () => {
    setFlag(prev => !prev);
  }

  return (
    <div>
      <div>
        <h3>
          Welcome to React without CRA!!
        </h3>
        <span>
          current state: {`${flag}`}
        </span>
      </div>
      <button onClick={onMeButtonClick}>click me</button>
    </div>
  )
}

export default App;