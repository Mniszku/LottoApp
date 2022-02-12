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
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";


const MyCoupons = () => {
  const [first, setFirst] = useState([0, 0, 0, 0, 0, 0]);
  const [firstmanual, setFirstmanual] = useState([0, 0, 0, 0, 0, 0]);
  const [second, setSecond] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const [secondmanual, setSecondmanual] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const [third, setThird] = useState([0, 0, 0]);
  const [thirdmanual, setThirdmanual] = useState([0, 0, 0]);
  const [fourth, setFourth] = useState([0]);
  const [fourthmanual, setFourthmanual] = useState([0]);
  console.log(first);
  console.log(firstmanual);

 
  useEffect(() => {
    setFirst(
      localStorage.getItem("/DrawFirst")
        ? localStorage.getItem("/DrawFirst").split(",")
        : []
    );
    setFirstmanual(
      localStorage.getItem("/DrawFirst/manual")
        ? localStorage.getItem("/DrawFirst/manual").split(",")
        : []
    );
    setSecond(
      localStorage.getItem("/DrawSecond")
        ? localStorage.getItem("/DrawSecond").split(",")
        : []
    );
    setSecondmanual(
      localStorage.getItem("/DrawSecond/manual")
        ? localStorage.getItem("/DrawSecond/manual").split(",")
        : []
    );
    setThird(
      localStorage.getItem("/DrawThird")
        ? localStorage.getItem("/DrawThird").split(",")
        : []
    );
    setThirdmanual(
      localStorage.getItem("/DrawThird/manual")
        ? localStorage.getItem("/DrawThird/manual").split(",")
        : []
    );
    setFourth(
      localStorage.getItem("/DrawFourth")
        ? localStorage.getItem("/DrawFourth").split(",")
        : []
    );
    setFourthmanual(
      localStorage.getItem("/DrawFourth/manual")
        ? localStorage.getItem("/DrawFourth/manual").split(",")
        : []
    );
  }, []);

  const handleClearStorage = () => {
    localStorage.clear();
    setFirst([]);
    setFirstmanual([]);
    setSecond([]);
    setSecondmanual([]);
    setThird([]);
    setThirdmanual([]);
    setFourth([]);
    setFourthmanual([]);
  };

  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <List dense={false}>
                  {first.map((number) => (
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <CircleOutlinedIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={number}
                        secondary={"Random Numbers"}
                      />
                    </ListItem>
                  ))}
                </List>
              </Grid>
              <Grid item xs={6}>
                <List dense={false}>
                  {firstmanual.map((number) => (
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <CircleOutlinedIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={number}
                        secondary={"Manual Numbers"}
                      />
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>

      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <List dense={false}>
                  {second.map((number) => (
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <CircleOutlinedIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={number}
                        secondary={"Random Numbers"}
                      />
                    </ListItem>
                  ))}
                </List>
              </Grid>
              <Grid item xs={6}>
                <List dense={false}>
                  {secondmanual.map((number) => (
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <CircleOutlinedIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={number}
                        secondary={"Manual Numbers"}
                      />
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <List dense={false}>
                  {third.map((number) => (
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <CircleOutlinedIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={number}
                        secondary={"Random Numbers"}
                      />
                    </ListItem>
                  ))}
                </List>
              </Grid>
              <Grid item xs={6}>
                <List dense={false}>
                  {thirdmanual.map((number) => (
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <CircleOutlinedIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={number}
                        secondary={"Manual Numbers"}
                      />
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <List dense={false}>
                  {fourth.map((number) => (
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <CircleOutlinedIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={number}
                        secondary={"Random Numbers"}
                      />
                    </ListItem>
                  ))}
                </List>
              </Grid>
              <Grid item xs={6}>
                <List dense={false}>
                  {fourthmanual.map((number) => (
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <CircleOutlinedIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={number}
                        secondary={"Manual Numbers"}
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
        <Button variant="contained">
          Start Check Coupons
        </Button>
        <Button   variant="contained">
          Start Lottery
        </Button>
      </Box>
    </>
  );
};
export default MyCoupons;
