import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

// Icon
import { FaUser, FaPlus, FaAngleLeft, FaAngleRight } from 'react-icons/fa';
// 按鈕音效
import btnAudio from 'Audio//click.mp3';
// Juror info
import jurorInit from 'info/jurorInfo';

// CSS in JS
import styled from '@emotion/styled';
//---------------------------------------

const handleBtnAudio = () => {
  let audio = new Audio(btnAudio);
  audio.play();
};
//---------------------------------------
// 子元件
function JurorWrap(props) {
  const { jurorName, jurorStatus, onClick } = props;
  return (
    <>
      <JurorWrapUI jurorStatus={jurorStatus}>
        <div className="iconWrap" onClick={onClick}>
          {jurorStatus ? <FaUser /> : <FaPlus />}
        </div>
        <div className="nameTag bg-info">
          {jurorStatus ? jurorName : 'other'}
        </div>
      </JurorWrapUI>
    </>
  );
}

const JurorWrapUI = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90px;
  ${'' /* background-color: #faf */}
  .iconWrap {
    width: 80px;
    height: 80px;
    font-size: 50px;
    ${'' /* border: 1px solid black; */}
    border-radius: 999px;
    background-color: ${({ jurorStatus }) =>
      jurorStatus ? '#158db1' : '#ccc'};
    color: ${({ jurorStatus }) => (jurorStatus ? '#0a5a72' : '#858585')};
    ${'' /* position: relative; */}
    margin-bottom: 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .nameTag {
    width: 95px;
    height: 27px;
    font-size: 18px;
    font-weight: 500;
    color: #fff;
    padding-left: 10px;
    box-sizing: border-box;
    padding-right: 10px;
    border-radius: 30px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    text-align: center;
    opacity: ${({ jurorStatus }) => (jurorStatus ? 1 : 0)};
  }
`;

//---------------------------------------

const TrialEntryUI = styled.div`
  ${'' /* background: #faf; */}
  & > .backBtn {
    font-size: 35px;
    color: #858585;
    position: absolute;
    top: 20px;
    left: 20px;
    cursor: pointer;
  }
  & > .nextBtn {
    font-size: 35px;
    color: #858585;
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }
  & > div:nth-of-type(1) {
    margin-top: 270px;
  }
  & > div:nth-of-type(2) {
    height: 20vh;
    & > input {
      margin: 0 15px 0 15px;
      max-width: 300px;
    }
  }
`;
//---------------------------------------

function TrialEntry(props) {
  const [jurorInfo, setJurorInfo] = useState(jurorInit);
  const [currantID, setCurrantID] = useState('');

  useEffect(() => {
    // 從localStorage取上次選取的ID
    let currentID = JSON.parse(localStorage.getItem('DE_Juror_ID')) || '';
    let currentName = JSON.parse(localStorage.getItem('DE_Juror_Name')) || '';

    if (currentID) {
      // 設定整體座位資訊
      let newJurorInfo = [...jurorInfo];
      newJurorInfo[currentID - 1].status = true;
      newJurorInfo[currentID - 1].name = currentName;
      setJurorInfo(newJurorInfo);
      // 設定當前座位的狀態
      setCurrantID(currentID);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //-------------------------------------

  const handleSitState = (inputID, clear) => {
    // 決定設定或清除
    let localID = !clear ? inputID : '';
    // 記住坐下位置
    setCurrantID(localID);
    localStorage.setItem('DE_Juror_ID', JSON.stringify(localID));
    // 改變座位狀態
    let newJurorInfo = [...jurorInfo];
    if (!clear) {
      newJurorInfo[inputID - 1].status = !newJurorInfo[inputID - 1].status;
      let currentName = JSON.parse(localStorage.getItem('DE_Juror_Name')) || '';
      newJurorInfo[inputID - 1].name = currentName;
    } else {
      newJurorInfo[inputID - 1].status = false;
      newJurorInfo[inputID - 1].name = '';
    }
    setJurorInfo(newJurorInfo);
  };

  // handle logic of click sit
  const handleSit = (id) => {
    //  若座位上有人，不能點選 || 除非是自己
    if (!jurorInfo[id - 1].status || id === currantID) {
      // 尚未坐下時
      if (!currantID) {
        handleSitState(id);
        handleBtnAudio();
        // 已經坐下時
      } else {
        // => 只能點選自己座位
        if (id === currantID) {
          // 離座
          handleSitState(id, 'clear');
          handleBtnAudio();
        }
      }
    }
  };

  //-------------------------------------
  return (
    <>
      <TrialEntryUI className="container">
        <FaAngleLeft
          className="backBtn"
          onClick={() => {
            props.history.push('/');
          }}
        />
        <FaAngleRight
          className="nextBtn"
          onClick={() => {
            props.history.push('/trial');
          }}
        />

        <div className="row align-items-center justify-content-around">
          {jurorInfo.map((item) => {
            return (
              <JurorWrap
                key={item.id}
                jurorStatus={item.status}
                jurorName={item.name}
                setJurorInfo={setJurorInfo}
                onClick={() => {
                  handleSit(item.id);
                }}
              />
            );
          })}
        </div>
        <div className="row  align-items-center justify-content-around">
          {currantID ? (
            <>
              <input
                type="text"
                className="form-control form-control-lg text-center"
                placeholder="Please enter your name"
                disabled={!currantID}
                value={currantID && jurorInfo[currantID - 1].name}
                onChange={(e) => {
                  let newJurorInfo = [...jurorInfo];
                  newJurorInfo[currantID - 1].name = e.target.value;
                  setJurorInfo(newJurorInfo);
                  localStorage.setItem(
                    'DE_Juror_Name',
                    JSON.stringify(e.target.value)
                  );
                }}
              />
            </>
          ) : (
            <h3 className="text-center text-nowrap text-info">
              Please have a seat
            </h3>
          )}
        </div>
      </TrialEntryUI>
    </>
  );
}

export default withRouter(TrialEntry);
// 功能邏輯
// 1.坐下後不能點其他空位
// 2.坐下後才可輸入姓名
// 3.姓名只顯示於自己座位下
// 4.非空位不能點擊
