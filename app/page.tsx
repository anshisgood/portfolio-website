"use client"
import { Howl } from "howler";
import { useEffect, useState } from "react";
import HealthScreen from "./screens/healthscreen";
import MenuScreen from "./screens/menuscreen";
import Cursor from "./scripts/cursor.js";

export default function App() {
  const [screen, setScreen] = useState("health"); // "health", "menu"
  const [isVisible, setIsVisible] = useState(true);

  const clickSound = new Howl({
    src: ["/sfx/click.mp3"]
  });
  const startSound = new Howl({
    src: ["/sfx/wii-start-up.mp3"],
    volume: 0.6
  })
  const menuMusic = new Howl({
    src: ["/sfx/main-menu-loop.mp3"],
    loop: true,
    volume: 1.2
  })

  const goToMenu = () => {
    clickSound.play();
    var id1 = startSound.play();
    // startSound.fade(1, 0, 1000, id1);
    startSound.on("end", function() {
      menuMusic.play();
    })

    setIsVisible(false); // fade out
    setTimeout(() => {
      setScreen("menu");
      setIsVisible(true); // fade in
    }, 1000);
  }

  // Keyboard logic:
  useEffect(() => {
    const handleKeyDown = (e: { key: string; }) => {
      if (screen == "health" && (e.key == "Enter" || e.key == " " || e.key.toLowerCase() == "a")) {
        goToMenu();
      }
    };

    const handleClick = () => {
      if (screen == "health") {
        goToMenu();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("click", handleClick);
    }
  }, [screen])

  return (
    <>
    <Cursor/>

    <div className={`screen-container transition-opacity duration-1000 ${
      isVisible ? "opacity-100" : "opacity-0"
    }`}>
      {screen == "health" &&
        <HealthScreen/>
      }
      {screen == "menu" &&
        <MenuScreen/>
      }
    </div>
    </>
  );
}
