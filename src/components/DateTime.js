import React from "react";
import DatePicker from "react-datepicker";
import Tooltip from "@material-ui/core/Tooltip";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";


import "react-datepicker/dist/react-datepicker.css";

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
      startDate: date,
    });
  }

  handleClick = () => {
    this.setState({ show: !this.state.show });
  };

  handleSubmitBooking = () => {
    let booking = {
      user_id: this.props.user.id,
      restaurant_id: this.props.restaurant.id,
      date: this.state.startDate,
    }
    if (this.props.loggedIn) {
      this.props.addBooking(booking)
    } else {
      alert("Please sign in.")
    }
  }


  render() {
    return (
      <>
        <Tooltip title="Book">
          <IconButton
            aria-label="Settings"
            onClick={this.handleClick}
          >
            <MoreVertIcon />
          </IconButton>
        </Tooltip>

        <DatePicker
          // open={this.state.show}
          // onClose={() => {
          //   this.setState({ show: false });
          // }}
          selected={this.state.startDate}
          onChange={this.handleChange}
          minDate={new Date()}

          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={30}
          dateFormat="MMMM d, yyyy h:mm aa"
          timeCaption="Time"
          withPortal

        />
        <Button onClick={this.handleSubmitBooking} >Book</Button>

      </>
    );
  }
}
