import React from 'react';
import styled from 'styled-components';
import * as constants from 'constants/Colors';

const Profile = styled.a`
  color: ${constants.textPrimary};
  display: inline-flex;
  padding: 0.25em 0.2em;
  margin: 1em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  font-weight: bold;

  &:hover {
    color: ${constants.accent}};
  }
  &:active {
    color: #00BDA3;
  }




`;

export default Profile;
