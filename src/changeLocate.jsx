import styled from "styled-components";
import useScrollPosition from "./senseScrollEvent";
import useMousePosition from "./mouseMoveEvent";
import { useEffect, useState } from "react";

const Circle = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => (props.color ? "purple" : "blue")};
  z-index: 1;
  border-radius: 50%;
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  transform: translate(-50%, -50%);
`;

function ChangeCircleLocate() {
  const [scrollPosition, setScrollPosition] = useState(Math.floor(Math.random() * (500 - 1 + 1)) + 1); // 고정된 공의 Y 좌표
  const { x, y } = useMousePosition(); // 마우스를 따라 움직이는 공의 좌표
  const [isColliding, setIsColliding] = useState(false);

  const fixedCircle = { x: scrollPosition, y: scrollPosition, radius: 50 }; // 고정된 공의 좌표와 반지름

  const detectCollision = (circle1, circle2) => {
    const dx = circle1.x - circle2.x; // 200 - 
    const dy = circle1.y - circle2.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < circle1.radius + circle2.radius;
  };

  useEffect(() => {
    const collided = detectCollision(fixedCircle, {x:x, y:y, radius:50});
    setIsColliding(collided);

    if (collided) {
      console.log("충돌 발생!");
      setScrollPosition(Math.floor(Math.random() * (500 - 1 + 1)) + 1)
    }
  }, [scrollPosition, x, y]);

  return (
    <>
      <Circle top={scrollPosition} left={scrollPosition} color={isColliding}/>
    </>
  );
}

export default ChangeCircleLocate;
