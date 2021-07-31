import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
function Header(props) {
  const { userInfo, setUserInfo, handleShowLoginModal } = props;

  // --------------------------------------

  const handleLogout = () => {
    localStorage.removeItem('DE_userInfo');
    setUserInfo(false);
  };
  // --------------------------------------

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="sm" fixed="top">
        <Navbar.Brand
          onClick={() => {
            props.history.push('/');
          }}
        >
          Debate Emotion
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {userInfo ? (
            <Nav className="ml-auto">
              <Navbar.Text>Hi ! {userInfo.nickname}</Navbar.Text>
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
            </Nav>
          ) : (
            <Navbar.Text
              className="ml-auto"
              style={{ cursor: 'pointer' }}
              onClick={() => !userInfo && handleShowLoginModal()}
            >
              Login
              <FaUserCircle
                style={{
                  fontSize: '20px',
                  color: '#aaa',
                  padding: 0,
                  margin: '-2px 27px 0 13px',
                }}
              />
            </Navbar.Text>
          )}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default withRouter(Header);
