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
// const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Joke() {
  const [id, setId] = useState(0);
  const [jokesInfo, setJokesInfo] = useState([]);

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

  const handleToggleFunny = (id) => {
    const info = jokesInfo.find((info) => info.id === id);
    if (info) {
      const newInfo = jokesInfo.map((info) =>
        info.id === id ? { ...info, isFunny: !info.isFunny } : info
      );
      setJokesInfo(newInfo);
    } else {
      const newInfo = [...jokesInfo, { id, isFunny: true }];
      setJokesInfo(newInfo);
    }
  };

  if (!data) {
    return <h1>Loading...</h1>;
  }

  const info = jokesInfo.find((info) => info.id === id) ?? { isFunny: false };
  const { isFunny } = info;

  return (
    <>
      <small>ID: {id}</small>
      <h1>{data.joke}</h1>
      <span>{isFunny ? "😂" : "😭"}</span>
      <div>
        <button onClick={() => handleToggleFunny(id)}>
          {isFunny ? "Stop laughing" : "Start laughing"}
        </button>
      </div>
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
