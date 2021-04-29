import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "./index";

function Pokemon({ id }) {
  const [pokeData, setPokeData] = useState({
    id: "",
    name: "",
    image: "",
  });

  useEffect(() => {
    axios.get(`${id}`).then((res) => {
      const data = res.data;
      setPokeData({
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
      });
    });
  }, [id]);

  return <Card name={pokeData.name} id={pokeData.id} image={pokeData.image} />;
}

export default Pokemon;
