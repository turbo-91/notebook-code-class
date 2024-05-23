// export default function Pet(props) {
//   console.log("props: ", props);
//   return (
//     <div>
//       {props.sound}{" "}
//       <span role="img" aria-label={props.animal}>
//         {props.emoji}
//       </span>
//     </div>
//   );
// }

export default function Pet({ animal, sound, emoji, onPet, isHungry }) {
  console.log("props: ", sound, animal, emoji);

  return (
    <div onClick={onPet}>
      {/* Ternary operator condition ? true : False */}
      {isHungry ? "I am hungry" : sound}
      <span role="img" aria-label={animal}>
        {emoji}
      </span>
    </div>
  );
}
