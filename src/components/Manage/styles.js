import styled from "styled-components";

export const BodyWrapper = styled.div`
  width: calc(100vw - 220px);
  margin-top:80px;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width:580px){
    left:0;
    width:100vw;
}
`;

export const Carousel = styled.div`
  height: 60px;
  border-bottom: 1px solid #e5e5e5;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
export const ActiveCard = styled.button`
  padding: auto 10px;
  width: 100px;
  height: 38px;
  font-size: 16px;
  border-radius: 6px;
  background: #294c56;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-right: 20px;
`;
export const Cards = styled.button`
  margin-right: 20px;
  width: 100px;
  height: 38px;
  font-size: 16px;
  border-radius: 6px;
  background: #e5e5e5;
  border: none;
  cursor: pointer;
`;

export const MainContainer = styled.div`
  margin: 20px;
  ${
    "" /* display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center; */
  }
`;

export const MainWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: flex-start;
  grid-gap: 20px;
  padding: 20px auto;

  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    padding: 20px auto;
  }

  @media screen and (max-width: 715px) {
    grid-template-columns: 1fr;
    padding: 20px auto;
  }
`;

export const VideosCard = styled.div`
  background-color: #fff;
  height:250px;
  box-shadow: 1px 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
export const ThumbnailSkeleton = styled.div`
  width: 100%;
  height: 80%;
  object-fit: stretch;
`;

export const Thumbnail = styled.video`
  width: 100%;
  height: 60%;
  object-fit: stretch;
`;

export const VideoTitle = styled.div`
  width: "max-content";
  height: 10%;
  padding: 0 10px;
  color:#294c56;
  border-bottom:1px solid silver;
  p {
    text-align: left;
    font-weight: bold;
    font-size: 15px;
  }
`;

export const ActionBtn = styled.div`
height:20%;
display:flex;
justify-content:space-between;
align-items:center;
padding:6px 5px;

button{
  display:flex;
  align-items:center;
  background:none;
  border:none;
  font-size:16px;
  font-weight:normal;
  cursor:pointer;

  &:hover{
    font-weight:bold;
    transition: all 0.2s ease-in-out;
  }

  span{
    margin-left:5px;
  }
}
`;
