import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import Icon from "@material-ui/core/Icon";
import DateTime from "./DateTime";
import Tooltip from "@material-ui/core/Tooltip";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import Dashboard from "./Dashboard";
import { fetchUserInfo } from "../services/api";
import moment from "moment";
import swal from "sweetalert";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles(theme => ({
  card: {
    width: 300,
    marginBottom: 20
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

export default function BookingCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  const handleDelete = id => {
    let my_saved_restaurant = props.savedRestaurants.find(
      restaurant => restaurant.restaurant_api_id === id
    );
    swal({
      title: "Are you sure you want to cancel your booking?",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(willDelete => {
      // debugger;
      if (willDelete) {
        props.deleteCallback(props.user.id, my_saved_restaurant.id);
        swal("Your booking has been cancelled.", {
          icon: "success",
          timer: 1500
        }).then(() => {
          props.secondCallback(props.user);
        });
      } else {
        swal("Your booking is still valid.", {
          timer: 1500
        });
      }
    });

    // return displayDateAndTime()
  };

  // componentDidUpdate(prevProps) {
  //   if (prevProps.bookingTimes !== props.bookingTimes) {
  //     return displayDateAndTime()
  //   }
  // }

  const displayDateAndTime = () => {
    let booking_time = props.bookingTimes.find(
      bookingTime => bookingTime.restaurant_id === props.booking.id
    );
    // debugger;
    let date = moment(booking_time.date).format("dddd Do MMM YYYY");
    // let time = booking_time.time =< '12:00' ? (
    //   return `booking_time.time` + `PM`) :
    //   booking_time.time =< '13:00'
    return `${date} @ ${booking_time.time.substring(0, 5)}`;
  };

  function handleLikeFavourite(restaurant) {
    props
      .addFave(restaurant.R.res_id)
      // findIndividualRestaurantInfo(restaurant.R.res_id)
      .then(
        swal({
          title: "Restaurant added to favourites.",
          icon: "success",
          timer: 1500
        })
      );
  }

  function handleLikeWishlist(restaurant) {
    props
      .addWishlist(restaurant.R.res_id)
      // findIndividualRestaurantInfo(restaurant.R.res_id)
      .then(
        swal({
          title: "Restaurant added to wishlists.",
          icon: "success",
          timer: 1500
        })
      );
  }

  const images = [
    "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
    "https://images.unsplash.com/photo-1551218372-a8789b81b253?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1506812779316-934cef283429?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1483274816418-3975509c8f78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1483648969698-5e7dcaa3444f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80"
  ];

  function imgLoadError(event) {
    event.target.src = images[Math.floor(Math.random() * images.length)];
  }

  const renderRestaurantInfoModal = () => {
    return (
      <Dashboard
        single={props.single}
        user={props.user}
        key={props.single.id}
      />
    );
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        // action={
        //   <DateTime user={props.user} restaurant={props.single} addBooking={props.addBooking} loggedIn={props.loggedIn} />

        // }
        title={props.single.name}
        subheader={displayDateAndTime()}
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
          {props.single.cuisines}
        </Typography>
        <br />
        <Typography variant="h6" color="textSecondary">
          <strong>{props.single.location.city}</strong>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="Delete"
          onClick={() => handleDelete(parseInt(props.single.id))}
        >
          <Icon>delete</Icon>
        </IconButton>

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
