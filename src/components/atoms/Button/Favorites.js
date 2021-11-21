import React, {useState} from "react";

const Favorites = () => {
  const [favorite, setFavorite] = useState(false);
  const [bgColor, setBgColor] = useState("var(--color-white)")
  const [txtColor, setTxtColor] = useState("var(--color-blue)")

  const onFavClick = () => {
    if(favorite==false){
      setFavorite(true);
      console.log("클릭됨")
      setBgColor("var(--color-blue)");
      setTxtColor("var(--color-white)");
    }else {
      setFavorite(false);
      console.log("클릭안됨")
      setBgColor("var(--color-white)");
      setTxtColor("var(--color-blue)");
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