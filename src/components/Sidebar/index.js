import React from "react";
import Logo from "../../assets/logo512.png";
import {
  SidebarWrapper,
  SidebarLogoContainer,
  LogoImg,
  LogoText,
  SidebarTabs,
  Tabs,
  Logout,
  TabText,
} from "./styled";
import {
  FaHome,
  FaTasks,
  FaUpload,
  FaSignOutAlt
} from "react-icons/fa";

const Sidebar = ({isDefault}) => {
  return (
    <SidebarWrapper isDefault={isDefault}>
      <SidebarLogoContainer>
        <LogoImg src={Logo} />
        <LogoText>Gnome</LogoText>
      </SidebarLogoContainer>
      <SidebarTabs>
        <Tabs to="/">
          <FaHome />
          <TabText>
            <span>Home</span>
          </TabText>
        </Tabs>
        <Tabs to="manage">
          <FaTasks/>
          <TabText>
            <span>Manage</span>
          </TabText>
        </Tabs>
        {/* <Tabs to =''>
          <FaVideo />
          <TabText>
            <span>Your Videos</span>
          </TabText>
        </Tabs> */}
        <Tabs to="upload">
          <FaUpload />
          <TabText>
            <span>Upload</span>
          </TabText>
        </Tabs>
        <Logout>
          <FaSignOutAlt />
          <TabText>
            <span>Logout</span>
          </TabText>
        </Logout>
      </SidebarTabs>
    </SidebarWrapper>
  );
};

export default Sidebar;
