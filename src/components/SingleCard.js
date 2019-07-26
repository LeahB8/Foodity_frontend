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
    // let wishlist_or_favourite = props.userInfo.find(
    //   wishOrFave => wishOrFave.restaurant_id === my_saved_restaurant.id
    // );
    props
      .deleteCallback(props.user.id, my_saved_restaurant.id)
      .then(() => props.secondCallback(props.user));
  };

  function imgLoadError(event) {
    event.target.src = "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
  }

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
      {/* <CardHeader title={props.single.name} /> */}
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
      </CardActions>
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Dashboard single={props.single} />
        <br />
      </Collapse> */}
    </Card>
  );
}
