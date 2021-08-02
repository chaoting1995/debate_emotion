import React, { useState, useEffect } from 'react';

// 按鈕音效
import { handleAudioClick, handleAudioBell } from 'utils/handleAudio';

import useInterval from 'hooks/useInterval.js';

import {
  FaVolumeUp,
  FaVolumeDown,
  FaVolumeOff,
  FaRedoAlt,
  FaConciergeBell,
  FaArrowDown,
  FaMugHot,
  FaHourglassHalf,
  FaBuffer,
} from 'react-icons/fa';

import { BsPauseFill, BsPlayFill } from 'react-icons/bs';
import {
  MdSettings,
  MdTimer,
  MdSignalCellularConnectedNoInternet0Bar,
  AiOutlineDisconnect,
} from 'react-icons/md';

import { RiCupFill, RiHome6Fill, RiTimerFill } from 'react-icons/ri';

//---------------------------------------------------
import moment from 'moment';
//---------------------------------------------------
import styled from '@emotion/styled';
//------------------------------------

const TimerWrap = styled.div`
  ${'' /* background-color: #eee; */};
  width: 100%;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  & > div {
    width: 100%;
  }
  & > div:nth-of-type(1) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 20px;
    & > .time {
      font-size: 80px;
      font-family: Roboto, sans-serif;
      position: relative;
    }

    & > .round {
      font-size: 20px;
      color: #383d41;
      background-color: #e2e3e5;
      box-sizing: border-box;
      padding: 5px 15px;
      border: 1px solid #d6d8db;
      border-radius: 10px;
      text-align: center;
    }
  }

  & > div:nth-of-type(3),
  & > div:nth-of-type(2) {
    display: flex;
    align-items: center;
    justify-content: space-around;
    ${'' /* background-color: #fff; */}
    height: 55px;
    box-shadow: 0 0.12rem 0.4rem rgb(0 0 0 / 8%);
    border-radius: 0.3rem;
    margin-bottom: 20px;
    & svg {
      fill: #158db1;
      font-size: 30px;
    }
    & svg:active {
      fill: #0d4d61;
    }

    & .FaRedoAlt,
    & .FaArrowDown,
    & .FaConciergeBell {
      font-size: 23px;
    }
    & .FaConciergeBell {
      margin-top: -3px;
    }

    & .FaVolumeDown,
    & .FaVolumeOff {
      font-size: 23px;
    }
    & .FaVolumeOff {
      margin-left: -4px;
    }

    & > .icon-wrap {
      position: relative;
      width: 42px;
      height: 42px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transform: translateY(0px);
      border-radius: 100px;
      transition: background-color 0.1s, transform 0.2s;
    }
    & .icon-wrap:active {
      background-color: rgba(23, 164, 186, 0.2);
      transform: translateY(5px);
      transition: background-color 0.2s, transform 0.2s;
    }
  }
`;
// -------------------------------------------------

function Timer(props) {
  const { panel } = props;

  const [delay] = useState(1000);
  const [count, setCount] = useState(1 * 60);
  const [isRunning, setIsRunning] = useState(false);

  const [formatTime, setFormatTime] = useState(handleFormatTime(count));
  // ------------------------------------------

  function handleFormatTime(sec) {
    const formatted = moment.utc(sec * 1000).format('mm:ss');
    return formatted;
  }
  function handle3Ring(left) {
    if (left === 60) handleAudioBell();

    if (left === 30) {
      handleAudioBell();
      setTimeout(handleAudioBell, 1000);
    }
    if (left === 0) {
      handleAudioBell();
      setTimeout(handleAudioBell, 1000);
      setTimeout(handleAudioBell, 2000);
    }
  }

  useInterval(() => setCount(count - 1), isRunning ? delay : null);

  useEffect(() => {
    //
    setFormatTime(handleFormatTime(count));
    //
    handle3Ring(count);
    //
    if (count <= 0) setIsRunning(false);
  }, [count]);
  // ------------------------------------------

  return (
    <>
      <TimerWrap className="container-fluid">
        <TimerMonitor formatTime={formatTime} />
        {panel && (
          <TimerPanel
            isRunning={isRunning}
            setIsRunning={setIsRunning}
            count={count}
            setCount={setCount}
          />
        )}
      </TimerWrap>
    </>
  );
}
// -------------------------------------------------
function TimerMonitor(props) {
  const { formatTime } = props;
  return (
    <>
      <div className="row">
        <div className="time">{formatTime}</div>
        <div className="round">正方二辯申論</div>
      </div>
    </>
  );
}
// -------------------------------------------------

function TimerPanel(props) {
  const { count, setCount, isRunning, setIsRunning } = props;
  return (
    <>
      <div className="row">
        <div className="icon-wrap">
          <FaArrowDown
            className="FaArrowDown"
            onClick={() => handleAudioClick()}
          />
        </div>
        <div className="icon-wrap">
          <FaRedoAlt
            className="FaRedoAlt"
            onClick={() => {
              handleAudioClick();
              setCount(3.5 * 60);
              setIsRunning(false);
            }}
          />
        </div>

        <div
          className="icon-wrap"
          onClick={() => {
            handleAudioClick();
            if (count > 0) setIsRunning(!isRunning);
          }}
        >
          {!isRunning ? <BsPlayFill /> : <BsPauseFill />}
        </div>

        <div className="icon-wrap">
          <FaConciergeBell
            className="FaConciergeBell"
            onClick={() => handleAudioBell()}
          />
        </div>
        <div className="icon-wrap">
          <MdTimer class="MdSettings" onClick={() => handleAudioClick()} />
        </div>
      </div>
      {/* <div className="row">
 
  <div className="icon-wrap">
    <FaVolumeDown className="FaVolumeDown" />
  </div>
  <div className="icon-wrap">
    <FaVolumeOff className="FaVolumeOff" />
  </div>
</div> */}
    </>
  );
}

export default Timer;

// https://ithelp.ithome.com.tw/articles/10245046

// https://github.com/ReactMaker/react_challenge_countdown_timer/blob/master/src/containers/Home/Home.js

// https://github.com/ReactMaker/react_challenge_countdown_timer/blob/master/src/containers/Home/Home.js

// https://pjchender.dev/npm/npm-moment-js/
