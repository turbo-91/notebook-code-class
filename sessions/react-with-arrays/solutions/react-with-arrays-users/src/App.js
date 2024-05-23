import "./App.css";
import Card from "./components/Card";
import Title from "./components/Title";
import { USERS } from "./db";

function App() {
  return (
    <main className="App__container">
      <Title text="ClientBoard" />
      <div className="App__card-grid">
        {USERS.map((user) => {
          return <Card key={user.id} user={user} />
        })}
      </div>
    </main>
  );
}

export default App;
