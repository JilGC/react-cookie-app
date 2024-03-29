import { Link, Outlet } from "react-router-dom";
import './App.css';


export function Home() {
  return (
    <div>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
      <h1>My Website</h1>
    </div>
  )
}

export function About() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
      <h1>About us</h1>
      <Outlet />
    </div>
  )
}

export function History() {
  return (
    <div>
      <h1>This is history</h1>
    </div>
  )
}

export function Contact() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
      <h1>Contact us</h1>
    </div>
  )
}

export function App() {

  return <Home />;
}

// export default App;


/*
import { useEffect, useState } from 'react';
import './App.css';

function GithubUser({ name, location, avatar }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{location}</p>
      <img src={avatar} height={150} alt={name} />
    </div>
  );
}

function App() {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch(`https://api.github.com/users/jilgc`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);

  if (loading) return <h1>Loading...</h1>
  if (error) return <pre>{JSON.stringify(error)}</pre>
  if (!data) return null;

  return (
    <GithubUser
      name={data.name}
      location={data.location}
      avatar={data.avatar_url}
    />
  );
}

export default App;


*/


/*
//fetching data from api

import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/jilgc`)
      .then((response) => response.json())
      .then(setData);
  }, []);

  if (data)
    return (
      <pre>{JSON.stringify(data, null, 2)}</pre>
    )
  return <h1>Data</h1>;
}

export default App;
*/





/*
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

*/








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