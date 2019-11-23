import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Dashboard from "./Dashboard";
import Icon from "@material-ui/core/Icon";
import Tooltip from "@material-ui/core/Tooltip";
import DateTime from "./DateTime";
import swal from "sweetalert";

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

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleLikeFavourite = restaurant => {
    if (props.loggedIn) {
      props
        .addFave(restaurant.R.res_id)
        .then(() => props.fetchRestaurantsFromServer())

        .then(
          swal({
            title: "Restaurant added to favourites.",
            icon: "success",
            timer: 1500
          })
        )
        .then(props.setUserFavourites(props.user));
    } else {
      swal("Please sign in");
    }
  };

  const handleLikeWishlist = restaurant => {
    if (props.loggedIn) {
      props
        .addWishlist(restaurant.R.res_id)
        .then(() => props.fetchRestaurantsFromServer())

        .then(
          swal({
            title: "Restaurant added to wishlists.",
            icon: "success",
            timer: 1500
          })
        )
        .then(props.setUserWishlists(props.user));
    } else {
      swal("Please sign in");
    }
  };

  const images = [
    "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
    "https://images.unsplash.com/photo-1551218372-a8789b81b253?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1506812779316-934cef283429?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1483274816418-3975509c8f78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1483648969698-5e7dcaa3444f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80"
  ];

  const imgLoadError = event => {
    event.target.src = images[Math.floor(Math.random() * images.length)];
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        action={
          <DateTime
            user={props.user}
            restaurant={props.single}
            addBooking={props.addBooking}
            loggedIn={props.loggedIn}
            setUserBookings={props.setUserBookings}
            fetchRestaurantsFromServer={props.fetchRestaurantsFromServer}
          />
        }
        title={props.single.name}
      />

      <CardMedia className={classes.media}>
        <Dashboard
          show={this}
          single={props.single}
          user={props.user}
          key={props.single.id}
          imgLoadError={imgLoadError}
        />
      </CardMedia>

      <CardContent>
        <Typography variant="subtitle1" color="textSecondary">
          <strong>{props.single.cuisines}</strong>
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {props.single.location.locality}
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
      </CardActions>
    </Card>
  );
}
