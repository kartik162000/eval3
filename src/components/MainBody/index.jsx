import React from "react";
import EventCard from "../EventCard";
import Tags from "../Tags";
import { AllEventDataContext } from "../../context/EventDetails";
import { GET_ALL_EVENT_DATA } from "../../constants/apiEndPoints";
import makeRequest from "../../utils/makeRequest";

import "./MainBody.css";

function MainBody() {
  const { allEventData, setAllEventData } =
    React.useContext(AllEventDataContext);
  React.useEffect(() => {
    makeRequest(GET_ALL_EVENT_DATA, {}).then((response) => {
      response.sort((a, b) => {
        if (a.datetime < b.datetime) {
          return -1;
        }
        if (a.datetime > b.datetime) {
          return 1;
        }
        return 0;
      });
      console.log(response);
      setAllEventData(response);
    });
  }, []);
  return (
    <div>
      <div className="outerContainer">
        <Tags />
        <div className="cardContainer">
          <div className="cardArea">
            {allEventData &&
              allEventData.map((event) => (
                <EventCard
                  key={event.id}
                  id={event.id}
                  name={event.name}
                  description={event.description}
                  venue={event.venue}
                  timezone={event.timezone}
                  datetime={event.datetime}
                  imgUrl={event.imgUrl}
                  isBookmarked={event.isBookmarked}
                  isRegistered={event.isRegistered}
                  areSeatsAvailable={event.areSeatsAvailable}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBody;
