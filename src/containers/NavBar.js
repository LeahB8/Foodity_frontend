import React from "react";
import ReactDOM from "react-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";
import "../App.css";
import myLogo from "../images/myLogo.png";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";
import DropDownMenu from "../components/DropDownMenu";
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4
  }
});

function NavBar(props) {
  const classes = useStyles();

  const sessionHeader = () => {
    return props.loggedIn ? (
      <React.Fragment>
        <DropDownMenu />
        <Button variant="contained" color="primary" className={classes.button}>
          <Link onClick={props.signout} className="Homepage-link" to="/">
            Sign Out
          </Link>
        </Button>
      </React.Fragment>
    ) : (
      <React.Fragment>
      <Button variant="contained" color="primary" className={classes.button}>
          <Link className="Homepage-link" to="/signin">
            Sign In
          </Link>
        </Button>
        <Button variant="contained" color="primary" className={classes.button}>
          <Link className="Homepage-link" to="/signup">
            Sign Up
          </Link>
        </Button>
      </React.Fragment>
    );
  };

  return (
    <div>
      <AppBar className="nav-header" position="static">
        <Toolbar className="toolbar-header">
          <img src={myLogo} className="App-logo" alt="logo" onClick={<Link to="/"></Link>}/>
          <Paper className={classes.root}>
            <InputBase className={classes.input} placeholder="Search Food" />
            <IconButton className={classes.iconButton} aria-label="Search">
              <SearchIcon />
            </IconButton>
          </Paper>

          <Paper className={classes.root}>
            <InputBase
              className={classes.input}
              placeholder="Search Google Maps"
              inputProps={{ "aria-label": "Search Google Maps" }}
            />
            <IconButton className={classes.iconButton} aria-label="Search">
              <SearchIcon />
            </IconButton>
            <Divider className={classes.divider} />
            <IconButton
              color="primary"
              className={classes.iconButton}
              aria-label="Directions"
            >
              <DirectionsIcon />
            </IconButton>
          </Paper>
          <div className="navbar-link">{sessionHeader()}</div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
