import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import "dayschedule-widget/dist/dayschedule-popup.css";
import daySchedule from "dayschedule-widget/dist/dayschedule-widget.js"; // Adjust import path if necessary
import { Button } from "@mui/material";

export default class DayScheduleButton extends React.Component {
  componentDidMount() {
    // Perform any necessary initialization here
    // Example: daySchedule.init();
  }

  handleClick = () => {
    // Check if initPopupWidget function exists and is a function
    if (typeof daySchedule.initPopupWidget === "function") {
      daySchedule.initPopupWidget({
        url: "https://autorobos.dayschedule.com/business-meeting",
      });
    } else {
      console.error("initPopupWidget function is not available");
    }
  };

  render() {
    return (
      <Button
        onClick={this.handleClick}
        variant="outlined"
        color="primary"
        sx={{
          "&:hover": {
            backgroundColor: "#913BFF",
            color: "white",
            border: "none",
          },
        }}
      >
        <FontAwesomeIcon icon={faCalendar} className="mr-2" />
        Book an Appointment
      </Button>
    );
  }
}
