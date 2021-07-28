import React, { useState, useEffect } from 'react';

import { Howl } from 'howler';
// 按鈕音效
import btnAudio from 'Audio/yisell_sound_2014041023051918567_88366.mp3';

import TmepoTimer from 'Components/TmepoTimer';
import TrafficBar from 'Components/TrafficBar';
import EmotionBar from 'Components/EmotionBar';

import styled from '@emotion/styled';
//------------------------------------

const TrialUI = styled.div`
  ${'' /* background-color: #eee; */};
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

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
      & > .side-icon-wrap {
        width: 100%;
      }
      & > .side-icon-wrap.text-q {
        justify-content: flex-start;
        margin-left: 70px;
      }
      & > .side-icon-wrap.text-a {
        justify-content: flex-end;
        margin-right: 70px;
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

function Trial(props) {
  const [countdown, setCountdown] = useState(0);
  const [countdownSetting, setCountdownSetting] = useState(0);
  // 初始計時時間
  const [initTime, setInitTime] = useState(0);
  // 情緒進度條: 顏色資料
  const [colorArr, setColorArr] = useState([]);
  const [colorCurrent, setColorCurrent] = useState(2);
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

  //---------------------------------------

  // const handleBtnAudio_Old = () => {
  //   const audio = new Audio(btnAudio);
  //   audio.play();
  // };
  //---------------------------------------
  const handleBtnAudio = () => {
    const sound = new Howl({
      src: [btnAudio],
    });
    sound.play();
  };
  //---------------------------------------
  return (
    <>
      <TrialUI className="container">
        {/* ------------------------------------ */}
        <div className="row">
          <div className="time">00:00</div>
          <div className="round">正方二辯申論</div>
        </div>

        {/* ------------------------------------ */}
        <div className="row">
          <div>
            <div className="side-icon-wrap text-q">
              <div className="side-icon">Q</div>
            </div>
            <div>
              {/* 心情按鈕群 */}
              <TrafficBar
                setColorCurrent={setColorCurrent}
                handleBtnAudio={handleBtnAudio}
              />
              {/* 心情溫度計 */}
              <EmotionBar
                width="25"
                initTime={initTime}
                colorArr={colorArr}
                setColorArr={setColorArr}
                colorCurrent={colorCurrent}
                countdown={countdown}
              />
            </div>
          </div>
          {/* ------------------------------------ */}
          <div>
            <div className="side-icon-wrap  text-a">
              <div className="side-icon ">A</div>
            </div>
            <div>
              {/* 心情溫度計 */}
              <EmotionBar
                width="25"
                initTime={initTime}
                colorArr={colorArr}
                setColorArr={setColorArr}
                colorCurrent={colorCurrent}
                countdown={countdown}
              />
              {/* 心情按鈕群 */}
              <TrafficBar
                setColorCurrent={setColorCurrent}
                handleBtnAudio={handleBtnAudio}
              />
            </div>
          </div>
        </div>

        {/* 暫時的計時器 */}
        <div
          style={{
            position: 'absolute',
            left: '20px',
            opacity: '0.6',
            width: '100px',
          }}
        >
          <TmepoTimer
            countdown={countdown}
            countdownSetting={countdownSetting}
            setCountdownSetting={setCountdownSetting}
            setInitTime={setInitTime}
          />
        </div>
      </TrialUI>
    </>
  );
}

export default Trial;
//HOC
