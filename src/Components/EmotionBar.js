import React, { useEffect } from 'react';

import styled from '@emotion/styled';
//---------------------------------------

const EmotionBarUI = styled.div`
  ${'' /* background-color: #f8f9fa; */}
  background-color: #ccc;
  width: 25px;
  height: 330px;
  border-radius: 15px;
  overflow: hidden;
  margin: 0 10px 0 10px;
  & > div {
    width: 100%;
    transition: 0.2s;
    ${'' /* borderBottom: '0.1px solid #eee', */};
  }
`;

function EmotionBar(props) {
  const { initTime, colorArr, setColorArr, colorCurrent, countdown } = props;

  //---------------------------------------
  // 顏色轉換配置
  const colorConverter = ['bg-light', '#218838', '#e0a800', '#dc3545'];
  const colorConverter111 = [
    'bg-light',
    'bg-success',
    'bg-warning',
    'bg-danger',
  ];

  //---------------------------------------
  useEffect(() => {
    // 設定心情溫度計
    let creatInitArr = (amount) => {
      return Array.from({ length: amount }, (v) => 0);
    };
    setColorArr(creatInitArr(initTime));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initTime]);

  useEffect(() => {
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

  return (
    <>
      <EmotionBarUI>
        {colorArr.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                height: `${100 / initTime}%`,
                backgroundColor: `${colorConverter[item]}`,
              }}
            ></div>
          );
        })}
      </EmotionBarUI>
    </>
  );
}
export default EmotionBar;
