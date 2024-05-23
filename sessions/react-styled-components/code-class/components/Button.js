import styled from "styled-components";

export default styled.button`
  background-color: ${({ color }) =>
    color === "danger" ? "var(--secondary-color)" : "var(--primary-color)"};
  border: none;
  padding: 0.5em 1em;
  border-radius: 30px;
  font-weight: bold;
  align-self: center;
  &:hover {
    color: white;
    background-color: var(--primary-background);
  }
`;
