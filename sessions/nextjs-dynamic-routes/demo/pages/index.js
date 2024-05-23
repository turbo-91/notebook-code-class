import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Next.js Dynamic Routes</h1>
      <ul>
        <li>
          <Link href="/movies" className="home">
            Go to movies overview
          </Link>
        </li>
      </ul>
    </div>
  );
}
