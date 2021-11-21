import React, {useState} from "react";

const Favorites = ({setBtnState}) => {
  const [favorite, setFavorite] = useState(false);
  const [bgColor, setBgColor] = useState("var(--color-white)");
  const [txtColor, setTxtColor] = useState("var(--color-blue)");

  const onFavClick = () => {
    if(favorite==false){
      console.log("클릭됨");
      setFavorite(true);
      setBgColor("var(--color-blue)");
      setTxtColor("var(--color-white)");
      setBtnState("북마크에 등록되었습니다.");
    }else {
      console.log("클릭안됨");
      setFavorite(false);
      setBgColor("var(--color-white)");
      setTxtColor("var(--color-blue)");
      setBtnState("북마크가 삭제되었습니다.");
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