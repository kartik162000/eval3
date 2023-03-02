/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import "./EventCard.css";
import { useNavigate } from "react-router-dom";
import makeRequest from "../../utils/makeRequest";
import { UPDATE_EVENT_DATA } from "../../constants/apiEndPoints";
import { AllEventDataContext } from "../../context/EventDetails";
import { updateEventData, returnThemeColor } from "../../utils/common";
import { ThemeContext } from "../../context/Themes";

function EventCard(props) {
  const { themeData, setAllThemeData } = useContext(ThemeContext);
  const navigate = useNavigate();
  const {
    id,
    imgUrl,
    description,
    name,
    venue,
    datetime,
    isBookmarked,
    isRegistered,
    areSeatsAvailable,
  } = props;
  const { allEventData, setAllEventData } = useContext(AllEventDataContext);

  const renderIcon = () => {
    if (isRegistered)
      return <i className="fas fa-check-circle"> Registered </i>;
    if (!areSeatsAvailable)
      return <i className="fas fa-times-circle"> Seats Not Available </i>;
    return null;
  };

  const handleBookMark = async () => {
    if (allEventData) {
      try {
        await makeRequest(UPDATE_EVENT_DATA(id), {
          data: { isBookmarked: !isBookmarked },
        });
        updateEventData(
          {
            ...props,
            isBookmarked: !isBookmarked,
          },
          allEventData,
          setAllEventData
        );
      } catch (e) {
        // TODO: Handle error
      }
    }
  };

  return (
    <div className="cardBody">
      <div className="eventImage" onClick={() => navigate(`/event/${id}`)}>
        <img src={imgUrl} alt="event" />
      </div>
      <div
        className="cardContent"
        style={{ backgroundColor: returnThemeColor(themeData) }}
      >
        <div className="eventHeading">
          <p>{name}</p>
        </div>
        <div className="eventDescription">{description}</div>
        <div className="eventVenue">
          <span className="boldClass">VENUE: </span>
          {venue}
        </div>
        <div className="eventDate">
          <span className="boldClass"> DATE: </span>
          {datetime}
        </div>
        <div className="eventIcons">
          {renderIcon()}
          <div className="bookMark">
            <i
              className={isBookmarked ? "fas fa-bookmark" : "far fa-bookmark"}
              onClick={handleBookMark}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
