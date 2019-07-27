import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import StarRatings from "react-star-ratings";
import Dashboard from "./Dashboard";
import Icon from "@material-ui/core/Icon";
import Tooltip from "@material-ui/core/Tooltip";
import DateTime from "./DateTime";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  card: {
    width: 300,
    marginBottom: 20
  },
  media: {
    // height: 0,
    // paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export default function RestaurantCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  function handleLikeFavourite(restaurant) {
    if (props.loggedIn) {
      props.addFave(restaurant.R.res_id);
    } else {
      alert("Please sign in.");
    }
  }

  function handleLikeWishlist(restaurant) {
    if (props.loggedIn) {
      props.addWishlist(restaurant.R.res_id);
    } else {
      alert("Please sign in.");
    }
  }
  function imgLoadError(event) {
    event.target.src = "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
  }

  // function showModal(single) {
  //   return (
  //     <Dashboard single={props.single} />
  //   )

  // }
  return (
    <Card className={classes.card}>
      <CardHeader
        action={
          <Tooltip title="Book">
            <IconButton
              aria-label="Settings"
            // onClick={}
            >
              <MoreVertIcon />
            </IconButton>
          </Tooltip>
        }
        title={props.single.name}
      />
      {/* <DateTime /> */}

      <CardMedia className={classes.media}>
        {/* <Link> */}
        <img
          className="restaurant-image"
          src={props.single.featured_image}
          onError={imgLoadError}
          alt="restaurant"
        />
        {/* </Link> */}
      </CardMedia>
      <CardContent>
        <Typography variant="subtitle1" color="textSecondary">
          {props.single.cuisines}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Tooltip title="Favourite">
          <IconButton
            name="favourite"
            aria-label="Add to favourites"
            onClick={() => handleLikeFavourite(props.single.restaurant)}
          >
            <FavoriteIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Wishlist">
          <IconButton
            aria-label="Add to wishlist"
            onClick={() => handleLikeWishlist(props.single.restaurant)}
          >
            <Icon>star</Icon>
          </IconButton>
        </Tooltip>

        <Dashboard single={props.single} />

        {/* <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Show more"
        >
          <ExpandMoreIcon />
        </IconButton> */}
        {/* <Tooltip title="More Info">
          <IconButton
            aria-label="more info"
            onClick={() => showModal(props.single)}
          >
            <Icon>info</Icon>
          </IconButton>
        </Tooltip> */}

      </CardActions>
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <br />
      </Collapse> */}
    </Card>
  );
}
