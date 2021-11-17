import React, { useState } from 'react';
import ManagerActsList from '../components/templates/ManagerActs/ManagerActsList';
import ManagerBelowBarBlock from '../components/molecules/Block/ManagerBelowBarBlock';
import Floating from '../components/atoms/Button/Floating'
import ManagerActsPost from '../components/templates/ManagerActs/ManagerActsPost';
import { Link } from "react-router-dom";

const ManagerActs = () => {
  const [isPost, setIsPost] = useState(false);

  return (
    <React.Fragment>
      {isPost? <ManagerActsPost />: <ManagerActsList onClick={()=>setIsPost(true)}/>}
      <Link className="linkComponent" to="/mg/requests">
        <Floating background='var(--color-green)' />
      </Link>
      <ManagerBelowBarBlock isMember/>
    </React.Fragment>
  );
};

export default ManagerActs;