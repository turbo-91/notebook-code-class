import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
  }
  :root {
  --color-dark: blue;
  --color-bright: #fff;
  --color-highlight: #ffc800;
}
a {
  text-decoration: none;
  color: blue;
}

li {
  text-align: center;
  list-style: none;
  font-size: 1.5em;
}
  body {
    font-family: system-ui;
    display: flex;
    justify-content: center;
    align-items: center;
    background: lightgray;
  }
  .movie-card {
  margin: 2rem;
  padding-left: 30px;
  padding-top: 20px;
  border-radius: 10px;
  background: var(--color-bright);
  position: relative;
  width: calc(100vw - 80px);
  height: 300px;
}

.movie-card__title {
  font-size: 24px;
  padding: 0;
  margin: 0;
}

.movie-card__description {  
  width: 250px;
}

.movie-card__director {
  font-weight: bolder;
}

.movie-card__rating {
  font-weight: lighter;
  font-size: 14px;
  position: absolute;
  right: 20px;
  z-index: 2;
  color: white;
}

.movie-card__image {
  /* filter: grayscale(1); */
  width: 300px;
  height: 100%;
  object-fit: cover;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  position: absolute;
  top: 0px;
  right: 0px;
}
.movie-card__content {
  margin-top: 20px;
}

`;
