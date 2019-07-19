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

export default function FavouriteCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

//   function handleExpandClick() {
//     setExpanded(!expanded);
//   }

  return (
      <Card className={classes.card}>
        <CardHeader
        //   action={
        //     <IconButton aria-label="Settings">
        //       <MoreVertIcon />
        //     </IconButton>
        //   }
          title={props.favourite.name}
        />
        <CardMedia className={classes.media}>
          <img
            className="restaurant-image"
            src={props.favourite.featured_image}
            alt="restaurant"
          />
        </CardMedia>
        <CardContent>
          <Typography variant="subtitle1" color="textSecondary">
            {props.favourite.cuisines}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            name="favourite"
            aria-label="Add to favorites"
            // onClick={() => handleLike(props.favourite)}
          >
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Wishlist">
            <Icon>star</Icon>
          </IconButton>
        </CardActions>
      </Card>
  );
}
