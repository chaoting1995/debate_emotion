import React from 'react';

import Timer from 'Components/Timer';
import Round from 'Components/Round';
import JuryStand from 'Components/JuryStand';
// -------------------------------------------

import styled from '@emotion/styled';
// -------------------------------------------

const ChairWrap = styled.div`
  ${'' /* background-color: #eee; */};
  height: calc(100vh - 56px);
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

// -------------------------------------------

function Chair(props) {
  return (
    <>
      <ChairWrap className="container">
        <Timer panel={true} />
        <Round />
        <JuryStand />
      </ChairWrap>
    </>
  );
}

export default Chair;
