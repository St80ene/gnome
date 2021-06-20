import styled from 'styled-components';

export const UploadWrapper = styled.div`
display:flex;
width:calc(100vw-220px);
height:calc(100vh - 80px);
justify-content:center;
align-items:center;
margin: 10vh 100px 25vh 100px;

${'' /* @media screen and (max-width:) */}
`;

export const UploadContainer = styled.div`
justify-content:center;
align-items:center;
height:400px;
width:600px;
border:1px solid #f9f9f9;
background-color:#fff;
border-radius:15px;
box-shadow:1px 1px 3px rgba(0,0,0,0.2);

@media screen and (max-width:815px){
    width:calc(100vh - 10%);
}
`;

export const UploadContentHeading = styled.div`
display:flex;
padding: 5px 10px;
justify-content:space-between;
justify-items:center;
align-items:center;
background:#f9f9f9;
height:30px;
border-radius:15px 15px 0 0;
border-bottom: 1px solid silver;

span{
    font-weight:normal;
    font-size:15px;
    color:grey;
}
`;

export const UploadBody = styled.div`
${'' /* height:calc(100vh - 30px); */}
${'' /* display:flex;
justify-content:center; */}
${'' /* align-items:center; */}
margin-top:100px;
text-align:center;
span{
    font-size:20;
}
`;

