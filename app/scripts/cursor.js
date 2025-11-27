"use client"
import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef(null);
  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;
  let jitterX = 0, jitterY = 0;
  let lastMouseX = 0, lastMouseY = 0;
  let stillFrames = 0; // counts how many frames the mouse has been still
  let customMouseX = 0, customMouseY = 0; // the position of the mouse displayed on screen.

  let lastMenuItem = null;
  const menuItemHoverCheck = (e) => {
    if (lastMenuItem && lastMenuItem !== e) {
      // if no longer hovering, reset last menu style.
      lastMenuItem.style.outline = "0.15vw solid gray";
      lastMenuItem = null;
    }

    if (e.classList.contains("menu-item")) {
      e.style.outline = "0.55vw solid rgba(98, 200, 235, 0.55)";
      lastMenuItem = e;
    }
  }

  useEffect(() => {
    const cursor = cursorRef.current;

    // track mouse
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);

  // Mouse Trailing/Dragging Animation Section:
    function animate() { 
      // trailing effect
      cursorX += (mouseX - cursorX) * 0.1;
      cursorY += (mouseY - cursorY) * 0.1;

      // Check if mouse is still
      if (Math.abs(mouseX - lastMouseX) < 0.1 && Math.abs(mouseY - lastMouseY) < 0.1) {
        stillFrames++;
      } else {
        stillFrames = 0; // reset if currently moving.
      }

      lastMouseX = mouseX;
      lastMouseY = mouseY;

      // If moving, apply jitter
      if (stillFrames < 10) {
        jitterX = (Math.random() - 0.5) * 5;
        jitterY = (Math.random() - 0.5) * 4;
      } else {
        // Ease jitter back to zero when still
        jitterX *= 0.9;
        jitterY *= 0.9;
      }

      customMouseX = cursorX + jitterX;
      customMouseY = cursorY + jitterY;

      if (cursor) {
        cursor.style.transform = `translate(${customMouseX}px, ${customMouseY}px)`;
      }

      requestAnimationFrame(animate);
    }

    animate();

  // Mouse Logic Section:
    const elementHoveringOver = e.target;

    // if hovering over link, change cursor image
    if (elementHoveringOver.tagName == "A") {
      cursor.classList.add("hovering-link");
    } else { // reset if not hovering over link:
      cursor.classList.remove("hovering-link");
    }

    // hovering over menu item, change style
    menuItemHoverCheck(elementHoveringOver);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div ref={cursorRef} className="default-cursor"/>
  );
}