import "../styles/menuscreen.css";

export default function MenuScreen() {
  return (
    <>
    <img className="stretched-background" src="/images/wii-menu-background-stretch.png"/>
    
    <div className="menu-container">
      <div className="menu-items-container">
        <div className="menu-item"></div>
        <div className="menu-item mii-channel"></div>
        <div className="menu-item photo-channel"></div>
        <div className="menu-item forecast-channel"></div>

        <div className="menu-item wii-shop-channel"></div>
        <div className="menu-item"></div>
        {/* <div className="menu-item"></div>
        <div className="menu-item"></div>

        <div className="menu-item"></div>
        <div className="menu-item"></div>
        <div className="menu-item"></div>
        <div className="menu-item"></div> */}
      </div>
    </div>
    </>
  )
}