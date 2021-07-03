import React, { useState, useEffect } from 'react';

// 引入react router => 用於制定路由
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// 引入共用元件
import Navbar from 'Pages/Navbar';

// 引入 頁面元件
import Home from 'Pages/Home';
import ChairEntry from 'Pages/ChairEntry';
import Chair from 'Pages/Chair';
import Trial from 'Pages/Trial';
import TrialEntry from 'Pages/TrialEntry';
import Monitor from 'Pages/Monitor';
import ResultForJuror from 'Pages/ResultForJuror';
import Result from 'Pages/Result ';

//加入 ScrollToTop
import ScrollToTop from 'Share/Components/ScrollToTop/ScrollToTop';

//------------------------------------
function App() {
  const [showBar, setShowBar] = useState(true);
  // 路由表

  //---------------------------------------
  return (
    // <Router>元件一定要放在最外層
    <Router>
      {' '}
      <>
        {' '}
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
        <ScrollToTop>
          <Switch>
            {/* 首頁 */}
            <Route exact path='/'>
              <Home />
            </Route>

            {/* 主計入口 */}
            <Route exact path='/chairEntry'>
              <ChairEntry />
            </Route>

            {/* 主計儀表板 */}
            <Route exact path='/chair'>
              <Chair />
            </Route>

            {/* 評審入口 */}
            <Route exact path='/trialEntry'>
              <TrialEntry />
            </Route>
  
            {/* 評審 */}
            <Route exact path='/trial'>
              <Trial />
            </Route>

            {/* 評判反饋畫面 */}
            <Route exact path='/monitor'>
              <Monitor />
            </Route>
    
            {/* 結果 */}
            <Route exact path='/result'>
              <Result />
            </Route>
            
            {/* 結果(for個別評審) */}
            <Route exact path='/resultForJuror'>
              <ResultForJuror />
            </Route>


          </Switch>
        </ScrollToTop>
      </>
    </Router>
  );
}

export default App;
