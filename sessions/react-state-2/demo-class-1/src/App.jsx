import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <main>
      <h1>Search</h1>
      <SearchForm onSearch={setSearchTerm} searchTerm={searchTerm} />
      <SearchResults searchTerm={searchTerm}/>
    </main>
  );
}
