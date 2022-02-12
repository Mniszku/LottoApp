
import './App.css';
import {
  BrowserRouter,
  Link
} from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Route, Routes } from "react-router-dom";
import Draw from './Draw/Draw';
import Home from './Home/Home';
import MyCoupons from './MyCoupons/MyCoupons';
import Filter1OutlinedIcon from '@mui/icons-material/Filter1Outlined';
import Filter2OutlinedIcon from '@mui/icons-material/Filter2Outlined';
import Filter3OutlinedIcon from '@mui/icons-material/Filter3Outlined';
import Filter4OutlinedIcon from '@mui/icons-material/Filter4Outlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import { createSvgIcon } from '@mui/material/utils';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));


function App(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const HomeIcon = createSvgIcon(
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
    'Home',
  );
  

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
          <ListItem key={'Home'} component={Link} to={'/'}>
            <ListItemIcon>
            <HomeIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={'Home'} />
          </ListItem>
          <ListItem key={'Draw First'} component={Link} to={'/DrawFirst'}>
            <ListItemIcon>
              <Filter1OutlinedIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={'Draw First'} />
          </ListItem>
          <ListItem key={'Draw Second'} component={Link} to={'/DrawSecond'}>
            <ListItemIcon>
            <Filter2OutlinedIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={'Draw Second'} />
          </ListItem>
          <ListItem key={'Draw Third'} component={Link} to={'/DrawThird'}>
            <ListItemIcon>
            <Filter3OutlinedIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={'Draw Third'} />
          </ListItem>
          <ListItem key={'Draw Fourth'} component={Link} to={'/DrawFourth'}>
            <ListItemIcon>
            <Filter4OutlinedIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={'Draw Fourth'} />
          </ListItem>
          <ListItem key={'My Coupons'} component={Link} to={'/MyCoupons'}>
            <ListItemIcon>
              <ReceiptOutlinedIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={'My Coupons'} />
          </ListItem>
      </List>
    </div>
  );

  return (

    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Welcome Lets Play Lotto Drawer 
          </Typography>
        </Toolbar>
      </AppBar>
      <BrowserRouter>
        <nav className={classes.drawer} aria-label="mailbox folders">
     
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
              ModalProps={{
                keepMounted: true 
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>

        <main className={classes.content}>
          <div className={classes.toolbar} />

          <Routes>
          
          <Route exact path="/" element={<Home />}/>
          
         
          <Route path="/DrawFirst" element={<Draw numbersCount={6} min={6} max={49}/>}/>
          
          
          <Route path="/DrawSecond" element={<Draw numbersCount={8} min={1} max={100}/>}/>
          
          
          <Route path="/DrawThird" element={<Draw numbersCount={3} min={1} max={30}/>}/>

          
          <Route path="/DrawFourth" element={<Draw numbersCount={1} min={1} max={20}/>}/>

          
          <Route path="/MyCoupons" element={<MyCoupons/>}/>
            
          
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
App.propTypes = {
 
  container: PropTypes.instanceOf(
    typeof Element === "undefined" ? Object : Element
  )
};



export default App;
