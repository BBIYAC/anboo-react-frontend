import React from 'react';
import Rating from '../components/atoms/Select/Rating';
import Religion from '../components/atoms/Select/Religion';
import Favorites from '../components/atoms/Button/Favorites';
import NursingHomeInfoBlock from '../components/molecules/Block/NursingHomeInfoBlock';
import Floating from '../components/atoms/Button/Floating';
import { FaSearch } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import '../components/atoms/Button/Button.css';
import '../components/molecules/Block/Block.css';
import '../components/atoms/Label/Label.css';

const RegisterNhs= () => {
  return (
    <React.Fragment>
      <div className="header-contain">
        <div className="header">
          <Link className="linkComponent" to="/rg/nh-location">
            <IoIosArrowBack size="20"/>
          </Link>
          요양원 리스트
          <Link className="linkComponent" to="/">
            <BiLogOut size="20"/>
          </Link>
        </div>
        <div className="block-search">
          <div className="box-search">
            <input className="searchBox" type="text" placeholder="요양원 이름, 주소, 지역 검색"></input>
            <button className="search-icon"><FaSearch size="20" color="var(--color-dark-gray)"/></button>
          </div>
					<div className="block-keyword">
						<Favorites />
						<Rating />
						<Religion />
					</div>
				</div>
      </div>
      <NursingHomeInfoBlock />
      <Link className="linkComponent" to="/rg/nh-location">
        <Floating background="var(--color-blue)"/>
      </Link>
    </React.Fragment>
  );
};

export default RegisterNhs;