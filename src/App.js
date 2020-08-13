import React from "react";
import "./App.css";
import Game from "./components/game/Game";
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
function App(props) {
  const raccoons = {
    name: "Russiaville Raccoons",
    // logoSrc: "./assets/images/raccoon.png",
  };

  const squirrels = {
    name: "Sheridan Squirrels",
    // logoSrc: "./assets/images/squirrel.png",
    logoSrc: "../src/components/assets/images/squirrel.png",
  };

  const bunnies = {
    name: "Burlington Bunnies",
    logoSrc: "./assets/images/bunny.png",
  };

  const hounds = {
    name: "Hammond Hounds",
    logoSrc: "./assets/images/hound.png",
  };

  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game venue="Sheridan Arena" homeTeam={bunnies} visitingTeam={hounds} />
    </div>
  );
}

export default App;
