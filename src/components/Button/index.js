import styled from 'styled-components';

export const ButtonWrapper = styled.button`
display:flex;
margin:15px auto;
width:100px;
height:30px;
background:${(primary)=>(primary ? '#294c56' : 'red')};
color:#fff;
padding:5px;
align-items:center;
justify-content:center;
transition: all 0.2s ease-in-out;
border:none;
cursor:pointer;
`;
