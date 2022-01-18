import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

export const Nav = styled.nav`
  background: #001818;
  color: white;
  height: 70px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 6);
  z-index: 12;
  position: fixed;
  width: 100%;
  backgroundColor: 'white',
  backdropFilter: "blur(20px) saturate(200%)",
  boxShadow: "0 0 20px rgba(0,0,0,.04)",
  background: 'rgba(250,251,255,.01)',
`;

export const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  padding-left: 20px;

`;

export const Pages = styled.nav`
  display: flex;
`;

export const NavBtn = styled.button`
  display: flex;
  align-items: center;
  margin-right: 24px;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 16px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #808080;
  padding: 10px 22px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;

interface navBarProps {
  likesBtnClick: any
  feedBtnClick: any
};

const Navbar = ({ likesBtnClick, feedBtnClick }: navBarProps) => {
  return (
    <header>
      <Nav>
        <NavMenu>
          <Link href="/">
            <h1>Spacetagram</h1>
          </Link>
        </NavMenu>
        <Pages>
              <NavBtn onClick={() => feedBtnClick(false)}>Feed</NavBtn>
              <NavBtn onClick={() => likesBtnClick(true)}>Likes</NavBtn>
        </Pages>
      </Nav>
    </header>
  )
};

export default Navbar;
