import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import {
  fetchCollectionsForCity,
  fetchCuisinesForCity,
  fetchEstablishmentsForCity,
  fetchCategories
} from "../services/api";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    // width: 800,
    // height: 850,
    padding: 30,
    margin: 40,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
    cursor: "pointer"
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  },
  icon: {
    color: "white"
  }
}));

export default function SearchComponent(props) {
  const classes = useStyles();

  const handleCollectionsClick = id => {
    fetchCollectionsForCity(id).then(data => {
      props
        .populateListWithSearchOptionData(data.collections)
        .then(() => props.history.push(`/options/${id}`));
    });
  };

  const handleCusinesClick = id => {
    fetchCuisinesForCity(id).then(data => {
      props
        .populateListWithSearchOptionData(data.cuisines)
        .then(() => props.history.push(`/options/${id}`));
    });
  };

  const handleEstablishmentsClick = id => {
    fetchEstablishmentsForCity(id).then(data => {
      props
        .populateListWithSearchOptionData(data.establishments)
        .then(() => props.history.push(`/options/${id}`));
    });
  };

  const handleCategoriesClick = id => {
    fetchCategories().then(data => {
      props
        .populateListWithSearchOptionData(data.categories)
        .then(() => props.history.push(`/options/${id}`));
    });
  };

  const searchOptions = [
    {
      name: "Cuisines",
      desc: "Choose from your favourite cuisines",
      image_url:
        "https://images.unsplash.com/photo-1542528180-0c79567c66de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1339&q=80"
    },
    {
      name: "Collections",
      desc: "Browse Foodity's carefully curated collections",
      image_url:
        "https://images.unsplash.com/photo-1549332409-c2580d165674?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    },
    {
      name: "Establishments",
      desc: "Select your favourite type of establishment",
      image_url:
        "https://images.unsplash.com/photo-1546983620-53cb1c496917?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
    },
    {
      name: "Categories",
      desc: "Choose a specific meal, or maybe a delivery",
      image_url:
        "https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
    }
  ];

  const handleClick = tile => {
    switch (tile.name) {
      case "Cuisines":
        handleCusinesClick(props.selectedCityId);
        break;
      case "Collections":
        handleCollectionsClick(props.selectedCityId);
        break;
      case "Establishments":
        handleEstablishmentsClick(props.selectedCityId);
        break;
      case "Categories":
        handleCategoriesClick(props.selectedCityId);
        break;
      default:
      // code block
    }
  };

  return (
    <div className={classes.root}>
      <GridList cellHeight={400} spacing={20} className={classes.gridList}>
        {searchOptions.map(tile => (
          <GridListTile key={tile.image_url} onClick={() => handleClick(tile)}>
            <img src={tile.image_url} alt={tile.name} />
            <GridListTileBar
              title={tile.name}
              subtitle={tile.desc}
              titlePosition="top"
              actionPosition="left"
              className={classes.titleBar}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
