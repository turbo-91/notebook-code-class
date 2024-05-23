import { useEffect, useState } from "react";
import "./Joke.css";

export default function Joke() {
  const [joke, setJoke] = useState();
  const [id, setId] = useState(0);

  useEffect(() => {
    async function startFetching() {
      try {
        const response = await fetch(
          `https://example-apis.vercel.app/api/bad-jokes/${id}`
        );
        const joke = await response.json();
        setJoke(joke);
      } catch (e) {
        console.error(e.message);
      }
    }
    startFetching();
  }, [id]);

  // const updateJoke = async (_id) => {
  //   const response = await fetch(
  //     `https://example-apis.vercel.app/api/bad-jokes/${_id}`
  //   );
  //   const data = await response.json();
  //   setJoke(data);
  // };

  console.log("joke", joke);
  // console.log("id", id);

  if (!joke) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>{joke.joke}</h1>
      <button
        type="button"
        className="button"
        // onClick={() => updateJoke(joke.nextId)}
        onClick={() => setId(joke.nextId)}
      >
        Next Joke
      </button>
    </>
  );
}
