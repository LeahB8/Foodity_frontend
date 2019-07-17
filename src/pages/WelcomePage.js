import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import LocationSearchComponent from "../components/LocationSearchComponent";
import MapBox from "../components/MapBox";
import SearchComponent from "../components/SearchComponent";
import RestaurantList from '../components/RestaurantList'


const useStyles = makeStyles({
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function WelcomePage(props) {
  const classes = useStyles();

  return (
      <div>
    {/* <div className="welcome-card">
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h3" component="h3" color="#fdb600">
            Welcome to Foodity
          </Typography>
          <Typography variant="h5" component="h5" color="#fdb600">
            Explore the world through food.
            <br />
            Discover all of the hidden gems at home and abroad.
          </Typography>
        </CardContent>
      </Card> */}
      {/* <MapBox
        changeCoordinatesState={props.changeCoordinatesState}
        coordinates={props.coordinates}
      /> */}
      <SearchComponent
        changeCoordinatesState={props.changeCoordinatesState}
        coordinates={props.coordinates}
        populateListWithData={props.populateListWithData}
      />
      <RestaurantList  restaurantData={props.restaurantData}/>
      {/* <LocationSearchComponent
        changeCoordinatesState={props.changeCoordinatesState}
        coordinates={props.coordinates}
      /> */}
    </div>
  );
}
