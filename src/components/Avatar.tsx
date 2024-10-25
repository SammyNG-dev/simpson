import { useState } from "react";

interface AvatarProps {
  simpson: {
    imgSrc: string;
    firstname: string;
    lastname: string;
    incrementCounter: () => void;
  };
}

function Avatar({ simpson }: AvatarProps) {
  const [compteur, setCompteur] = useState(0);

  return (
    <figure>
      <img src={simpson.imgSrc} alt="" />
      <figcaption>
        <h2>
          {simpson.firstname} {simpson.lastname}
        </h2>
        <button
          type="button"
          onClick={() => {
            setCompteur(compteur + 5);
            simpson.incrementCounter();
          }}
        >
          🍩
        </button>
        <p>{compteur}</p>
      </figcaption>
    </figure>
  );
}

export default Avatar;
