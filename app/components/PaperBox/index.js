import React from 'react';
import styled from 'styled-components'
import * as constants from 'constants/Colors';
import Paper from 'material-ui/Paper';
import { omit } from 'lodash';

const PaperBox = styled((props) =>
<Paper {...omit(props, ['blank'])} />)`
  height: 140px;
  width: 98%;
  margin: 20px 10px;
  textAlign: center;
  display: inline-block;
  borderLeft: ${(props) => props.blank ? '' : '4px solid'};
`


export default PaperBox
