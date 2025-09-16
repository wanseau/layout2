import './App.css';

function App() {
  return (
    <div className="outer">
      <div className="header">
        <div className="header-box"></div>
        <div className="header-box header-center">
          <div className="center-left"></div>
          <div className="center-right"></div>
        </div>
        <div className="header-box"></div>
      </div>
      <div className="main">
        <div className="main-left"></div>
        <div className="main-right">
          <div className="main-right-top"></div>
          <div className="main-right-bottom"></div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-box"></div>
        <div className="footer-box footer-center"></div>
        <div className="footer-box footer-center"></div>
        <div className="footer-box"></div>
      </div>
    </div>
  );
}

export default App;