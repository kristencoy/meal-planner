import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

function FavoriteStar() {
  const [favorite, setFavorite] = useState(false);

  const favClickHandler = () => {
    setFavorite(!favorite);
  };

  return (
    <div>
      {favorite === true ? (
        <FaStar onClick={favClickHandler} className={favorite} />
      ) : (
        <FaRegStar onClick={favClickHandler} />
      )}
    </div>
  );
}

export default FavoriteStar;

//component with active class toggle on/off
