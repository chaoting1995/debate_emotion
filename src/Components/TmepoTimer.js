import React from 'react';

function TmepoTimer(props) {
  const { countdown, countdownSetting, setCountdownSetting, setInitTime } =
    props;
  return (
    <>
      <div className="col-4 d-flex justify-content-center align-items-center flex-column">
        <div
          className="alert alert-secondary text-center"
          style={{ width: '100px' }}
          role="alert"
        >
          <h3> {countdown}</h3>
          <div>sec</div>
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control mb-3 text-center"
            style={{ width: '100px' }}
            value={countdownSetting}
            onChange={(e) => {
              setCountdownSetting(+e.target.value);
            }}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          style={{ width: '60px' }}
          onClick={() => {
            // 記錄初始值
            setInitTime(countdownSetting);
          }}
        >
          開始
        </button>
      </div>
    </>
  );
}
export default TmepoTimer;
