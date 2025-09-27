import StyledButton from "@mui/material/Button";
function Button(props) {
  function handleClick() {
    console.log("I am clicked", props.content);
    props.checkAnswer(props.content);
  }
  return (
    <div>
      <StyledButton
        onClick={handleClick}
        sx={{
          padding: "15px",
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
        {props.content}
      </StyledButton>
    </div>
  );
}
export default Button;
