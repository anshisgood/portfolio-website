import "../styles/healthscreen.css";

export default function HealthScreen() {
    return (
      <>
      <div className="health-container">
        <div className="header1"><p>&#9888;WARNING-HEALTH AND SAFETY</p></div>
        <div className="header2">
          <p>BEFORE PLAYING, READ YOUR OPERATIONS<br/>
          MANUAL FOR IMPORTANT INFORMATION<br/>
          ABOUT YOUR HEALTH AND SAFETY.</p>
        </div>
        <div className="header3">
          <p>Also online at<br/>
          <a href="https://www.linkedin.com/in/ansh56/" target="_blank">www.linkedin.com/in/ansh56/</a></p>
        </div>
        <div className="header4"><p>Press &#9398; to continue.</p></div>
        <p className="fullscreen-tip">For the best experience, view in fullscreen (F11).</p>
      </div>
      </>
    )
}