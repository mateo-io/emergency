import styled from 'styled-components'
import * as constants from 'constants/Colors';

const Text = styled.div`
color: ${constants.secondaryText};
display: ${(props) => props.block ? 'block' : 'inline'};
line-height: 1px;
font-size: ${(props) => props.small ? '12px' : '16px'};
font-weight: 400;
position: relative;
bottom: ${(props) => props.plain ? ''  : '-20px'};
`


export default Text
