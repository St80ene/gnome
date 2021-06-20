import styled from "styled-components";

export const Thumbnail = styled.video`
  width: 100%;
  height: 70%;
  object-fit: stretch;
`;

export const VideoTitle = styled.div`
  width: "max-content";
  height: 10%;
  padding: 0 10px;
  color: #294c56;
  p {
    text-align: left;
    font-weight: bold;
    font-size: 18px;
  }
`;

export const VideoSubtitle = styled.div`
  width: "max-content";
  height: 20%;
  padding: 0 10px;
  color: #294c56;
  text-align: justify;
  font-weight: normal;
  font-size: 14px;
`;
