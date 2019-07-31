import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import UserBookings from "../pages/UserBookings";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5"
  }
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white
      }
    }
  }
}))(MenuItem);

function DropDownMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <React.Fragment>
      {/* <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Menu
      </Button> */}

      <IconButton
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        className="menu-dropdown"
        // size="medium"
        // color="primary"
        onClick={handleClick}
      >
        <Icon>menu</Icon>
      </IconButton>

      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link onClick={handleClose} component={RouterLink} to="/profile">
          <StyledMenuItem>
            <ListItemText>Homepage</ListItemText>
          </StyledMenuItem>
        </Link>

        <Link onClick={handleClose} component={RouterLink} to="/favourites">
          <StyledMenuItem>
            <ListItemText>My Favourites</ListItemText>
          </StyledMenuItem>
        </Link>

        <Link onClick={handleClose} component={RouterLink} to="/wishlists">
          <StyledMenuItem>
            <ListItemText>My Wishlists</ListItemText>
          </StyledMenuItem>
        </Link>

        <Link onClick={handleClose} component={RouterLink} to="/bookings">
          <StyledMenuItem>
            <ListItemText>My Bookings</ListItemText>
          </StyledMenuItem>
        </Link>
      </StyledMenu>
    </React.Fragment>
  );
}

export default DropDownMenu;
