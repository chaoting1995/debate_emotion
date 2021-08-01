import React, { useState, useEffect } from 'react';
import useInterval from 'hooks/useInterval.js';
function Test() {
  // --------------------------------------------------
  const [delay] = useState(1000);
  const [isRunning, setIsRunning] = useState(false);

  let [count, setCount] = useState(0);

  useInterval(() => setCount(count + 1), isRunning ? delay : null);
  // --------------------------------------------------

  return (
    <>
      <h1>Test Page</h1>

      <h1>{count}</h1>
      <button
        className="btn btn-primary"
        onClick={() => setIsRunning(!isRunning)}
      >
        {!isRunning ? '開始' : '暫停'}
      </button>
    </>
  );
}
export default Test;
