
import React,{useState,useEffect} from 'react';
import './App.css';
import MouseClick from './MouseClick';
import MouseHover from './MouseHover';
import HocComponent from './HocComponent';
import ClassComponent from './ClassComponent';
import Hooks from './Hooks'
const UpdatedMouseClick = HocComponent(MouseClick);
const UpdatedMouseHover = HocComponent(MouseHover);




function App(){
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <Hooks />
    </div>
  )
}

export default App;
