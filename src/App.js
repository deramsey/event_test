import './App.css';
import {useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return(
    <div>
    <h1>{count}</h1><br/>
    <button onClick = {() => setCount(count+2) }>Click Me to Increment</button>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
