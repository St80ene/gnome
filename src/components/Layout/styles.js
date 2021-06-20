import styled from 'styled-components';

export const Content = styled.div`
position:relative;
left:220px;

@media screen and (max-width:580px){
    left:0;
    width:100vw;
    overflow-x:hidden;
}
`;
