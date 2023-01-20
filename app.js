import logo from './logo.svg';
import './App.css';

import Welcome from './components/Welcome';
import { useState } from 'react';

function App() {
  const [displayed, setDisplayed] = useState(false);

  const [name , setName] = useState('')

  const handleClick = event => {
   
    setDisplayed(true);

  }
  const handleChange = (event) => {
    setName(event.target.value);
    setDisplayed(false)
  };

  return (
    <div>
        <h1>Web Development Assignment</h1>
        <p>Enter you name: <input value={name} onChange={handleChange}>

        </input> <button type='submit' onClick={handleClick}>Login</button></p>

        {/* 👇️ show elements on click */}
        {displayed && <Welcome name={name}/>}
        <p>Assignment done by Ishika Chauhan(12017375) </p>
    </div>
  );
}

export default App;