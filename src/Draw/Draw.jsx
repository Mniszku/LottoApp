import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useEffect } from "react";
import { randomNumbers } from "../Helpers/randomNumbersHelper";

const Draw = (props) => {
  const pathname = window.location.pathname;
  const initialNumbers = new Array(props.numbersCount).fill(0);
  const [numbers, setNumbers] = useState(initialNumbers);

  const handleRefreshClick = () => {
    setNumbers(initialNumbers);
  };

  const handleClickRandom = () => {
    setNumbers(randomNumbers(props.numbersCount, props.min, props.max));
  };

  const handleChangeNumber = (event) => {
    const items = [...numbers];
    items[Number(event.target.id)] = Number(event.target.value);
    setNumbers(items);
  };

  const handleManuallyCoupon = () => {
    localStorage.setItem(pathname + "/manual", numbers);
  };

  const handleAcceptCoupon = () => {
    localStorage.setItem(pathname, numbers);
  };

  const generateInput = () => {
    let inputs = [];

    for (let i = 0; i < props.numbersCount; i++) {
      inputs.push(
        <TextField
          id={i}
          onChange={handleChangeNumber}
          value={numbers[i]}
          type="number"
          variant="outlined"
        />
      );
    }
    return inputs;
  };

  useEffect(() => {
    console.log(pathname);
    let newInitialNumbers = new Array(props.numbersCount).fill(0);
    setNumbers(newInitialNumbers);
  }, [props]);

  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          {generateInput()}
          <Box sx={{ "& > :not(style)": { m: 1 } }}>
            <Button onClick={handleClickRandom} variant="contained">
              Draw Random Numbers
            </Button>
            <Button onClick={handleAcceptCoupon} variant="contained">
              Accept coupon
            </Button>
            <Button onClick={handleManuallyCoupon} variant="contained">
              Save Manually Selected Numbers
            </Button>
            <Button onClick={handleRefreshClick} variant="contained">
              Refresh Coupon
            </Button>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default Draw;
