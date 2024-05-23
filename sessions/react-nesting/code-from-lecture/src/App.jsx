import "./App.css";

function Button({children}) {
  // console.log(props)
  return (
    <button>{children}</button>
  )
}

function Animal({ emoji, name, description }) {
  return (
    <>
      <h2>
        {emoji} {name}
      </h2>
      <p>{description}</p>
      <Button>
        Adopt <strong>{name}</strong>
      </Button>
    </>
  );
}

export default function App() {
  return (
    <main>
      <h1>Animal Shelter</h1>
      <p>Please adopt our lovely pets!</p>
      <Animal emoji="🐕" name="Lucky" description="some"/>
      <Animal emoji="🐈" name="Mittens" description="some"/>
      <Animal emoji="🐢" name="Archibald" description="some"/>
      <Animal emoji="🐣" name="Chick Norris" description="some"/>
    </main>
  );
}
