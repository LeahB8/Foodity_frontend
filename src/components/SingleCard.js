import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import DateTime from "./DateTime";
import Dashboard from "./Dashboard";
import swal from "sweetalert";

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

export default function SingleCard(props) {
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
      title: "Are you sure you want to remove this restaurant?",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        props.deleteCallback(props.user.id, my_saved_restaurant.id);
        swal("The restaurant has been removed.", {
          icon: "success",
          timer: 1500
        }).then(() => {
          props.secondCallback(props.user);
        });
      } else {
        swal("The restaurant has not been removed.", {
          timer: 1500
        });
      }
    });
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
      </CardActions>
    </Card>
  );
}
