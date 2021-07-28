import React from 'react';

function LoginModalContent(props) {
  const { handleLogin } = props;
  return (
    <>
      <label className="d-flex align-items-center mb-2">
        {/*  <span className="col-2">帳號：</span> */}
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="account"
          autoFocus
        />
      </label>
      <label className="d-flex align-items-center mb-3">
        {/* <span className="col-2">密碼：</span>   */}
        <input
          type="password"
          className="form-control form-control-lg"
          placeholder="password"
        />
      </label>
      {/* required*/}

      <button
        className="btn btn-primary btn-lg mb-5  font-weight-bold w-100"
        type="button"
        onClick={handleLogin}
      >
        登入
      </button>
      {/* <small
        className="text-danger login-alert-hide mb-4"
        // :className="{ 'login-alert-show': loginAlert.status }"
        role="alert"
      >
        格式檢查資訊
      </small> */}
    </>
  );
}
export default LoginModalContent;
