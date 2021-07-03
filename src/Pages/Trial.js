import React, { useState, useEffect } from 'react';

import btnAudio from '../src/audio/yisell_sound_2014041023051918567_88366.mp3';

function Trial(props) {
  const [countdown, setCountdown] = useState(0);
  const [countdownSetting, setCountdownSetting] = useState(0);
  const [initTime, setInitTime] = useState(0);

  const [colorArr, setColorArr] = useState([]);
  const [colorCurrent, setColorCurrent] = useState(2);
  //------------------------------------

  useEffect(() => {
    // console.log('a initTime',initTime);
    // 設定即時顏色進度條
    let creatInitArr = (amount) => {
      return Array.from({ length: amount }, (v) => 0);
    };
    setColorArr(creatInitArr(initTime));

    // 設定倒數計時器
    setCountdown(countdownSetting);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initTime]);

  useEffect(() => {
    const handleCountdown = () => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
        setCountdownSetting(countdown - 1);
        // 持續改變顏色
      }
    };
    setTimeout(() => handleCountdown(), 1000);

    const handleColorChange = () => {
      let colorArrIndex = initTime - countdown;
      let newColorArr = [...colorArr];
      newColorArr[colorArrIndex] = colorCurrent;
      setColorArr(newColorArr);
    };
    setTimeout(() => handleColorChange(), 500);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countdown]);

  //---------------------------------------

  const colorConverter = ['bg-light', 'bg-success', 'bg-warning', 'bg-danger'];

  //---------------------------------------

  const handleBtnAudio = () => {
    let audio = new Audio(btnAudio);
    audio.play();
  };
  //---------------------------------------
  return (
    <>
      <div className="-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className='container'>
          <div className='row'>
            <div className='col-4 d-flex justify-content-center align-items-center flex-column'>
              <div
                className='alert alert-secondary text-center'
                style={{ width: '100px' }}
                role='alert'
              >
                <h3> {countdown}</h3>
                <div>sec</div>
              </div>
              <div className='form-group'>
                <input
                  type='number'
                  className='form-control mb-3 text-center'
                  style={{ width: '100px' }}
                  value={countdownSetting}
                  onChange={(e) => {
                    setCountdownSetting(+e.target.value);
                  }}
                />
              </div>
              <button
                type='button'
                className='btn btn-primary'
                onClick={() => {
                  // 記錄初始值
                  setInitTime(countdownSetting);
                }}
              >
                開始
              </button>
            </div>
            {/* -------------------------------------------- */}

            <div className='col-4'>
              <div
                className='bg-dark d-flex justify-content-center align-items-center flex-column py-3'
                style={{
                  width: '140px',
                  borderRadius: '50px',
                }}
              >
                <button
                  type='button'
                  className='btn btn-success my-2'
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '99999px',
                  }}
                  onClick={() => {
                    console.log('success');
                    setColorCurrent(1);
                    handleBtnAudio();
                  }}
                ></button>
                <button
                  type='button'
                  className='btn btn-warning my-2'
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '99999px',
                  }}
                  onClick={() => {
                    console.log('warning');
                    setColorCurrent(2);
                    handleBtnAudio();
                  }}
                ></button>
                <button
                  type='button'
                  className='btn btn-danger my-2'
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '99999px',
                  }}
                  onClick={() => {
                    console.log('danger');
                    setColorCurrent(3);
                    handleBtnAudio();
                  }}
                ></button>
              </div>
            </div>
            <div className='col-4'>
              <div
                className='bg-light h-100'
                style={{
                  width: '70px',
                  borderRadius: '15px',
                  overflow: 'hidden',
                }}
              >
                {colorArr.map((item, index) => {
                  return (
                    <div
                      key={index}
                      style={{
                        height: `${100 / initTime}%`,
                        transition: '0.2s',
                        // borderBottom: '0.1px solid #eee',
                      }}
                      className={`w-100 ${colorConverter[item]}`}
                    ></div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Trial;
//HOC
