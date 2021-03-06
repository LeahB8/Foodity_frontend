import "react-datepicker/dist/react-datepicker.css";
import React from "react";
import DatePicker from "react-datepicker";
import Tooltip from "@material-ui/core/Tooltip";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import swal from "sweetalert";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import { enGB } from "date-fns/esm/locale";
registerLocale("enGB", enGB);


export default class DateTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
    //
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }


  bookingFormat = dateTime => {
    let date = dateTime.slice(0, 15);
    let time = dateTime.slice(16, 21);
    return `${date} @ ${time}`;
  };

  handleSubmitBooking = () => {
    let booking = {
      user_id: this.props.user.id,
      restaurant_api_id: parseInt(this.props.restaurant.id),
      date: this.state.startDate
    };
    if (this.props.loggedIn) {
      swal({
        title: "Are you happy with your booking?",
        text: `${this.bookingFormat(this.state.startDate.toString())}`,
        buttons: { no: "No", yes: true }
      }).then(value => {
        switch (value) {
          case "yes":
            this.props
              .addBooking(booking)
              .then(
                swal({
                  title: "Booking has been made.",
                  icon: "success",
                  timer: 1500
                })
              )
              .then(() => this.props.fetchRestaurantsFromServer())
              .then(() => this.props.setUserBookings(this.props.user));

            this.setState({ show: false });
            break;

          case "no":
            swal("Feel free to choose another date or time.");
            break;

          default:
            swal("Feel free to choose another date or time.");
        }
      });
    } else {
      swal("Please sign in");
    }
  };

  render() {
    return (
      <>

        <IconButton aria-label="Book" onClick={this.handleSubmitBooking}>
          <Icon>today</Icon>
        </IconButton>
        <DatePicker
          locale="enGB"
          selected={this.state.startDate}
          onChange={this.handleChange}
          minDate={new Date()}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={30}
          dateFormat="MMMM d, yyyy h:mm aa"
          timeCaption="Time"
          button="Submit"
          withPortal
        />

      </>
    );
  }
}