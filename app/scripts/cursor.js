"use client"
import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef(null);
  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;
  let jitterX = 0, jitterY = 0;
  let lastMouseX = 0, lastMouseY = 0;
  let stillFrames = 0; // counts how many frames the mouse has been still

  useEffect(() => {
    const cursor = cursorRef.current;

    // track mouse
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // check if hovering over link, change cursor image
      if (e.target.tagName === "A") {
        cursor.classList.add("hovering-link");
      } else {
        cursor.classList.remove("hovering-link");
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

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

      if (cursor) {
        cursor.style.transform = `translate(${cursorX + jitterX}px, ${cursorY + jitterY}px)`;
      }

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="default-cursor"
    />
  );
}