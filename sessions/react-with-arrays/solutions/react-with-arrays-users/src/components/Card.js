import "./Card.css";
import Tag from "./Tag";
import Button from "./Button";
function Card({ user }) {
  return (
    <article className="Card-container">
      <h2>{user.name}</h2>
      <ul className="Card__taglist">
        {user.roles.map((role) => {
          return <Tag key={role} tag={role} />;
        })}
      </ul>
      <p>{user.about}</p>
      <Button>contact</Button>
      <Button buttonType="danger">delete</Button>
    </article>
  );
}

export default Card;
