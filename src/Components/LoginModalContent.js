import React, { useState } from 'react';
import handleLogin from 'api/handleLogin';

import styled from '@emotion/styled';
const InfoBar = styled.div`
  transition: 0.5s;
  overflow: hidden;
  height: ${({ message }) => (!message ? '0px' : '66px')};
`;

function LoginModalContent(props) {
  const { userInfo, setUserInfo, handleRedirect, setShow } = props;
  // 透過state，監管表單資料
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // 格式檢查提示訊息
  const [feedback, setFeedback] = useState({});

  // ----------------------------------------------------

  function handleSubmit() {
    // 判斷通過與否
    let isPass = true;
    // 每次提交，重置警告訊息
    setFeedback({
      usernameInfo: '',
      passwordInfo: '',
    });

    // 檢查資料格式
    if (!username) {
      isPass = false;
      let usernameInfo = 'Please provide a valid username.';
      setFeedback((pre) => ({ ...pre, usernameInfo }));
    }

    if (!password) {
      isPass = false;
      let passwordInfo = 'Please provide a valid password.';
      setFeedback((pre) => ({ ...pre, passwordInfo }));
    }

    // 若通過
    if (isPass) {
      (async () => {
        const body = { username, password };
        // 傳送表單到DB，取得回應
        const obj = await handleLogin(body);
        // 藉由回應決定下一步
        if (obj.success) {
          // 登入成功，呈現提示訊息
          setUserInfo(obj);
          localStorage.setItem('DE_userInfo', JSON.stringify(obj));

          setTimeout(() => {
            // 轉向到對應頁面
            handleRedirect();
            // 當登入進入點是從header，無法直接轉向，要關掉modal
            setShow(false);
          }, 1000);
        } else {
          // 登入失敗，呈現提示訊息
          setUserInfo(obj);
        }
      })();
    }
  }

  return (
    <>
      <h2
        className="mx-auto mt-2 mb-4 text-center"
        onClick={() => {
          setUsername('admin');
          setPassword('admin');
        }}
      >
        Login
      </h2>
      <div className="form-group">
        <input
          type="text"
          name="username"
          className={`form-control form-control-lg ${
            feedback.username && 'is-invalid'
          }`}
          placeholder="username"
          autoFocus
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
        />
        <small
          className={`form-text text-danger d-none ${
            feedback.usernameInfo && 'd-inline'
          }`}
        >
          {feedback.usernameInfo}
        </small>
      </div>
      <div className="form-group">
        <input
          type="password"
          className={`form-control form-control-lg ${
            feedback.password && 'is-invalid'
          }`}
          placeholder="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
        />
        <small
          className={`form-text text-danger d-none ${
            feedback.passwordInfo && 'd-inline'
          }`}
        >
          {feedback.passwordInfo}
        </small>
      </div>
      <div className="form-group">
        <button
          className="btn btn-primary btn-lg font-weight-bold w-100"
          type="button"
          onClick={handleSubmit}
        >
          Login
        </button>
      </div>

      <InfoBar message={userInfo && userInfo.message}>
        <div
          className={`alert  text-center 
            ${userInfo && userInfo.success ? 'alert-success' : 'alert-danger'}
          `}
          role="alert"
        >
          {userInfo && userInfo.message}
        </div>
      </InfoBar>
    </>
  );
}
export default LoginModalContent;
