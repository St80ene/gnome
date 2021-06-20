import React from "react";
import Img from '../../assets/avatar.png';
import { API } from '../../config';
import Axios from 'axios';
import Logo from "../../assets/logo512.png";
import {
  LogoContainer,
  LogoImg,
  LogoText,
  Nav,
  NavContainer,
  SearchBarContainer,
  SearchBar,
  SearchIcon,
  UserIcons,
  Notifications,
  Avatar, Toggle, MobileIcon
} from "./styles";
const Navbar = ({onToggle}) => {
  const [params,setParams] = React.useState("");

  const handleSearch = () =>{
    Axios.get(`${API}movies/${params}`).then((res)=>{
      // console.log(res);
    }).catch((err)=>{console.log(err)});
  }
  return (
    <Nav>
      <NavContainer>
      <Toggle onClick={onToggle}/>
      <MobileIcon>
      <LogoContainer>
        <LogoImg src={Logo} />
        <LogoText>Gnome</LogoText>
      </LogoContainer>
      </MobileIcon>
        <SearchBarContainer>
          <SearchBar value={params} onChange={(e)=>setParams(e.target.value)} placeholder="Search Gnome" name="search"/>
          <SearchIcon onClick={handleSearch}/>
        </SearchBarContainer>
        <div>
        <UserIcons>
            <Notifications/>
            <Avatar src={Img}/>
        </UserIcons>
        </div>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
