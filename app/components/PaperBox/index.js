import React from 'react';
import styled from 'styled-components'
import * as constants from 'constants/Colors';
import Paper from 'material-ui/Paper';
import { omit } from 'lodash';

const PaperBox = styled((props) =>
<Paper {...omit(props, ['blank', 'center', 'small'])} />)`
  height: ${(props) => props.small ? '80px' : '160px'}
  width: 98%;
  margin: 10px 5px;
  textAlign: ${(props) => props.center && 'center'};
  padding: ${(props) => !props.center && '10px'};
  display: inline-block;
  borderLeft: ${(props) => props.blank ? '' : '10px solid'};
`


export default PaperBox
