import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';

// --------------------------------------

import styled from '@emotion/styled';
const NavbarBack = styled.div`
  width: 100%;
  height: 56px;
`;
// --------------------------------------
const NavbarWrap = styled.div`
  & .text-front {
    display: none;
  }
  & .text-back {
    margin-left: 10px;
  }
  & .dropdown-menu {
    position: absolute;
    left: 0;
    right: auto;
  }

  @media (min-width: 576px) {
    & .dropdown-menu {
      right: 0;
      left: auto;
    }
    & .text-back {
      display: none;
    }
    & .text-front {
      display: inline-block;
    }
  }
`;
// --------------------------------------

function Header(props) {
  const { userInfo, setUserInfo, handleShowLoginModal } = props;

  // --------------------------------------

  const handleLogout = () => {
    localStorage.removeItem('DE_userInfo');
    setUserInfo(false);
  };
  // --------------------------------------

  return (
    <NavbarWrap>
      <NavbarBack />
      <Navbar bg="dark" variant="dark" expand="sm" fixed="top">
        <Navbar.Brand
          onClick={() => {
            props.history.push('/');
          }}
          style={{ cursor: 'pointer' }}
        >
          Debate Emotion
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {userInfo ? (
            <Nav className="ml-auto flex-row">
              <Navbar.Text className="text-front">
                Hi ! {userInfo.nickname}
              </Navbar.Text>
              <NavDropdown
                alignRight
                title={
                  <FaUserCircle
                    style={{
                      fontSize: '20px',
                      color: '#aaa',
                      margin: '-2px 3px 0 0',
                    }}
                  />
                }
              >
                <NavDropdown.Item
                  onClick={() => {
                    handleLogout();
                  }}
                >
                  Logout
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item disabled className="text-muted">
                  Edit password
                </NavDropdown.Item>
              </NavDropdown>
              <Navbar.Text className="text-back">
                Hi ! {userInfo.nickname}
              </Navbar.Text>
            </Nav>
          ) : (
            <Navbar.Text
              className="ml-auto"
              style={{ cursor: 'pointer' }}
              onClick={() => !userInfo && handleShowLoginModal()}
            >
              <span className="text-front">Login</span>
              <FaUserCircle
                style={{
                  fontSize: '20px',
                  color: '#aaa',
                  padding: 0,
                  margin: '-2px 5px 0 5px',
                }}
              />
              <span className="text-back">Login</span>
            </Navbar.Text>
          )}
        </Navbar.Collapse>
      </Navbar>
    </NavbarWrap>
  );
}

export default withRouter(Header);
