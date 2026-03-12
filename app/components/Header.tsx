"use client"; // Add this directive at the top

import {HeaderWrapper, Logo, Nav} from './styled'
const Header: React.FC = () => (
  <HeaderWrapper>
    <Logo>Patrick David</Logo>
    <Nav>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#contact">Contact</a>
    </Nav>
  </HeaderWrapper>
);

export default Header;
