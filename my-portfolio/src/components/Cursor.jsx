import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const cursorRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;

    const move = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const enter = () => setActive(true);
    const leave = () => setActive(false);

    window.addEventListener("mousemove", move);

    const targets = document.querySelectorAll(
      "a, button, input, .archive-item, .carousel-control, .experience-dots button"
    );

    targets.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", move);

      targets.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`scanner-cursor ${active ? "active" : ""}`}
    >
      <span />
    </div>
  );
}