import React from 'react';
// import ManagerActsList from '../components/templates/ManagerActs/ManagerActsList';
import ManagerBelowBarBlock from '../components/molecules/Block/ManagerBelowBarBlock';
import Floating from '../components/atoms/Button/Floating'
import ManagerActsPost from '../components/templates/ManagerActs/ManagerActsPost';

const ManagerActs = () => {
  return (
    <React.Fragment>
      {/* <ManagerActsList /> */}
      <ManagerActsPost />
      <Floating background='var(--color-green)' />
      <ManagerBelowBarBlock isMember/>
    </React.Fragment>
  );
};

export default ManagerActs;