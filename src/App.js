import React, { useState } from 'react';

// 引入react router => 用於制定路由
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

// 引入共用元件
import Navbar from 'Components/Modules/Navbar';

// 引入 頁面元件
import Home from 'Pages/Home';
import ChairEntry from 'Pages/ChairEntry';
import Chair from 'Pages/Chair';
import Trial from 'Pages/Trial';
import TrialEntry from 'Pages/TrialEntry';
import Monitor from 'Pages/Monitor';
import Result from 'Pages/Result';
import ResultForJuror from 'Pages/ResultForJuror';

//------------------------------------
function App() {
  const [showBar] = useState(false);
  // 路由表

  //---------------------------------------
  return (
    // <Router>元件一定要放在最外層
    <Router>
      {/* 放切頁時不重新渲染的部份 s*/}
      <div style={{ display: !showBar && 'none' }}>
        <Navbar
        // setShowLoginModal={setShowLoginModal}
        // showLoginModal={showLoginModal}
        // setIsLogin={setIsLogin}
        // isLogin={isLogin}
        // currentUser={currentUser}
        />
      </div>
      {/* 放切頁時不重新渲染的部份 e*/}
      {/* 路由設定開始 */}
      <Switch>
        {/* 首頁 */}
        <Route exact path="/">
          <Home />
        </Route>

        {/* 主計入口 */}
        <Route exact path="/chairEntry">
          <ChairEntry />
        </Route>

        {/* 主計儀表板 */}
        <Route exact path="/chair">
          <Chair />
        </Route>

        {/* 評審入口 */}
        <Route exact path="/trialEntry">
          <TrialEntry />
        </Route>

        {/* 評審 */}
        <Route exact path="/trial">
          <Trial />
        </Route>

        {/* 評判反饋畫面 */}
        <Route exact path="/monitor">
          <Monitor />
        </Route>

        {/* 結果 */}
        <Route exact path="/result">
          <Result />
        </Route>

        {/* 結果(for個別評審) */}
        <Route exact path="/resultForJuror">
          <ResultForJuror />
        </Route>

        {/* 根路徑或未定義路徑，一律導向到/home */}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
