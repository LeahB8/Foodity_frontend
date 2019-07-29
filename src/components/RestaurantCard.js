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
import { fetchUserInfo, findIndividualRestaurantInfo } from "../services/api";
import swal from 'sweetalert';


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
      props.addFave(restaurant.R.res_id)
        // findIndividualRestaurantInfo(restaurant.R.res_id)
        .then(swal({
          title: "Restaurant added to favourites.",
          icon: "success",
        }))
    } else {
      swal("Please sign in");
    }
  }

  function handleLikeWishlist(restaurant) {
    if (props.loggedIn) {
      props.addWishlist(restaurant.R.res_id)
        // findIndividualRestaurantInfo(restaurant.R.res_id)
        .then(swal({
          title: "Restaurant added to wishlists.",
          icon: "success",
        }))    
      } else {
      swal("Please sign in");
    }
  }

  const images = [
    "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
    "https://images.unsplash.com/photo-1551218372-a8789b81b253?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1506812779316-934cef283429?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1483274816418-3975509c8f78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1483648969698-5e7dcaa3444f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80"
  ]

  function imgLoadError(event) {
    event.target.src = images[Math.floor(Math.random() * images.length)]

    // event.target.src = "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        action={

          <DateTime user={props.user} restaurant={props.single} addBooking={props.addBooking} loggedIn={props.loggedIn} />

        }
        title={props.single.name}
      />

      <CardMedia className={classes.media}>
        <img
          className="restaurant-image"
          src={props.single.featured_image}
          onError={imgLoadError}
          alt="restaurant"
        />
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
            onClick={() => handleLikeFavourite(props.single)}
          >
            <FavoriteIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Wishlist">
          <IconButton
            aria-label="Add to wishlist"
            onClick={() => handleLikeWishlist(props.single)}
          >
            <Icon>star</Icon>
          </IconButton>
        </Tooltip>

        <Dashboard single={props.single} />

      </CardActions>

    </Card>
  );
}
