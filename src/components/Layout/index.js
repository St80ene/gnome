import React from 'react';
import Navbar from "../NavBar";
import Sidebar from "../Sidebar";
import { Content } from "./styles";

const Layout = ({ children }) => {
  const [toggle, setToggle] = React.useState(true);
  return (
    <div className="wrapper">
      <Sidebar isDefault={toggle}/>
      <Content>
        <Navbar onToggle = {(e) =>setToggle(!toggle)}/>
        {children}
      </Content>
    </div>
  );
};

export default Layout;
