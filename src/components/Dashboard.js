import React, { Component } from "react";
import ReactDOM from "react-dom";
import Dialog from "@material-ui/core/Dialog";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import StarRatings from "react-star-ratings";
import Button from "@material-ui/core/Button";

class Dashboard extends Component {
  state = { show: false };
  handleClick = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    const { single } = this.props;
    return (
      <main>
        <br />

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
              {single.restaurant.establishment}
            </Typography>
            <br />
            <Typography variant="h6">
              <strong>Average cost for two</strong> <br />
            </Typography>
            <Typography align="left" object="p">
              {single.restaurant.currency}
              {single.restaurant.average_cost_for_two}
            </Typography>
            <br />
            <Typography variant="h6">
              <strong>Address</strong> <br />
            </Typography>
            <Typography align="left" object="p">
              {single.restaurant.location.address}
            </Typography>
            <br />
            <Typography variant="h6">
              <strong>Phone Number</strong> <br />
            </Typography>
            <Typography align="left" object="p">
              {single.restaurant.phone_numbers}
            </Typography>
            <br />
            <Typography variant="h6">
              <strong>Timings</strong> <br />
            </Typography>
            <Typography align="left" object="p">
              {single.restaurant.timings}
            </Typography>
            <br />
            <Typography variant="h6">
              <strong>Highlights</strong> <br />
            </Typography>
            {single.restaurant.highlights.map(highlight => <Typography align="left" object="p">
              {highlight}
            </Typography>
            )}

            <br />
            <Typography variant="h6">
              <strong>Average Rating</strong> <br />
            </Typography>
            <StarRatings
              rating={parseInt(single.restaurant.user_rating.aggregate_rating)}
              starDimension="30px"
              starSpacing="5px"
              starRatedColor="gold"
            />
            <br />
            <Typography variant="h6">
              {single.restaurant.user_rating.votes} reviews
            </Typography>
            <br />
            <Typography variant="h6">
              Rating: {single.restaurant.user_rating.rating_text}
            </Typography>
            <br />
            <br />
            <br />

            <Typography variant="h4">Reviews</Typography>
            {single.restaurant.all_reviews.reviews.map(review => (
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
        <Button type="button" onClick={this.handleClick}>
          More Details
        </Button>
      </main>
    );
  }
}

const container = document.createElement("div");
document.body.appendChild(container);
// ReactDOM.render(<Dashboard />, container);

export default Dashboard;
