import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useCountTargets } from "../../customhooks/CountTargets";

const Counter = () => {
  const { times: countBlue, setTimes: setCountBlue } = useCountTargets(0);
  const { times: countGreen, setTimes: setCountGreen } = useCountTargets(0);
  const { times: countdiv, setTimes: setCountdiv } = useCountTargets(0);

  return (
    <Box>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setCountBlue(countBlue + 1)}
      >
        Blue Button
      </Button>
      <Button
        variant="contained"
        style={{ marginLeft: "10px", background: "green" }}
        onClick={() => setCountGreen(countGreen + 1)}
      >
        Green Button
      </Button>
      <div style={{ marginTop: "20px" }}>
        <p>Blue Button Clicked: {countBlue} times</p>
        <p>Green Button Clicked: {countGreen} times</p>
      </div>
      <div
        style={{ marginTop: "20px", background: "black", height: "100px" }}
        onMouseEnter={() => setCountdiv(countdiv + 1)}
      ></div>
      <p>div hover: {countdiv} times</p>
    </Box>
  );
};

export default Counter;
