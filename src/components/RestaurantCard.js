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
import DateTime from './DateTime'

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

  function handleLike(restaurant) {
    if (props.loggedIn) {
      let restaurantToSave = {
        name: restaurant.name,
        address: restaurant.location.address,
        city: restaurant.location.city,
        city_id: restaurant.location.city_id,
        featured_image: restaurant.featured_image,
        latitude: restaurant.location.latitude,
        longitude: restaurant.location.longitude,
        country_id: restaurant.location.country_id,
        average_cost_for_two: restaurant.average_cost_for_two,
        currency: restaurant.currency,
        cuisines: restaurant.cuisines,
        aggregate_rating: restaurant.user_rating.aggregate_rating,
        all_reviews_count: restaurant.all_reviews_count,
        restaurant_id: restaurant.R.res_id
      };
      // props.savedRestaurants.filter(restaurant_id !== )
      props.saveRestaurantToServer(restaurantToSave)
        // .then(resp => resp.json())
        .then(data => props.addFave(data));
    } else {
      alert("Please sign in.");
    }
  }

  function handleLikeWishlist(restaurant) {
    if (props.loggedIn) {
      let restaurantToSave = {
        name: restaurant.name,
        address: restaurant.location.address,
        city: restaurant.location.city,
        city_id: restaurant.location.city_id,
        featured_image: restaurant.featured_image,
        latitude: restaurant.location.latitude,
        longitude: restaurant.location.longitude,
        country_id: restaurant.location.country_id,
        average_cost_for_two: restaurant.average_cost_for_two,
        currency: restaurant.currency,
        cuisines: restaurant.cuisines,
        aggregate_rating: restaurant.user_rating.aggregate_rating,
        all_reviews_count: restaurant.all_reviews_count,
        restaurant_id: restaurant.R.res_id
      };
      // props.savedRestaurants.filter(restaurant_id !== )
      props.saveRestaurantToServer(restaurantToSave)
        // .then(resp => resp.json())
        .then(data => props.addWishlist(data));
    } else {
      alert("Please sign in.");
    }
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
        <Tooltip title="Favourite">
          <IconButton
            name="favourite"
            aria-label="Add to favorites"
            onClick={() => handleLike(props.single.restaurant)}
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