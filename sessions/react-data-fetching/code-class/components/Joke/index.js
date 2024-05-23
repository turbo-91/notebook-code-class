import { useEffect, useState } from "react";
import useSWR from "swr";

// function useFetch(url) {
//   const [data, setData] = useState();

//   useEffect(() => {
//     async function startFetching() {
//       const response = await fetch(url);
//       const newData = await response.json();

//       setData(newData);
//     }

//     startFetching();
//   }, [url]);

//   return data;
// }

export default function Joke() {
  const [id, setId] = useState(0);

  // const data = useFetch(`https://example-apis.vercel.app/api/bad-jokes/${id}`);
  const { data } = useSWR(
    `https://example-apis.vercel.app/api/bad-jokes/${id}`
  );

  function handlePrevJoke() {
    setId(data.prevId);
  }

  function handleNextJoke() {
    setId(data.nextId);
  }

  // initialize the local state with an empty array (to store the state of the buttons)
  const [jokesInfo, setJokesInfo] = useState([]);

  function handleToggleFunny(id) {
    setJokesInfo((jokesInfo) => {
      // find the joke in the state
      const info = jokesInfo.find((info) => info.id === id);

      // if the joke is already in the state, toggle the isFunny property
      if (info) {
        return jokesInfo.map((info) =>
          info.id === id ? { ...info, isFunny: !info.isFunny } : info
        );
      }

      // if the joke is not in the state, add it with isFunny set to true
      return [...jokesInfo, { id, isFunny: true }];
    });
  }
  // up until here we are just managing "invisible" state stuff for the isFunny button

  if (!data) {
    return <h1>Loading...</h1>;
  }

  // find the joke in the newly created state (for the button), default isFunny to false
  const info = jokesInfo.find((info) => info.id === id) ?? { isFunny: false };

  const { isFunny } = info;

  return (
    <>
      <small>ID: {id}</small>
      <h1>
        {data.joke} {/*this displays the joke itself*/}
        <span
          role="img"
          aria-label={isFunny ? "A laughing face" : "An unamused face"}
        >
          {isFunny ? "🤣" : "😒"}
        </span>
        {/*the span renders an empoji depending on the state we managed in the handleToggleFunny function*/}
      </h1>
      <div>
        <button type="button" onClick={() => handleToggleFunny(id)}>
          {isFunny ? "Stop laughing" : "Start laughing"}
        </button>
      </div>
      {/* this div contains the actual html button that receives the logic/functionality in form of handleToglleFunny via the onClick attribute */}
      <div>
        <button type="button" onClick={handlePrevJoke}>
          ← Prev Joke
        </button>
        <button type="button" onClick={handleNextJoke}>
          Next Joke →
        </button>
      </div>
    </>
  );
}
