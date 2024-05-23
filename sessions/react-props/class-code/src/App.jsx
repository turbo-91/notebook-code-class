import "./App.css";
import Pet from "./component/Pet";

export default function App() {
  function handlePet() {
    console.log("I click");
  }
  return (
    <div>
      <Pet
        animal={"Cat"}
        emoji={"🐈"}
        sound={"meow"}
        onPet={handlePet}
        isHungry={true}
      />
      <Pet animal={"Dog"} emoji={"🐶"} sound={"woff"} onPet={handlePet} />
      <Pet animal={"Chicken"} emoji={"🐔"} sound={"co co"} onPet={handlePet} />
    </div>
  );
}
