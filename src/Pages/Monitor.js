import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import EmotionBar from 'Components/EmotionBar';

import { FaUser, FaAngleLeft } from 'react-icons/fa';

import styled from '@emotion/styled';
//------------------------------------

function IconEmotionBar(props) {
  const { initTime, colorArr, setColorArr, colorCurrent, countdown, icon } =
    props;
  return (
    <>
      <div>
        <div className="side-icon-wrap">
          <div className="side-icon">{icon}</div>
        </div>
        <div>
          {/* 心情溫度計 */}
          <EmotionBar
            width="80"
            initTime={initTime}
            colorArr={colorArr}
            setColorArr={setColorArr}
            colorCurrent={colorCurrent}
            countdown={countdown}
          />
        </div>
      </div>
    </>
  );
}

const MonitorUI = styled.div`
  ${'' /* background-color: #eee; */};
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  & > .backBtn {
    font-size: 35px;
    color: #858585;
    position: absolute;
    top: 20px;
    left: 20px;
    cursor: pointer;
  }
  & > div {
    width: 100%;
  }
  & > div:nth-of-type(1) {
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 30px;
    & > .time {
      font-size: 100px;
      margin-bottom: 15px;
    }
    & > .round {
      font-size: 25px;
      color: #383d41;
      background-color: #e2e3e5;
      box-sizing: border-box;
      padding: 5px 15px;
      border: 1px solid #d6d8db;
      border-radius: 10px;
      text-align: center;
    }
  }
  & > div:nth-of-type(2) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 20px;
    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      & > div {
        display: flex;
        justify-content: center;
        align-items: center;
        ${'' /* background-color: #eee; */}
      }
      & > .side-icon-wrap > .side-icon {
        width: 50px;
        height: 50px;
        border-radius: 100px;
        background-color: #858585;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        position: relative;
        top: 0;
        color: #eee;
        font-size: 27px;
        font-weight: bold;
      }
    }
  }
`;

function Monitor(props) {
  const [countdown, setCountdown] = useState(0);
  const [countdownSetting, setCountdownSetting] = useState(0);
  // 初始計時時間
  const [initTime] = useState(0);
  // 情緒進度條: 顏色資料
  const [colorArr, setColorArr] = useState([]);
  const [colorCurrent] = useState(2);

  //------------------------------------
  useEffect(() => {
    // 設定倒數計時器
    setCountdown(countdownSetting);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initTime]);

  useEffect(() => {
    const handleCountdown = () => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
        setCountdownSetting(countdown - 1);
      }
    };
    setTimeout(() => handleCountdown(), 1000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countdown]);

  //------------------------------------
  const [monitorStatus, setMonitorStatus] = useState('speech');
  const [barArr, setBarArr] = useState([<FaUser />, <FaUser />, <FaUser />]);
  //---------------------------------------

  useEffect(() => {
    monitorStatus === 'speech' &&
      setBarArr([<FaUser />, <FaUser />, <FaUser />]);
    monitorStatus === 'examine' && setBarArr(['Q', 'A']);
  }, [monitorStatus]);
  //---------------------------------------

  return (
    <>
      <MonitorUI className="container">
        <FaAngleLeft
          className="backBtn"
          onClick={() => {
            props.history.push('/');
          }}
        />
        {/* ------------------------------------ */}
        <div className="row">
          <div className="time">00:00</div>
          <div className="round">正方二辯申論</div>
        </div>

        {/* ------------------------------------ */}
        <div className="row">
          {barArr.map((item, index) => {
            return (
              <IconEmotionBar
                icon={item}
                initTime={initTime}
                colorArr={colorArr}
                setColorArr={setColorArr}
                colorCurrent={colorCurrent}
                countdown={countdown}
              />
            );
          })}
        </div>
        {/* ------------------------------------ */}
        <div className="row justify-content-center">
          <button
            type="button"
            className="btn btn-primary mx-3"
            onClick={() => {
              setMonitorStatus('speech');
            }}
          >
            speech
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setMonitorStatus('examine');
            }}
          >
            examine
          </button>
        </div>
      </MonitorUI>
    </>
  );
}

export default withRouter(Monitor);
//HOC
