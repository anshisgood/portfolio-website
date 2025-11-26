"use client"
import { useEffect, useState } from "react";
import HealthScreen from "./screens/healthscreen";
import MenuScreen from "./screens/menuscreen";
import Cursor from "./scripts/cursor.js";

export default function App() {
  const [screen, setScreen] = useState("health"); // "health", "menu"
  const [isVisible, setIsVisible] = useState(true);
  const transitionDuration = 1000; // in ms

  const goToMenu = () => {
    setIsVisible(false); // fade out
    setTimeout(() => {
      setScreen("menu");
      setIsVisible(true); // fade in
    }, transitionDuration);

  }

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

    <div className={`screen-container transition-opacity duration-${transitionDuration} ${
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
