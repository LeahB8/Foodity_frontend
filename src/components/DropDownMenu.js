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
import UserBookings from '../pages/UserBookings'

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
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Menu
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemText>
            <Link component={RouterLink} to="/favourites">
              My Favourites
            </Link>
          </ListItemText>
        </StyledMenuItem>

        <StyledMenuItem>
          <ListItemText>
            <Link component={RouterLink} to="/wishlists">
              My Wishlists
            </Link>
        </ListItemText>
        </StyledMenuItem>

        <StyledMenuItem>
          <ListItemText>
            <Link component={RouterLink} to="/bookings">
              My Bookings
            </Link>
          </ListItemText>
        </StyledMenuItem>

        <StyledMenuItem>
            <ListItemText>
                <Link component={RouterLink} to="/profile">
                My Profile
                </Link>
            </ListItemText>
            </StyledMenuItem>
        </StyledMenu>
    </React.Fragment>
  );
}

export default DropDownMenu;
