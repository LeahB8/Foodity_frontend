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
import ProgressBar from "../components/ProgressBar";

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
    <React.Fragment className="content-area">
      <div className="welcome-card-container">
        <div className="welcome-card">
          <h1>
            <strong>Welcome to Foodity</strong>
          </h1>
          <p>Explore the world through food.</p>
          <p>Discover all of the hidden gems at home and abroad.</p>
        </div>
      </div>

      <ProgressBar percentage="0" />

      <div className="search-restaurants">
        <div>
          <SearchComponent
            {...props}
            changeCoordinatesState={props.changeCoordinatesState}
            coordinates={props.coordinates}
            populateListWithData={props.populateListWithData}
            populateListWithCollections={props.populateListWithCollections}
            selectedCityId={props.selectedCityId}
            assignSelectedCityId={props.assignSelectedCityId}
            assignSelectedCityName={props.assignSelectedCityName}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
