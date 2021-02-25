import React, { useState } from 'react';
import Switch from './Components/Switch';

const App = () => {
  const [ on, setOn ] = useState(false);
  const toggle = () => setOn( o => !o );
  
  return (
    <Switch on={on} onToggle={toggle} />
  );
}

export default App;