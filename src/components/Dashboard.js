import React, { Component } from "react";
import ReactDOM from "react-dom";
import Dialog from "@material-ui/core/Dialog";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import StarRatings from "react-star-ratings";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { CardMedia } from "@material-ui/core";

class Dashboard extends Component {
  state = { show: false };
  handleClick = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    const { single } = this.props;
    // // debugger;
    return (
      <main>
        <Dialog
          open={this.state.show}
          onClose={() => {
            this.setState({ show: false });
          }}
        >
          <CardContent>
            <Typography variant="h6">
              <strong>Establishment</strong> <br />
            </Typography>
            <Typography align="left" object="p">
              {single.establishment}
            </Typography>
            <br />
            <Typography variant="h6">
              <strong>Average cost for two</strong> <br />
            </Typography>
            <Typography align="left" object="p">
              {single.currency}
              {single.average_cost_for_two}
            </Typography>
            <br />
            <Typography variant="h6">
              <strong>Address</strong> <br />
            </Typography>
            <Typography align="left" object="p">
              {single.location.address}
            </Typography>
            <br />
            <Typography variant="h6">
              <strong>Phone Number</strong> <br />
            </Typography>
            <Typography align="left" object="p">
              {single.phone_numbers}
            </Typography>
            <br />
            <Typography variant="h6">
              <strong>Timings</strong> <br />
            </Typography>
            <Typography align="left" object="p">
              {single.timings}
            </Typography>
            <br />

            {/* <Typography align="left" object="p">
              <Link target="_blank" href={single.menu_url}>
                Menu
              </Link>
            </Typography>

            <br /> */}
            {/* <Typography variant="h6">
              <strong>Photos</strong> <br />
            </Typography>
            {single.photos.map(single => (
              // <CardMedia image={single.photo.url} height="50px" width="50px" />
              <img
                className="restaurant-images"
                src={single.photo.url}
                alt="food"
              />
            ))}
            <br />
            <br /> */}

            <Typography variant="h6">
              <strong>Highlights</strong> <br />
            </Typography>
            {single.highlights.map(highlight => (
              <Typography align="left" object="p">
                {highlight}
              </Typography>
            ))}

            <br />
            <Typography variant="h6">
              <strong>Average Rating</strong> <br />
            </Typography>
            <StarRatings
              rating={parseFloat(single.user_rating.aggregate_rating)}
              starDimension="30px"
              starSpacing="5px"
              starRatedColor="gold"
            />
            <br />
            <Typography variant="h6">
              {single.user_rating.votes} reviews
            </Typography>
            <br />
            <Typography variant="h6">
              Rating: {single.user_rating.rating_text}
            </Typography>
            <br />
            <br />
            <br />

            <Typography variant="h4">Reviews</Typography>
            {single.all_reviews.reviews.map(review => (
              <>
                <StarRatings
                  rating={review.review.rating}
                  starDimension="30px"
                  starSpacing="5px"
                  starRatedColor="gold"
                />
                <Typography align="left" object="p">
                  {review.review.review_text}
                </Typography>
                <Typography align="left" object="p">
                  <strong>By {review.review.user.name}</strong>
                </Typography>
                <Typography align="left" object="p">
                  <strong>{review.review.review_time_friendly}</strong>
                </Typography>
                <br />
              </>
            ))}
          </CardContent>
        </Dialog>
        {/* <Button type="button" onClick={this.handleClick}>
          More Details
        </Button> */}
        <Tooltip title="More Info">
          <IconButton
            className="info-button"
            aria-label="more info"
            onClick={this.handleClick}
            // onClick={() => showModal(props.single)}
          >
            <Icon>info</Icon>
          </IconButton>
        </Tooltip>
      </main>
    );
  }
}

const container = document.createElement("div");
document.body.appendChild(container);
// ReactDOM.render(<Dashboard />, container);

export default Dashboard;
