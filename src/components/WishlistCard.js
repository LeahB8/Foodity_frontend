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

export default function WishlistCard(props) {
  const classes = useStyles();

  const handleDelete = id => {
    props
      .deleteWishlistFromServer(id)
      .then(() => props.setUserWishlists(props.user));
  };
  return (
    <Card className={classes.card}>
      <CardHeader title={props.wishlist.name} />
      <CardMedia className={classes.media}>
        <img
          className="restaurant-image"
          src={props.wishlist.featured_image}
          alt="restaurant"
        />
      </CardMedia>
      <CardContent>
        <Typography variant="subtitle1" color="textSecondary">
          {props.wishlist.cuisines}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="Delete"
          onClick={() => handleDelete(props.wishlist.id)}
        >
          <Icon>delete</Icon>
        </IconButton>
      </CardActions>
    </Card>
  );
}
