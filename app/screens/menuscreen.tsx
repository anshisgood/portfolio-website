import "../styles/menuscreen.css";

export default function MenuScreen() {
    return (
      <div className="menu-container">
        <p>need to make..</p>

        <img src={"/images/wii-button.svg"} style={{position: "absolute", width: "9vw", bottom: "1.9%", left: "4.6%"}}></img>
        <img src={"/images/wii-SD.png"} style={{position: "absolute", width: "4vw", bottom: "1.9%", left: "18.5%"}}></img>
        
        <div className="menu-items-container">
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>

          <div className="item"></div>
          <div className="item"></div>
          {/* <div className="item"></div>
          <div className="item"></div>

          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div> */}
        </div>
      
      </div>
    )
}