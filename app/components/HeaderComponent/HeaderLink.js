import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { omit } from 'lodash';
import * as constants from 'constants/Colors';

const HeaderLink = styled((props) =>
  <Link {...omit(props, ['activeCalls', 'actions'])} />)`
  color: ${constants.textPrimary};
  display: inline-block;
  padding: 0.25em 0.2em;
  margin: 1em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  font-weight: bold;

  &:hover {
    color: ${constants.accent}};
  }

`;

export default HeaderLink;
