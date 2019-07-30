import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../App.css";
import myLogo from "../images/myLogo.png";
import { makeStyles } from "@material-ui/core/styles";
import DropDownMenu from "../components/DropDownMenu";
import Button from "@material-ui/core/Button";

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
    padding: 10,
    textDecoration: "none"
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4
  },
  button: {
    margin: 10
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
      <AppBar className="nav-header">
        <Toolbar className="toolbar-header">
          <Link to="/profile">
            <img src={myLogo} className="App-logo" alt="logo" />
          </Link>

          <div className="navbar-link">{sessionHeader()}</div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
