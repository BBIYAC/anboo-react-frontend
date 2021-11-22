import React, {useState} from "react";

const Favorites = ({setBtnState}) => {
  const [favorite, setFavorite] = useState(false);
  const [bgColor, setBgColor] = useState("var(--color-white)");
  const [txtColor, setTxtColor] = useState("var(--color-blue)");

  const onFavClick = () => {
    if(favorite==true){
      setFavorite(false);
      setBgColor("var(--color-blue)");
      setTxtColor("var(--color-white)");
      setBtnState(true);
    }else {
      setFavorite(true);
      setBgColor("var(--color-white)");
      setTxtColor("var(--color-blue)");
      setBtnState(false);
    }
  }
  return (
      <React.Fragment>
        <button 
          className="btn-favorites"
          onClick={onFavClick}
          style={{backgroundColor: bgColor, color: txtColor}}
          >즐겨찾기</button>
      </React.Fragment>
  );
};

export default Favorites;