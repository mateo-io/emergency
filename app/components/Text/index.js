import styled from 'styled-components'
import * as constants from 'constants/Colors';

const Text = styled.div`
color: ${constants.secondaryText};
display: ${(props) => props.block ? 'block' : 'inline'};
line-height: 1px;
letter-spacing: 2px;
font-size: ${(props) => props.small ? '12px' : '18px'};
font-weight: 400;
position: relative;
bottom: ${(props) => props.plain ? ''  : '-20px'};
bottom: ${(props) => props.bottom && '-40px'};
`


export default Text
