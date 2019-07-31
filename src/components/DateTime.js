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

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

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

  // handleClick = () => {
  //   this.setState({ show: !this.state.show });
  // };

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

  // display = {
  //   display: "none"
  // };

  render() {
    return (
      <>
        {/* <Tooltip title="Book">
          <IconButton aria-label="Settings" onClick={this.handleClick}>
            <MoreVertIcon />
          </IconButton>
        </Tooltip> */}

        {/* <Dialog
          open={this.state.show}
          onClose={() => {
            this.setState({ show: false });
          }}
        > */}

        <IconButton aria-label="Book" onClick={this.handleSubmitBooking}>
          <Icon>today</Icon>
        </IconButton>
        <DatePicker
          // style={this.display}
          // open={this.state.show}
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
          // <Button onClick={this.handleSubmitBooking}>Book</Button>
        />

        {/* </Dialog> */}
      </>
    );
  }
}

// handleChange (date) {
//   this.setState({startDate: date})
//   this.toggleCalendar()
// }

// toggleCalendar (e) {
//   e && e.preventDefault()
//   this.setState({isOpen: !this.state.isOpen})
// }

// <div>
//     <button
//         className="example-custom-input"
//         onClick={this.toggleCalendar}>
//         {format(this.state.startDate, "dd-MM-yyyy")}
//     </button>
//     {
//         this.state.isOpen && (
//             <DatePicker
//                 selected={this.state.startDate}
//                 onChange={this.handleChange}
//                 withPortal
//                 inline />
//         )
//     }
// </div>
