import React, { useContext } from "react";
import "./Center.scss";

import recordVoiceOver from "../../assets/recordVoiceOver.png";
import note from "../../assets/note.png";
import close from "../../assets/close.png";
import copyBoard from "../../assets/copyPad.png";

import tabContext from "../tab-context";

const Center = () => {
  const tabInfo = useContext(tabContext);

  const onClickHandler = (tab, index) => {
    tabInfo.tabs[index].isActive = true;
    for (let i = 0; i < tabInfo.tabs.length; i++) {
      if (i !== index) {
        tabInfo.tabs[i].isActive = false;
      }
    }
    tabInfo.setTabs(tabInfo.tabs);
  };

  const onCloseHandler = (tab, index) => {
    const prevTabs = [...tabInfo.tabs];
    const newTabs = prevTabs.splice(index, 1);
    tabInfo.setTabs(prevTabs);
    // console.log(tabInfo.tabs);
  };

  return (
    <div className="center">
      <div className="top-row">
        Workspace
        <div className="icons">
          <img src={recordVoiceOver} alt="" />
          <img src={note} alt="" />
        </div>
      </div>
      <div className="tabs">
        {tabInfo.tabs.map((tab, index) => {
          return (
            <div
              className={`tab ${tab.isActive ? "active" : ""}`}
              onClick={onClickHandler(tab, index)}
              key={index}
            >
              {tab.isOpen && tab.title}
              <img
                onClick={() => onCloseHandler(tab, index)}
                src={close}
                alt=""
              />
            </div>
          );
        })}
      </div>
      {tabInfo.tabs.length === 0 ? (
        <div className="workspace">
          8
          <img src={copyBoard} alt="" />
          <h2>Your Workspace is empty</h2>
          <p>To add a tab click on any option on your bottom left</p>
        </div>
      ) : (
        <div className="selected-activity">
          {tabInfo.tabs.map((tab) => {
            return tab.isActive && tab.title;
          })}
          {"  "}Activity
        </div>
      )}
    </div>
  );
};

export default Center;
