import React from 'react';
import Title from 'components/Title';
import PaperBox from 'components/PaperBox';
import * as constants from 'constants/Colors'

const Panel = ({title, children}) => (
  <PaperBox blank zDepth={2} style={ {minHeight: "250px", height: 'auto'}}>
    <div style={ {background: constants.primary, padding: "10px 0"} }>
      <Title>{title}</Title>
    </div>
    <div style= { {padding: "10px 20px"}}>
      {children}
    </div>
  </PaperBox>

)


export default Panel
