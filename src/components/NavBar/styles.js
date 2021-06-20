import styled from "styled-components";
import { FaSearch, FaBell, FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  display: flex;
  bottom: 0;
  left: 0;
  background-color: #294c56;
  height: 80px;
  width: calc(100vw - 220px);
  z-index: 10;
  position: fixed;
  top: 0;
  left: 220px;

  @media screen and (max-width: 580px) {
    width:100vw;
    left: 0;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  margin: 25px 20px auto 150px;
  justify-content: space-between;
  align-items: center;
  width:100vw;

  @media screen and (max-width:1000px){
    margin: 15px 20px auto;
  }

  @media screen and (max-width:580px){
    margin: 15px 0 auto;
    width:100vw;
    }
}
`;

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 580px) {
    justify-content: space-between;
    align-items: center;
  }
`;

export const SearchBar = styled.input`
  width: 30vw;
  height: 30px;
  border: none;
  padding-left: 20px;

  @media screen and (max-width:700px){
    display:none;
  }
`;

export const SearchIcon = styled(FaSearch)`
  color: white;
  font-size: 30px;
  font-weight: normal;
  padding-left: 15px;

  @media screen and (max-width:700px){
    display:none;
  }
`;

export const UserIcons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right:30px;
`;

export const Notifications = styled(FaBell)`
  color: #fff;
  font-size: 40px;
  font-weight: normal;
  padding-right: 20px;
`;

export const Toggle = styled(FaBars)`
  color: #fff;
  font-size: 40px;
  font-weight: normal;
  padding-left: 20px;
  cursor:pointer;

  @media screen and (min-width:580px){
    display:none;
    }
`;

export const LogoContainer = styled.div`
color:#fff;
display:flex;
margin-left:50px;
justify-content: center;
align-item:center;
`;

export const LogoImg = styled.img`
padding:0 5px 0 0;
height:50px;
width:60px;
`;

export const LogoText = styled.h1`
padding-top:10px;
font-size:27px;
color:#62dafb;
`;

export const MobileIcon = styled.div`
  color: #fff;
  font-size: 40px;
  font-weight: normal;

  @media screen and (min-width:580px){
    display:none;
    }
`;

export const Avatar = styled.img`
  border-radius: 50px;
  height: 30px;
  width: 30px;
`;
