import React from 'react';
// import ManagerActsList from '../components/templates/ManagerActs/ManagerActsList';
import ManagerBelowBarBlock from '../components/molecules/Block/ManagerBelowBarBlock';
import Floating from '../components/atoms/Button/Floating'
import ManagerActsPost from '../components/templates/ManagerActs/ManagerActsPost';
import { Link } from "react-router-dom";

const ManagerActs = () => {
  return (
    <React.Fragment>
      {/* <ManagerActsList /> */}
      <ManagerActsPost />
      <Link to="/mg/requests">
        <Floating background='var(--color-green)' />
      </Link>
      <ManagerBelowBarBlock isMember/>
    </React.Fragment>
  );
};

export default ManagerActs;