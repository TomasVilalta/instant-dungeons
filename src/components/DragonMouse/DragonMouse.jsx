import React from "react";
import styles from "./DragonMouse.module.css";

function DragonMouse() {
  const [mousePosition, setMousePosition] = React.useState({ x: null, y: null });
  const imgRef = React.useRef();

  React.useEffect(() => {
    function handleMouseMove(event) {
      console.log("move");
      setMousePosition({
        x: event.pageX,
        y: event.pageY,
      });
      console.log({ mousePosition });
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  React.useEffect(() => {
    imgRef.current.style.top = `${mousePosition.y - 50}px`;
    imgRef.current.style.left = `${mousePosition.x - 50}px`;
  }, [mousePosition]);

  return (
    <div>
      <div>
        {mousePosition.x}/ {mousePosition.y}
      </div>
      <img className={styles.dragon} ref={imgRef} src="/public/dragon.svg" />
    </div>
  );
}

export default DragonMouse;
