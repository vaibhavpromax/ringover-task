import React from "react";

import "./Right.scss";

//assets
import upload from "../../assets/upload.png";
import pause from "../../assets/pause.png";
import stop from "../../assets/stop.png";
import { useState } from "react";

const Right = () => {
  const [activity, setActivity] = useState("Activity");

  return (
    <div className="right">
      <div className="icons-row">
        <div className="sales-button">
          <img src={upload} alt="" />
          Salesforce
        </div>
        <div className="control-buttons">
          <img src={pause} alt="" />
          <img src={stop} alt="" />
        </div>
      </div>
      <hr />
      <div className="button-wrapper">
        <div className="button-row">
          <button
            className={activity === "Activity" ? "clicked" : ""}
            onClick={() => setActivity("Activity")}
          >
            Activity{" "}
          </button>
          <button
            className={activity === "Task" ? "clicked" : ""}
            onClick={() => setActivity("Task")}
          >
            Task
          </button>
          <button
            className={activity === "Progress" ? "clicked" : ""}
            onClick={() => setActivity("Progress")}
          >
            Progress
          </button>
        </div>
      </div>
      <div className="button-card">{activity} Card</div>
    </div>
  );
};

export default Right;
