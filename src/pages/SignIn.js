import React from 'react';
import UserChoice from '../components/atoms/Select/UserChoice';
import Id from '../components/atoms/Input/Id';
import Password from '../components/atoms/Input/Password';
import RoundRectangle from '../components/atoms/Button/RoundRectangle';
import { IoIosArrowBack } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';
import '../components/atoms/Select/Select.css';
import '../components/atoms/Input/Input.css';
import '../components/atoms/Button/Button.css';

const SignIn = () => {
  const signinSubmit = (event) => {
    event.preventDefault();
    alert('로그인 완료');
  };

  return (
    <React.Fragment>
      <div className="header">
        <IoIosArrowBack  opacity="0" size="20"/>
        로그인
        <BiLogOut opacity="0" size="20"/>
      </div>
      <form onSubmit={signinSubmit}>
        <UserChoice />
        <Id />
        <Password />
        <RoundRectangle btnText="로그인" />
      </form>
      <RoundRectangle btnText="회원가입" />
      <RoundRectangle 
      color="var(--color-blue)" 
      background="white" 
      btnText="비회원으로 시작하기" 
      border="1px solid"/>
    </React.Fragment>
  );
};

export default SignIn;

// import React, { useEffect, useState } from "react";

// const userName = [
//   {name:"딸기"},
//   {name:"바나나"}, 
//   {name:"오렌지"},
//   {name:"사과"},
//   {name:"포도"},
// ]

// const SignIn = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     setUsers(userName);
//   }, []);

//   const handleChange = (e) => {
//     const {name, checked} = e.target;
//     if(name === "allSelect") {
//       let tempUser = users.map(user => { 
//         return {...user, isChecked : checked};
//       });
//       setUsers(tempUser);
//     } else {
//       let tempUser = users.map(user => 
//         user.name === name ? {...user, isChecked : checked} : user
//       );
//       setUsers(tempUser);
//     }
//   };
//   return (
//     <form className="form">
//       <div className="form-check">
//         <label className="form-check-label">모두 선택</label>
//         <input 
//         type="checkbox"
//         className="form-check-input"
//         name="allSelect"
//         checked={users.filter(user => user?.isChecked !== true).length < 1}
//         onChange={handleChange}/>
//       </div>
//       {users.map(user => (
//         <div className="form-check">
//           <label className="form-check-label">{user.name}</label>
//           <input type="checkbox" 
//           className="form-check-input" 
//           name={user.name}
//           checked={user?.isChecked || false}
//           onChange={handleChange}/>
//         </div>
//       ))}
//     </form>
//   );
// };

// export default SignIn;