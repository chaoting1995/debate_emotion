import React, { useState, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';

//---------------------------------------------------
import styled from '@emotion/styled';

//------------------------------------

const JuryStandWrap = styled.div`
  ${'' /* background-color: #eee; */};
  width: 100%;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  & > div {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-around;

    min-height: 70px;
    box-shadow: 0 0.12rem 0.4rem rgb(0 0 0 / 8%);
    border-radius: 0.3rem;
    margin-bottom: 20px;
    & svg {
      fill: #158db1;
      font-size: 30px;
    }
    .connect-success > svg {
      fill: #28a745;
    }
    .connect-fail > svg {
      fill: #dc3545;
    }
  }
  & .icon-wrap {
    position: relative;
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
  }

  & .icon-wrap:nth-of-type(2)::before {
    content: '';
    height: 100%;
    border-left: 1px solid #f1f1f1;

    position: absolute;
    left: 0;
  }
  & .icon-wrap:nth-of-type(2)::after {
    content: '';
    height: 100%;
    border-left: 1px solid #f1f1f1;
    position: absolute;
    right: 0;
  }

  & .icon-wrap > .jury-name {
    font-size: 10px;
    margin-top: 2px;
  }
`;

function JuryStand(props) {
  return (
    <>
      <JuryStandWrap className="container-fluid">
        <div className="row">
          <div className="icon-wrap connect-fail">
            <FaUserCircle className="FaUserCircle" />
            <div className="jury-name">裁判一</div>
          </div>
          <div className="icon-wrap connect-success">
            <FaUserCircle className="FaUserCircle" />
            <div className="jury-name">裁判二</div>
          </div>
          <div className="icon-wrap">
            <FaUserCircle className="FaUserCircle" />
            <div className="jury-name">裁判三</div>
          </div>
        </div>
      </JuryStandWrap>
    </>
  );
}

export default JuryStand;
