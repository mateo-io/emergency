import React from 'react';
import styled from 'styled-components'
import * as constants from 'constants/Colors';
import Paper from 'material-ui/Paper';
import { omit } from 'lodash';

const PaperBox = styled((props) =>
<Paper {...omit(props, ['blank', 'center'])} />)`
  height: 140px;
  width: 98%;
  margin: 20px 10px;
  textAlign: ${(props) => props.center && 'center'};
  display: inline-block;
  borderLeft: ${(props) => props.blank ? '' : '10px solid'};
`


export default PaperBox
