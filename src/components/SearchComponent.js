import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import {
  fetchRestaurantsByCity,
  fetchCollectionsForCity
} from "../services/api";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

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
    padding: 20,
    margin: 20,
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

const cities = [
  {
    name: "London",
    country: "United Kingdom",
    country_id: 215,
    id: 61,
    image_url:
      "https://images.unsplash.com/photo-1508711046474-2f4c2d3d30ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
  },
  {
    name: "Birmingham",
    country: "United Kingdom",
    country_id: 215,
    id: 69,
    image_url:
      "https://images.unsplash.com/photo-1548860258-be5cfff4f165?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1388&q=80"
  },
  {
    name: "Liverpool",
    country: "United Kingdom",
    country_id: 215,
    id: 323,
    image_url:
      "https://images.unsplash.com/photo-1559930198-26e8d7f0a4f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
  },
  {
    name: "Glasgow",
    country: "United Kingdom",
    country_id: 215,
    id: 77,
    image_url:
      "https://images.unsplash.com/photo-1531152369337-1d0b0b9ef20d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
  },
  {
    name: "Manchester",
    country: "United Kingdom",
    country_id: 215,
    id: 68,
    image_url:
      "https://images.unsplash.com/photo-1543772204-2cc21eb14509?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
  },
  {
    name: "Rome",
    country: "Italy",
    country_id: 99,
    id: 257,
    image_url:
      "https://images.unsplash.com/photo-1503970999490-4404449dc349?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMzk2fQ&auto=format&fit=crop&w=1269&q=80"
  },
  {
    name: "Milan",
    country: "Italy",
    country_id: 99,
    id: 258,
    image_url:
      "https://images.unsplash.com/photo-1520440229-6469a149ac59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
  },
  {
    name: "Istanbul",
    country: "Turkey",
    country_id: 208,
    id: 59,
    image_url:
      "https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=643&q=80"
  },
  {
    name: "Sydney",
    country: "Australia",
    country_id: 14,
    id: 260,
    image_url:
      "https://images.unsplash.com/photo-1524293581917-878a6d017c71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
  },
  {
    name: "Melbourne",
    country: "Australia",
    country_id: 14,
    id: 259,
    image_url:
      "https://images.unsplash.com/photo-1514395462725-fb4566210144?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
  },
  {
    name: "Toronto",
    country: "Canada",
    country_id: 37,
    id: 89,
    image_url:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
  },
  {
    name: "Vancouver",
    country: "Canada",
    country_id: 37,
    id: 256,
    image_url:
      "https://images.unsplash.com/photo-1518924045336-0064ec356dca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1346&q=80"
  },
  {
    name: "Montreal",
    country: "Canada",
    country_id: 37,
    id: 294,
    image_url:
      "https://images.unsplash.com/photo-1532299039866-065669a2d5df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1441&q=80"
  },
  {
    name: "New York City",
    country: "United States",
    country_id: 216,
    id: 280,
    image_url:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
  },
  {
    name: "Los Angeles",
    country: "United States",
    country_id: 216,
    id: 281,
    image_url:
      "https://images.unsplash.com/photo-1503891450247-ee5f8ec46dc3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
  },
  {
    name: "New Orleans",
    country: "United States",
    country_id: 216,
    id: 290,
    image_url:
      "https://images.unsplash.com/photo-1544078042-81e5cc35e72a?ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80"
  },
  {
    name: "Chicago",
    country: "United States",
    country_id: 216,
    id: 292,
    image_url:
      "https://images.unsplash.com/photo-1524168272322-bf73616d9cb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
  },
  {
    name: "San Francisco",
    country: "United States",
    country_id: 216,
    id: 306,
    image_url:
      "https://images.unsplash.com/photo-1527905876394-1e5115891cba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
  },
  {
    name: "Miami",
    country: "United States",
    country_id: 216,
    id: 260,
    image_url:
      "https://images.unsplash.com/photo-1506079478915-3f458c5077a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
  },
  {
    name: "Philadelphia",
    country: "United States",
    country_id: 216,
    id: 287,
    image_url:
      "https://images.unsplash.com/photo-1516508636691-2ea98becb2f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
  }
];

export default function SearchComponent(props) {
  const classes = useStyles();

  const handleClick = id => {
    // fetchRestaurantsByCity(id).then(data => {
    //   props
    //     .populateListWithData(data)
    //     .then(() => props.history.push("/restaurants"));
    // });
    props.history.push("/search");
  };

  return (
    <div className={classes.root}>
      <GridList cellHeight={200} spacing={10} className={classes.gridList}>
        {cities.map(tile => (
          <GridListTile
            // cols={4}
            key={tile.image_url}
            onClick={() => handleClick(tile.id)}
          >
            <img src={tile.image_url} alt={tile.name} />
            <GridListTileBar
              title={tile.name}
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
