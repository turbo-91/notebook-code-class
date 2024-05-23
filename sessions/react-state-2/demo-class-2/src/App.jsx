import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <main>
      <h1>Search</h1>
      <SearchForm searchTerm={searchTerm} onSearch={setSearchTerm} />
      <SearchResults searchTerm={searchTerm} />
    </main>
  );
}
