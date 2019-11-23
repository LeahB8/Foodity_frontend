import React from "react";
import SearchComponent from "../components/SearchComponent";

import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";

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
    <div className="content-area">
      <div className="welcome-card-container">
        <div className="welcome-card">
          <h1>
            <strong>Welcome to Foodity</strong>
          </h1>
          <h3>
            Where we are
            <br />
            passionate about food
          </h3>
          <div>
            <IconButton className="icons">
              <Icon>search</Icon>
            </IconButton>
            <IconButton className="icons">
              <Icon>location_on</Icon>
            </IconButton>
            <IconButton className="icons">
              <Icon>restaurant</Icon>
            </IconButton>
          </div>
          <br />
          <div className="welcome-paragraph">
            <p>
              Explore the world through food
              <br />
              <br />
              Discover all of the hidden gems at home and abroad
            </p>
          </div>
        </div>
      </div>
      <br />
      <div>
        <h2>Select a city to discover restaurants</h2>
      </div>
      {/* <ProgressBar percentage="0" /> */}

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
    </div>
  );
}
