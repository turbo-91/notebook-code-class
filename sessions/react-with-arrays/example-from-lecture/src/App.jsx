import PokemonCard from "./components/PokemonCard";
import "./App.css";

export default function App() {
  const pokemons = [
    {
      id: "448",
      name: "Lucario",
      types: "fighting, steel",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/448.svg",
    },
    {
      id: "249",
      name: "Lugia",
      types: "psychic, flying",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/249.svg",
    },
    {
      id: "197",
      name: "Umbreon",
      types: "dark",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/197.svg",
    },
    {
      id: "445",
      name: "Garchomp",
      types: "dragon",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/445.svg",
    },
  ];

  const list = ['apple', 'banana', 'orange']

  const listJSX = [<h2>apple</h2>, <h2>banana</h2>]

  

  return (
    <main className="app">
      <h1 className="app__title">Pokédex</h1>
      <ul className="app__pokemons">
        {pokemons.map(pokemon => 
          <li >
            <PokemonCard
              id={pokemon.id}
              name={pokemon.name}
              types={pokemon.types}
              image={pokemon.image}
            />
          </li>
        )}
      </ul>
    </main>
  );
}