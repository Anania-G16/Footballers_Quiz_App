import { Fireworks } from "fireworks-js";
import { useEffect, useRef } from "react";
import Button from "./button.jsx";
import StyledButton from "@mui/material/Button";

function Cheer(props) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const fireworks = new Fireworks(containerRef.current, {
        autoresize: true,
        opacity: 0.5,
        acceleration: 1.05,
        friction: 0.97,
        gravity: 1.5,
        particles: 50,
        trace: 3,
        explosion: 5,
        intensity: 30,
        flickering: 50,
        lineStyle: "round",
        hue: { min: 0, max: 360 },
      });
      fireworks.start();

      return () => fireworks.stop();
    }
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        style={{ position: "fixed", width: "100vw", height: "100vh" }}
      ></div>
      <div className="won-container">
        <div className="emoji">🏆</div>
        <div className="gameover">You Won!!</div>
        <div className="gameover">Score : {props.winningScore}</div>
        <div>
          <StyledButton
            onClick={props.restart}
            sx={{
              padding: "8px",
              borderColor: "#106112",
              borderWidth: "1px",
              color: "#106112",
              "&:hover": {
                backgroundColor: "#69c96a",
                borderColor: "#69c96a",
              },
            }}
            className="choice"
            variant="outlined"
          >
            Restart
          </StyledButton>
        </div>
      </div>
    </>
  );
}

export default Cheer;
