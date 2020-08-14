import React from "react";
import "./App.css";
import Game from "./components/game/Game";
import raccoonImage from "../src/components/assets/images/raccoon.png";
import squirrelImage from "../src/components/assets/images/squirrel.png";
import bunnieImages from "../src/components/assets/images/bunny.png";
import hound from "../src/components/assets/images/hound.png";
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
    logoSrc: "./assets/images/raccoon.png",
    logoSrc: raccoonImage,
  };

  const squirrels = {
    name: "Sheridan Squirrels",
    // logoSrc: "./assets/images/squirrel.png",
    logoSrc: squirrelImage,
  };

  const bunnies = {
    name: "Burlington Bunnies",
    //logoSrc: "./assets/images/bunny.png",
    logoSrc: bunnieImages,
  };

  const hounds = {
    name: "Hammond Hounds",
    //logoSrc: "./assets/images/hound.png",
    logoSrc: hound,
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
