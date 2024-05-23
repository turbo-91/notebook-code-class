import "./Tag.css";

export default function Tag({ tag }) {
  return (
    <li className={`Tag ${tag === "admin" ? "Tag--highlight" : ""}`}>{tag}</li>
  );
}
