import React from 'react';

import styled from '@emotion/styled';

//---------------------------------------

const TrafficBarUI = styled.div`
  width: 100px;
  height: 350px;
  border-radius: 50px;
  background-color: #343a40;
  overflow: hidden;
  margin: 0 10px 0 10px;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  padding: 15px 0 15px 0;
  & > button {
    width: 65px;
    height: 65px;
    border-radius: 99999px;
    margin: 10px 0 10px 0;
  }
`;

function TrafficBar(props) {
  const { setColorCurrent, handleBtnAudio } = props;
  return (
    <>
      <TrafficBarUI>
        {['success', 'warning', 'danger'].map((item, index) => {
          return (
            <button
              key={index}
              type="button"
              className={`btn btn-${item}`}
              onClick={() => {
                setColorCurrent(index + 1);
                handleBtnAudio();
              }}
            />
          );
        })}
      </TrafficBarUI>
    </>
  );
}

export default TrafficBar;
