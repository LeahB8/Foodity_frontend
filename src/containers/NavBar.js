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
        <Link onClick={props.signout} className="Homepage-link" to="/">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Sign Out
          </Button>
        </Link>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <Link className="Homepage-link" to="/signin">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Sign In
          </Button>
        </Link>
        <Link className="Homepage-link" to="/signup">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Sign Up
          </Button>
        </Link>
      </React.Fragment>
    );
  };

  const homepageButton = () => {
    return props.loggedIn ? (
      <Link to="/profile">
        <img src={myLogo} className="App-logo" alt="logo" />
      </Link>
    ) : (
      <Link to="/">
        <img src={myLogo} className="App-logo" alt="logo" />
      </Link>
    );
  };

  return (
    <div>
      <AppBar className="nav-header">
        <Toolbar className="toolbar-header">
          <div>
            {homepageButton()}
            {/* <Link to="/profile">
            <img src={myLogo} className="App-logo" alt="logo" />
          </Link> */}
          </div>

          <div className="navbar-link">{sessionHeader()}</div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
