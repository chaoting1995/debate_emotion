import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [countdown, setCountdown] = useState(0);

  let time = 7000; //倒數7秒
  (function MyCounter() {
    if (time <= -1) {
      //倒數完成
    } else {
      console.log(time / 1000 + ' sec...');
      setTimeout(MyCounter, 1000);
    }
    time -= 1000;
  })();
  //---------------------------------------
  return (
    <div className='App'>
      <header className='App-header'>
   
      </header>
    </div>
  );
}

export default App;
