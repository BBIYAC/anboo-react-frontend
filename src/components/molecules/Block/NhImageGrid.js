import React from 'react';
import ImageMiddle from '../../atoms/Input/ImageMiddle';

const NhImageGrid = ({url}) => {

  return(
    <React.Fragment>
      <div className="grid-item"><ImageMiddle url={url} /></div>
    </React.Fragment>
  );
};

export default NhImageGrid;