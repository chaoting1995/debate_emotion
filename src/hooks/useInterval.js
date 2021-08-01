import { useEffect, useRef } from 'react';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // 保存新回调
  useEffect(() => {
    savedCallback.current = callback;
  });

  // 建立 interval
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default useInterval;

// 傳統寫法
// const [date, setDate] = useState(new Date());

// useEffect(() => {
//   const timerID = setInterval(() => {
//     setDate(new Date());
//   }, 1000);
//   return () => {
//     window.clearInterval(timerID); //小時鐘被拿掉時，清除id值，以防繼續運作，浪費資源
//   };
// }, [date]);

// useInterval Hook
// 聲明一個帶有動態調整 delay 的 interval，來替代寫 添加和清除 interval 的代碼
// 當 useInterval Hook 接收到不同 delay，它會重設 interval
