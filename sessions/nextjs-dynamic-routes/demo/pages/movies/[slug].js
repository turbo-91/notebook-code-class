import { useRouter } from "next/router";
import movies from "../../lib/movies.json";
import Head from "next/head";
import Link from "next/link";

export default function Movie() {
  const router = useRouter();

  const { slug } = router.query;
  const foundMovie = movies.find((movie) => movie.slug === slug);

  if (!foundMovie) {
    return <h1>Loading...</h1>;
  }
  const { title, imdbRating, director, url, description } = foundMovie;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <article className="movie-card">
        <h2 className="movie-card__title">
          {title}
          <span className="movie-card__rating">{imdbRating} IMDb</span>
        </h2>
        <span className="movie-card__director">by {director}</span>
        <img className="movie-card__image" src={url} alt={title} />
        <div className="movie-card__content">
          <p className="movie-card__description">{description}</p>
        </div>
      </article>
      <Link href="/movies">← Back to all movies</Link>
    </>
  );
}
