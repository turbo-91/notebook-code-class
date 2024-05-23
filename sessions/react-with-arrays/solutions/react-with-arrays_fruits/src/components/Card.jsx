import "./Card.css";

export default function Card({ text, color }) {
  return (
    <p className="Card" style={{ border: `solid 3px ${color}` }}>
      {text}
    </p>
  );
}