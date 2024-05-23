import Card from "./components/Card";
import "./App.css";


export default function App() {

  const fruits = [
    {
      id: 0,
      name: "Banana",
      color: "yellow"
    },
    {
      id: 1,
      name: "Apple",
      color: "red"
    },
    {
      id: 2,
      name: "Melon",
      color: "green"
    },
    {
      id: 3,
      name: "Eggplant",
      color: "violet"
    },
    {
      id: 4,
      name: "Salad",
      color: "seagreen"
    }
  ];

  return (
    <div className="App">
      {fruits.map((fruit) => (
        <Card key={fruit.id} text={fruit.name} color={fruit.color} />
      ))}
    </div>
  );
}
