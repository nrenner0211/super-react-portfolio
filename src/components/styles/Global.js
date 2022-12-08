import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito&family=Quicksand&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Nunito&family=Quicksand&display=swap');

:root {
  --primary: #a1ffc8;
  --secondary: #3300ff;
  /* --secondary: #3300ff; */
  --tertiary: #020279;
  /* --tertiary: #e100ff; */
  --light: #f1f1ff;
  --dark: #050543;
}

html,
body {
  margin: 0;
  min-width: 100%;
  min-height: 100%;
}

body {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  line-height: 1.5;
  font-size: 1em;
  letter-spacing: .1em;
  background-color: var(--dark);
  background-position: center;
  background-size: cover;
  color: var(--light);
}

a {
  color: var(--secondary);
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 600;
}

img {
  max-width: 100%;
}

p {
  line-height: 1.7;
  font-size: 1.3rem;
}

.avatar {
  border: solid 2px var(--secondary);
  border-radius: 50%;
  max-width: 15rem;
  max-height: 15rem;
}

.center {
  display:flex;
  align-items: center;
  padding: 8rem;
}

.subtitle {
  color: var(--secondary);
  font-size: 1.4rem;
}

.gallery-card {
  background-color:rgba(161, 255, 200, 0.3);
  border-radius: 5vh;
  padding: 2.5rem;
  margin: 1rem;
  max-width: 40rem;
  max-height: 40rem;
}

.card {
  padding: 2rem;
  max-width: 30rem;
  max-height: 30rem;
}

.cardTitle {
  font-family: 'Nunito', sans-serif;
  font-size: 1.5rem;
  cursor: pointer;
}

.intro {
  margin: 5rem;
  padding: 1rem;
  font-size: 2.7rem;
  border-bottom: solid 2px var(--dark);
  max-width: fit-content;
  cursor: pointer;
  transition: 1.5s ease-in-out;
}

.container-fluid:hover .intro {
  /* transform: translateX(250%); */
  color: var(--secondary);
  border-bottom: solid 2px var(--secondary);
}

.footerIntro {
  margin-top: 10rem;
  display: flex;
  justify-content: center;
  font-size: 2.7rem;
  padding: 1.5rem;
  color: var(--secondary);
  border-bottom: solid 2px var(--secondary);
  max-width: 100%;
}

.row li {
  list-style: none;
}

.navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 9999;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  left: 0;
  max-width: 100%;
  height: auto;
  background-color: rgba(161, 255, 200, 0.7);
  padding: 1rem;
}

.navbar .flex-start li {
  color: var(--secondary);
  font-size: 1.3rem;
}

.navbar ul {
  display: flex;
  flex-direction: row;
}

.nav {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1.5rem;
  color: var(--dark);
}

.nav a {
  text-decoration: none;
  font-size: 1.5rem;
  color: var(--dark);
}

nav a {
  color: var(--secondary);
  text-decoration: none;
  font-size: 1.9rem;
}

.navbar a:hover {
  color: var(--secondary);
  transition: .2s;
  text-shadow: 2px 2px 8px #000;
}

nav li {
  cursor: pointer;
  list-style: none;
  margin-left: 2rem;
}

/* MEDIA QUERIES */

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .container-custom ul {
        margin: 1rem;
        padding-top: 10rem;
        width: auto;
    }

    .navbar {
        max-width: 100%;
        height: auto;
        display: flex;
    }

    .navbar ul  {
        width: 100%;
        flex-direction: column;
    }

    .navbar .flex-start {
        display: none;
    }

    .intro {
        pointer-events: none;
        font-size: 1.8rem;
    }

    .container-fluid:hover .intro {
        pointer-events: none;
    }

    .nav {
        width: auto;
        flex-direction: column;
    }
    }

    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
    .navbar .flex-start {
        visibility: visible;
    }
    .container-fluid:hover .intro {
        pointer-events: none;
    }
    }


    /* Extra large devices */
    @media only screen and (min-width: 1024px) {
    .navbar .flex-start {
        visibility: visible;
    }
    }
`