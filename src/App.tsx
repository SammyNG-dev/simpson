import { useState } from "react";
import "./App.css";
import Avatar from "./components/Avatar";

function App() {
  const [mainCounter, setMainCounter] = useState(0);

  const simpsons = [
    {
      imgSrc:
        "https://i.scdn.co/image/ab67616d0000b273034be8e1ee0d8296ec43f923",
      firstname: "Homer",
      lastname: "Simpson",
      incrementCounter: () => {
        setMainCounter(mainCounter + 1);
      },
      id: 0,
    },
    {
      imgSrc:
        "https://www.muralsticker.com/33633-thickbox/vinyle-et-autocollants-bart-simpson.jpg",
      firstname: "Bart",
      lastname: "Simpson",
      incrementCounter: () => {
        setMainCounter(mainCounter + 1);
      },
      id: 1,
    },
    {
      imgSrc:
        "https://cache.marieclaire.fr/data/photo/w1200_h630_c1/138/margeeee.jpg",
      firstname: "Marge",
      lastname: "Simpson",
      incrementCounter: () => {
        setMainCounter(mainCounter + 1);
      },
      id: 2,
    },
  ];

  return (
    <div>
      {simpsons.map((simpson) => {
        return <Avatar key={simpson.id} simpson={simpson} />;
      })}
      <h1>Compteur principal : {mainCounter}</h1>
    </div>
  );
}

export default App;
