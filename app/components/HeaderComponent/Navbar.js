import styled from 'styled-components';
import * as constants from 'constants/Colors';

const Navbar = styled.div`
&:after {
  content: "";
  display: inline-block;
  width: 100%;
}
  width: 100%;
  height: 60px;
  text-align: center;
  background: ${constants.darkPrimary};
`


export default Navbar;
