import styled from 'styled-components'
import * as constants from 'constants/Colors';

const Text = styled.div`
color: ${constants.secondaryText};
display: inline;
line-height: 1px;
font-size: 16px;
font-weight: 400;
position: relative;
bottom: ${(props) => props.plain ? ''  : '-20px'};
`


export default Text
