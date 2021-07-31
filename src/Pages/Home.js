import React, { useState } from 'react';

import { withRouter } from 'react-router-dom';

import LoginModal from 'Components/LoginModal';
import LoginModalContent from 'Components/LoginModalContent';
// import styled from '@emotion/styled';
// const EmotionComponentName = styled.div`
//   // 直接撰寫 CSS
// `;

// 子元件
function HomeButton(props) {
  const { btnText, onClick } = props;
  return (
    <>
      <button
        type="button"
        style={{ width: '200px', fontWeight: '500' }}
        className="btn btn-primary btn-lg font-weight-bold"
        onClick={onClick}
      >
        {btnText}
      </button>
    </>
  );
}

function Home(props) {
  const {
    userInfo,
    setUserInfo,
    showLoginModal,
    setShowLoginModal,
    handleShowLoginModal,
  } = props;
  const [loginTo, setLoginTo] = useState('');

  return (
    <>
      <div className="container">
        <div
          style={{ height: '50vh' }}
          className="row justify-content-center align-items-center "
        >
          <h1 style={{ fontSize: '50px' }} className="text-center mt-5">
            Debate Emotion
          </h1>
        </div>
        <div
          style={{ height: '30vh' }}
          className="row flex-column align-items-center justify-content-around"
        >
          <HomeButton
            btnText="Chair"
            onClick={() => {
              !userInfo
                ? handleShowLoginModal()
                : props.history.push('/chairEntry');
              setLoginTo('Chair');
            }}
          />

          <HomeButton
            btnText="Jury"
            onClick={() => {
              props.history.push('/trialEntry');
            }}
          />
          <HomeButton
            btnText="Monitor"
            onClick={() => {
              !userInfo
                ? handleShowLoginModal()
                : props.history.push('/monitor');
              setLoginTo('Monitor');
            }}
          />
        </div>
        <LoginModal show={showLoginModal} setShow={setShowLoginModal}>
          <LoginModalContent
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            setShow={setShowLoginModal}
            handleRedirect={() => {
              loginTo === 'Chair' && props.history.push('/chairEntry');
              loginTo === 'Monitor' && props.history.push('/monitor');
              // setLoginTo('');
            }}
            {...props}
          />
        </LoginModal>
      </div>
    </>
  );
}

export default withRouter(Home);
