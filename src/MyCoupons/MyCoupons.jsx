import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import React from "react";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { randomNumbers } from "./../Helpers/randomNumbersHelper";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";

const MyCoupons = () => {
  const [first, setFirst] = useState([0, 0, 0, 0, 0, 0]);
  const [firstManual, setFirstManual] = useState([0, 0, 0, 0, 0, 0]);
  const [second, setSecond] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const [secondManual, setSecondManual] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const [third, setThird] = useState([0, 0, 0]);
  const [thirdManual, setThirdManual] = useState([0, 0, 0]);
  const [fourth, setFourth] = useState([0]);
  const [fourthManual, setFourthManual] = useState([0]);
  const [firstLotteryResult, setFirstLotteryResult] = useState([]);
  const [secondLotteryResult, setSecondLotteryResult] = useState([]);
  const [thirdLotteryResult, setThirdLotteryResult] = useState([]);
  const [fourthLotteryResult, setFourthLotteryResult] = useState([]);
  const [lotteryStartDisabled, setLotteryStartDisabled] = useState(false);

  useEffect(() => {
    setFirst(
      localStorage.getItem("/DrawFirst")
        ? localStorage.getItem("/DrawFirst").split(",")
        : []
    );
    setFirstManual(
      localStorage.getItem("/DrawFirst/manual")
        ? localStorage.getItem("/DrawFirst/manual").split(",")
        : []
    );
    setSecond(
      localStorage.getItem("/DrawSecond")
        ? localStorage.getItem("/DrawSecond").split(",")
        : []
    );
    setSecondManual(
      localStorage.getItem("/DrawSecond/manual")
        ? localStorage.getItem("/DrawSecond/manual").split(",")
        : []
    );
    setThird(
      localStorage.getItem("/DrawThird")
        ? localStorage.getItem("/DrawThird").split(",")
        : []
    );
    setThirdManual(
      localStorage.getItem("/DrawThird/manual")
        ? localStorage.getItem("/DrawThird/manual").split(",")
        : []
    );
    setFourth(
      localStorage.getItem("/DrawFourth")
        ? localStorage.getItem("/DrawFourth").split(",")
        : []
    );
    setFourthManual(
      localStorage.getItem("/DrawFourth/manual")
        ? localStorage.getItem("/DrawFourth/manual").split(",")
        : []
    );
  }, []);

  const startLottery = () => {
    setLotteryStartDisabled(true);
    setFirstLotteryResult(randomNumbers(6, 6, 49));
    setSecondLotteryResult(randomNumbers(8, 1, 100));
    setThirdLotteryResult(randomNumbers(3, 1, 30));
    setFourthLotteryResult(randomNumbers(1, 1, 20));
    checkLotteryResults();
  };

  const checkLotteryResults = () => {
    checkResults(first, setFirst, firstLotteryResult);
    checkResults(second, setSecond, secondLotteryResult);
    checkResults(third, setThird, thirdLotteryResult);
    checkResults(fourth, setFourth, fourthLotteryResult);
    checkResults(firstManual, setFirstManual, firstLotteryResult);
    checkResults(secondManual, setSecondManual, secondLotteryResult);
    checkResults(thirdManual, setThirdManual, thirdLotteryResult);
    checkResults(fourthManual, setFourthManual, fourthLotteryResult);
  };

  const checkResults = (playerNumbers, setStateFunction, lotteryResult) => {
    let result = [];
    playerNumbers.forEach((number) => {
      if (lotteryResult.includes(Number(number))) {
        result.push("winning/" + number);
      } else {
        result.push(number);
      }
    });
    setStateFunction(result);
  };

  const handleClearStorage = () => {
    localStorage.clear();
    setFirst([]);
    setFirstManual([]);
    setSecond([]);
    setSecondManual([]);
    setThird([]);
    setThirdManual([]);
    setFourth([]);
    setFourthManual([]);
  };

  console.log(first);
  return (
    <>
      <Card variant="outlined" sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" sx={{ fontSize: 14 }} gutterBottom>
            First Coupon
          </Typography>
          <Divider />
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Random selected
                </Typography>
                <List dense={false}>
                  {first.map((number) => (
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          {String(number).includes("winning/") ? (
                            <CheckCircleIcon />
                          ) : (
                            <CircleOutlinedIcon />
                          )}
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={String(number).split("winning/")}
                      />
                    </ListItem>
                  ))}
                </List>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Manually selected
                </Typography>
                <List dense={false}>
                  {firstManual.map((number) => (
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          {String(number).includes("winning/") ? (
                            <CheckCircleIcon />
                          ) : (
                            <CircleOutlinedIcon />
                          )}
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={String(number).split("winning/")}
                      />
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>

      <Card variant="outlined" sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" sx={{ fontSize: 14 }} gutterBottom>
            Second Coupon
          </Typography>
          <Divider />
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Random selected
                </Typography>
                <List dense={false}>
                  {second.map((number) => (
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          {String(number).includes("winning/") ? (
                            <CheckCircleIcon />
                          ) : (
                            <CircleOutlinedIcon />
                          )}
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={String(number).split("winning/")}
                      />
                    </ListItem>
                  ))}
                </List>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Manually selected
                </Typography>
                <List dense={false}>
                  {secondManual.map((number) => (
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          {String(number).includes("winning/") ? (
                            <CheckCircleIcon />
                          ) : (
                            <CircleOutlinedIcon />
                          )}
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={String(number).split("winning/")}
                      />
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
      <Card variant="outlined" sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" sx={{ fontSize: 14 }} gutterBottom>
            Third Coupon
          </Typography>
          <Divider />
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Random selected
                </Typography>
                <List dense={false}>
                  {third.map((number) => (
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          {String(number).includes("winning/") ? (
                            <CheckCircleIcon />
                          ) : (
                            <CircleOutlinedIcon />
                          )}
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={String(number).split("winning/")}
                      />
                    </ListItem>
                  ))}
                </List>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Manually selected
                </Typography>
                <List dense={false}>
                  {thirdManual.map((number) => (
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          {String(number).includes("winning/") ? (
                            <CheckCircleIcon />
                          ) : (
                            <CircleOutlinedIcon />
                          )}
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={String(number).split("winning/")}
                      />
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
      <Card variant="outlined" sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" sx={{ fontSize: 14 }} gutterBottom>
            Fourth Coupon
          </Typography>
          <Divider />
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Random selected
                </Typography>
                <List dense={false}>
                  {fourth.map((number) => (
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          {String(number).includes("winning/") ? (
                            <CheckCircleIcon />
                          ) : (
                            <CircleOutlinedIcon />
                          )}
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={String(number).split("winning/")}
                      />
                    </ListItem>
                  ))}
                </List>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Manually selected
                </Typography>
                <List dense={false}>
                  {fourthManual.map((number) => (
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          {String(number).includes("winning/") ? (
                            <CheckCircleIcon />
                          ) : (
                            <CircleOutlinedIcon />
                          )}
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={String(number).split("winning/")}
                      />
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>

      <Box sx={{ "& > :not(style)": { m: 3 } }}>
        <Button onClick={handleClearStorage} variant="contained">
          Clear LocalStorage
        </Button>
        <Button onClick={startLottery} variant="contained">
          Start Lottery
        </Button>
      </Box>
    </>
  );
};

export default MyCoupons;
