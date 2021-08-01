import React from 'react';

// 按鈕音效
import handleAudioClick from 'utils/handleAudioClick';

import styled from '@emotion/styled';
//------------------------------------

const RoundWrap = styled.div`
  width: 100%;
  margin-bottom: 20px;
  & .hidden {
    visibility: hidden;
    width: 10%;
  }
  & > .row {
  }
  .round-item {
    box-shadow: 0 0.12rem 0.2rem rgb(0 0 0 / 12%);
    margin: 5px;
    height: 40px;
    background-color: #f1f1f1;
    border-radius: 3px;
    cursor: pointer;
    transition: 0.2s;
  }

  .round-over {
    background-color: #c4c4c4;
  }
  .round-current {
    background-color: #ffe500;
  }

  .round-item:active {
    transition: 0.2s;
    transform: translateY(2px);
    box-shadow: 0 0.12rem 0.2rem rgb(0 0 0 / 0%);
  }
`;

//------------------------------------

function Round() {
  return (
    <>
      <RoundWrap className="container-fluid">
        <div className="row">
          <div
            className="col round-item round-over"
            onClick={() => handleAudioClick()}
          ></div>
          <div className="col round-item round-current"></div>
          <div className="hidden"></div>
          <div className="col round-item"></div>
          <div className="col round-item"></div>
        </div>
        <div className="row">
          <div className="col round-item"></div>
          <div className="col round-item"></div>
          <div className="hidden w-10"></div>
          <div className="col round-item"></div>
          <div className="col round-item"></div>
        </div>
        <div className="row">
          <div className="col round-item"></div>
          <div className="col round-item"></div>
          <div className="hidden"></div>
          <div className="col round-item"></div>
          <div className="col round-item"></div>
        </div>
        <div className="row">
          <div className="col round-item"></div>
          <div className="col round-item hidden"></div>
          <div className="hidden"></div>
          <div className="col round-item hidden"></div>
          <div className="col round-item"></div>
        </div>
      </RoundWrap>
    </>
  );
}
export default Round;
