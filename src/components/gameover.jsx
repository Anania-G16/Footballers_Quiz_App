import StyledButton from "@mui/material/Button";
function GameOver(props) {
  return (
    <div className="gameover-container">
      <div className="emoji">😔</div>
      <div className="gameover">Game Over !!</div>
      <div className="gameover">Your Score : {props.score}</div>
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
  );
}

export default GameOver;
