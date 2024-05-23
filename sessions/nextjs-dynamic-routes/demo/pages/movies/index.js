import Link from "next/link";
import movies from "../../lib/movies.json";
import { useRouter } from "next/router";

export default function Movies() {
  console.log("movies", movies);
  const router = useRouter();
  console.log("router", router);
  return (
    <>
      <h1>List of Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link href={`/movies/${movie.slug}`}>{movie.title}</Link>
          </li>
        ))}
        <button
          onClick={() => {
            if (confirm) {
              console.log("Are you a shoplifter");
              router.push("movies/shoplifters");
            }
          }}
          type="button"
        >
          Are you a shoplifter?
        </button>
      </ul>
    </>
  );
}
