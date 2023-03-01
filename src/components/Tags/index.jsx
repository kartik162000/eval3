import React from "react";
import "./Tags.css";

function Tags() {
  return (
    <div className="tagsContainer">
      <div className="filtersandSearch">
        <div className="filters">
          <div className="filterRow">
            <i className="fas fa-filter" /> Filter
          </div>
          <div className="allRow">
            <i className="fas fa-circle" /> ALL
          </div>
          <div className>
            <i className="fas fa-circle" /> Registered
          </div>
        </div>
        <div className="search">
          <input type="text" placeholder="Search" />
          <i className="fas fa-search" />
        </div>
      </div>
    </div>
  );
}

export default Tags;
