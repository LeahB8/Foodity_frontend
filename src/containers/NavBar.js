import React from "react";
import ReactDOM from "react-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../App.css";
import myLogo from '../images/myLogo.png'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

const useStyles = makeStyles({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
});

export default function NavBar(props) {
    const classes = useStyles();

  const sessionHeader = () => {
      return props.loggedIn ? 
        ( <div>
            <div className="navbar-link">
                <Link onClick={props.signout} className="Homepage-link" to="/">
                    Sign Out
                </Link>
            </div>
            <div className="navbar-link">
                <Link className="Homepage-link" to="/bookings">
                    My Bookings
                </Link>
            </div> 
          </div>)
       : (<div>
          <div className="navbar-link">
           <Link className="Homepage-link" to="/signin">
             Sign In
           </Link>
          </div> 
         <div className="navbar-link">
           <Link className="Homepage-link" to="/signup">
             Sign Up
           </Link>
        </div>  
       </div>
       )
      }
  
    return (  
      <div className="navbar">
        <AppBar className="nav-header" position="static">
          <Toolbar className="toolbar-header">
              <img src={myLogo} className="App-logo" alt="logo" />
              <Paper className={classes.root}>
                    
                    <InputBase
                        className={classes.input}
                        placeholder="Search Food"
                    />
                    <IconButton className={classes.iconButton} aria-label="Search">
                        <SearchIcon />
                    </IconButton>
                </Paper>

                <Paper className={classes.root}>
                    <InputBase
                        className={classes.input}
                        placeholder="Search Google Maps"
                        inputProps={{ 'aria-label': 'Search Google Maps' }}
                    />
                    <IconButton className={classes.iconButton} aria-label="Search">
                        <SearchIcon />
                    </IconButton>
                    <Divider className={classes.divider} />
                    <IconButton color="primary" className={classes.iconButton} aria-label="Directions">
                        <DirectionsIcon />
                    </IconButton>
                </Paper>
              <div>
                <div className="navbar-link">{sessionHeader()}</div>
              </div>
          </Toolbar>
        </AppBar>
        </div>
    );
  }