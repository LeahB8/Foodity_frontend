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
  function handleLike(id) {
    let favourite = {
      user_id: props.user.id,
      restaurant_id: id
    };
    props
      .addRestaurantToFavourites(favourite)
      // .then(alert("Restaurant Favourited"));
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        action={
          <IconButton aria-label="Settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.single.restaurant.name}
      />
      <CardMedia className={classes.media}>
        <img
          className="restaurant-image"
          src={props.single.restaurant.featured_image}
          alt="restaurant"
        />
      </CardMedia>
      <CardContent>
        <Typography variant="subtitle1" color="textSecondary">
          {props.single.restaurant.cuisines}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          name="favourite"
          aria-label="Add to favorites"
          onClick={() => handleLike(parseInt(props.single.restaurant.id))}
        >
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Wishlist">
          <Icon>star</Icon>
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Dashboard single={props.single} />
        <br />
      </Collapse>
    </Card>
  );
}
