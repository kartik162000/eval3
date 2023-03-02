/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-lone-blocks */
/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import "./FullEventDetails.css";
import { UPDATE_EVENT_DATA } from "../../constants/apiEndPoints";
import makeRequest from "../../utils/makeRequest";
import { updateEventData, returnThemeColor } from "../../utils/common";
import { AllEventDataContext } from "../../context/EventDetails";
import { ThemeContext } from "../../context/Themes";

function FullEventDetails(props) {
  const { themeData, setAllThemeData } = useContext(ThemeContext);
  const { allEventData, setAllEventData } =
    React.useContext(AllEventDataContext);
  const handleBookMark = async () => {
    const newBookMark = !props.data.isBookmarked;
    const newEvent = {
      ...props.data,
      isBookmarked: newBookMark,
    };
    try {
      await makeRequest(UPDATE_EVENT_DATA(props.data.id), {
        data: { isBookmarked: newBookMark },
      });
      updateEventData({ newEvent, allEventData, setAllEventData });
    } catch (e) {
      // To do erroe handling
    }
    props.setDatas(newEvent);
  };

  const handleRegister = async () => {
    const newRegister = !props.data.isRegistered;
    const newEvent = {
      ...props.data,
      isRegistered: newRegister,
    };
    try {
      await makeRequest(UPDATE_EVENT_DATA(props.data.id), {
        data: { isRegistered: newRegister },
      });
      updateEventData({ newEvent, allEventData, setAllEventData });
    } catch (e) {
      // To do erroe handling
    }
    props.setDatas(newEvent);
  };

  const renderIcon = () => {
    if (props.data.isRegistered)
      return <i className="fas fa-check-circle"> Registered </i>;
    if (!props.data.areSeatsAvailable)
      return <i className="fas fa-times-circle"> Seats Not Available </i>;
    return null;
  };
  const renderRegisterButton = () => {
    if (props.data.areSeatsAvailable) {
      return (
        <div className="btn-register">
          <button type="button" className="" onClick={handleRegister}>
            {props.data.isRegistered ? "Unregister" : "Register"}
          </button>
        </div>
      );
    }
    return null;
  };
  return (
    <div className="fullEventDetailsContainer">
      <div className="cardBodyFull">
        <div className="eventImage">
          <img src={props.data.imgUrl} alt="event" />
        </div>
        <div
          className="cardContentfull"
          style={{ backgroundColor: returnThemeColor(themeData) }}
        >
          <div className="eventHeadingfull">
            <p>{props.data.name}</p>
          </div>
          <div className="eventDescriptionfull">{props.data.description}</div>
          <div className="eventVenuefull">
            <span className="boldClass">VENUE: </span>
            {props.data.venue}
          </div>
          <div className="eventDatefull">
            <span className="boldClass"> DATE: </span>
            {props.data.datetime}
          </div>
          <div className="eventIcons">
            {renderIcon()}
            <div className="bookMark">
              <i
                className={
                  props.data.isBookmarked
                    ? "fas fa-bookmark"
                    : "far fa-bookmark"
                }
                onClick={handleBookMark}
              />
            </div>
          </div>
          {renderRegisterButton()}
        </div>
      </div>
    </div>
  );
}

export default FullEventDetails;
