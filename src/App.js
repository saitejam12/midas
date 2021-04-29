import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pokemon, Buttons } from "./components/index";
import "./App.css";

function App() {
  const [data, setData] = useState({
    prev: "",
    next: "",
    pokemons: [],
  });

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=3`).then((res) => {
      setData({
        prev: res.data.previous ? res.data.previous : null,
        next: res.data.next,
        pokemons: res.data.results,
      });
    });
  }, []);

  const callbackFunction = (newURL) => {
    axios.get(newURL).then((res) => {
      const data = res.data;
      setData({
        prev: data.previous,
        next: data.next,
        pokemons: data.results,
      });
    });
  };

  return (
    <div className='App'>
      <div className='pokemons'>
        {data.pokemons.map((pok) => (
          <Pokemon index={pok.name} id={pok.url} />
        ))}
      </div>
      <div className='buttonPanel'>
        <Buttons buttonCode={0} buttonAction={data.prev} backFunction={callbackFunction} />
        <Buttons buttonCode={1} buttonAction={data.next} backFunction={callbackFunction} />
      </div>
    </div>
  );
}

export default App;
