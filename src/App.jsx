
import { useState } from "react";
import PokemonCard from "./components/PokemonCard"
import NavBar from "./components/NavBar"
import { useEffect } from "react";



const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {

  useEffect(
    () => {
      alert("Hello pokemon trainer ! :)")
    },
    []
  );


  const [pokemonIndex, setPokemonIndex] = useState(0);


  const handleClickNext = () => {
    const nextIndex = pokemonIndex < pokemonList.length - 1 ? pokemonIndex + 1 : 0;
    if (nextIndex === 3) {
      alert("pika pikachu !!!");
    }
    setPokemonIndex(nextIndex);
  };

  const handleClickPrev = () => {

    const prevIndex = pokemonIndex > 0 ? pokemonIndex - 1 : pokemonList.length - 1;
    setPokemonIndex(prevIndex);
  };

  return (

    <div>
      <PokemonCard props={pokemonList[pokemonIndex]} />

      <NavBar prev={handleClickPrev} next={handleClickNext} />

    </div>
  )
}





export default App

