import { useState } from 'react';
import './App.css';


// this is a custom hook 
function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  return [
    {
      value,
      onChange: (e) => setValue(e.target.value)
    },
    () => setValue(initialValue)
  ]
}

function App() {

  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const submit = (e) => {
    e.preventDefault();
    alert(`${titleProps.value}, ${colorProps.value}`);

    resetTitle();
    resetColor();
  }

  return (
    <form onSubmit={submit}>
      <input
        {...titleProps}
        type="text"
        placeholder="color title..." />
      <input
        {...colorProps}
        type="color" />
      <button>Add</button>
    </form>
  );
}

export default App;








/*

import { useState } from 'react';
import './App.css';

function App() {

  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#000000");

  const submit = (e) => {
    e.preventDefault();
    alert(`${title}, ${color}`);

    setTitle("");
    setColor("#000000");
  }

  return (
    <form onSubmit={submit}>
      <input
        value={title}
        onChange={(event) =>
          setTitle(event.target.value)
        }
        type="text"
        placeholder="color title..." />
      <input
        value={color}
        onChange={(event) => {
          setColor(event.target.value)
        }
        }
        type="color" />
      <button>Add</button>
    </form>
  );
}

export default App;

*/




/* 
import { useReducer } from "react";
import './App.css';

function App() {

  const [checked, setChecked] = useReducer(checked => !checked, false);

  return (
    <div className="App">
      <div className="mainContainer">
        <input type='checkbox' value={checked} onChange={setChecked} />
        <label>{checked ? 'checked' : 'not Checked'}</label>
      </div>
    </div>
  );
}

export default App;

*/









/*
import { useEffect, useState } from "react";
import './App.css';

function App() {

  const [emotion, setEmotion] = useState("Happy");
  const [secondary, setSecondary] = useState("tired");

  useEffect(() => {
    console.log(`It's ${emotion} right now`);
  }, [emotion])

  useEffect(() => {
    console.log(`It's ${secondary} right now`)
  }, [secondary])

  return (
    <div className="App">
      <div className="mainContainer">
        <h1>Current emotion is {emotion}</h1>
        <button className="p-2  bg-slate-600" onClick={() => { setEmotion("Sad") }}>Sad</button>
        <button className="p-2  bg-slate-600" onClick={() => { setEmotion("Excited") }}>Excited!</button>


        <h1>Current secondary emotion is {secondary}</h1>
        <button className="p-2  bg-slate-600" onClick={() => { setSecondary("grateful") }}>grateful</button>
      </div>
    </div>
  )
}

export default App;
*/





/* 

const dishes = [
   "Black Bean Soup",
   "Macaroni and Cheese",
   "Salmon and Potatoes"
 ]

const dishObjects = dishes.map((dish, i) => ({
  id: i,
  title: dish
}))


function App() {
  return (
    <div className="App">
      <Header name="Sm0oth" />
      <Main dishes={dishObjects} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}
*/