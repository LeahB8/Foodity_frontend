import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import StarRatings from "react-star-ratings";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import { Button, Modal } from "react-bootstrap";

class Dashboard extends Component {
  state = {
    show: false,
    showImageModal: false,
    imageObj: null
  };

  handleClick = () => {
    this.setState({ show: !this.state.show });
  };

  handleCloseImageModal = () =>
    this.setState({ showImageModal: false, imageObj: null });

  handleShowImageModal = image => {
    this.setState({ showImageModal: true, imageObj: image });
  };

  getReviewSection = () => {
    const { single } = this.props;

    if (
      single.all_reviews &&
      single.all_reviews.reviews &&
      single.all_reviews.reviews !== [] &&
      single.all_reviews.reviews[0] &&
      single.all_reviews.reviews[0].review &&
      single.all_reviews.reviews[0].review !== [] &&
      single.all_reviews.reviews[0].review.rating
    ) {
      let reviewArray = single.all_reviews.reviews.map(singleReview => {
        return (
          <>
            <StarRatings
              rating={singleReview.review.rating}
              starDimension="30px"
              starSpacing="5px"
              starRatedColor="gold"
            />
            <Typography align="left" object="p">
              {singleReview.review.review_text}
            </Typography>
            <Typography align="left" object="p">
              <strong>{singleReview.review.review_time_friendly}</strong>
            </Typography>
            <br />
          </>
        );
      });
      return (
        <>
          <Typography variant="h4">Reviews</Typography>
          {reviewArray}
        </>
      );
    } else {
      return null;
    }
  };

  getImageModal = () => {
    const { showImageModal, imageObj } = this.state;
    if (imageObj) {
      return (
        <main>
          <Dialog
            open={showImageModal}
            onClose={() => {
              this.setState({ showImageModal: false });
            }}
          >
            <CardContent>
              <img
                className="restaurant-image-modal"
                src={imageObj.photo.url}
                alt="food"
              />
              {imageObj.photo.caption && imageObj.photo.caption !== "" ? (
                <Typography variant="h6">{imageObj.photo.caption}</Typography>
              ) : null}
            </CardContent>
          </Dialog>
        </main>
      );
    } else {
      return null;
    }
  };

  render() {
    const { single } = this.props;
    return (
      <main>
        <Dialog
          open={this.state.show}
          onClose={() => {
            this.setState({ show: false });
          }}
          maxWidth={"md"}
        >
          <CardContent>
            <Typography variant="h4">
              <strong>{single.name}</strong> <br />
            </Typography>
            <br />
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
            {single.menu_url ? (
              <React.Fragment>
                <Typography align="left" object="p">
                  <a target="_blank" href={single.menu_url}>
                    Menu
                  </a>
                </Typography>

                <br />
              </React.Fragment>
            ) : null}
            {single.photos ? (
              <React.Fragment>
                <Typography variant="h6">
                  <strong>Photos</strong> <br />
                </Typography>
                {single.photos.map(single => (
                  <img
                    className="restaurant-images"
                    src={single.photo.thumb_url}
                    alt="food"
                    onClick={() => this.handleShowImageModal(single)}
                  />
                ))}
                <br />
                <br />
              </React.Fragment>
            ) : null}
            {this.getImageModal()}
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
            {this.getReviewSection()}
          </CardContent>
        </Dialog>

        <img
          className="restaurant-image"
          src={single.featured_image}
          onError={this.props.imgLoadError}
          alt="restaurant"
          onClick={this.handleClick}
        />
      </main>
    );
  }
}

const container = document.createElement("div");
document.body.appendChild(container);
// ReactDOM.render(<Dashboard />, container);

export default Dashboard;

{
  /* <Tooltip title="More Info">
          <IconButton
            className="info-button"
            aria-label="more info"
            onClick={this.handleClick}
          >
            <Icon>info</Icon>
          </IconButton>
        </Tooltip>
      </main> */
}
