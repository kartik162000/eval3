/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./EventCard.css";

function EventCard(props) {
  const {
    imgUrl,
    description,
    name,
    venue,
    datetime,
    isBookmarked,
    isRegistered,
  } = props;
  const [bookMark, setBookMark] = useState(isBookmarked);
  const handleClick = () => {
    setBookMark(!isBookmarked);
  };
  return (
    <div className="cardBody">
      <div className="eventImage">
        <img src={imgUrl} alt="event" />
      </div>
      <div className="cardContent">
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
          {isRegistered ? <div>Registered</div> : null}
          <div className="bookMark">
            <i
              className={bookMark ? "fas fa-bookmark" : "far fa-bookmark"}
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
