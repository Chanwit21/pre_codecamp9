import React , {useState} from 'react';
import Counter from './Counter'
import './App.css';

function App() {
  const [show ,setShow] = useState(true)

  function handleToggle () {
    setShow(!show)
  }
  return (
    <div className="App">
      {show && <Counter />}
      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
}

export default App;
