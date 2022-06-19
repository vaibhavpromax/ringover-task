import React, { useContext } from "react";
import "./Center.scss";

import recordVoiceOver from "../../assets/recordVoiceOver.png";
import note from "../../assets/note.png";
import close from "../../assets/close.png";
import copyBoard from "../../assets/copyPad.png";

import tabContext from "../tab-context";

const Center = () => {
  const tabInfo = useContext(tabContext);

  const onClickHandler = (e) => {
    tabInfo.setCurrentTab(e.target.innerText);
  };
  const onCloseHandler = (currentTab) => {
    // const remainingTabs = tabInfo.tabs.filter(
    //   (tab) => tab !== tabInfo.currentTab
    //   );
    const remainingTabs = tabInfo.tabs.splice(currentTab, 1);
    console.log(currentTab);
    console.log(remainingTabs);
    tabInfo.setTabs(remainingTabs);
    // tabInfo.setCurrentTab(remainingTabs[-1]);
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
            <div className="tab" onClick={onClickHandler} key={index}>
              {tab}
              <img onClick={() => onCloseHandler(index)} src={close} alt="" />
            </div>
          );
        })}
      </div>
      {tabInfo.tabs.length === 0 ? (
        <div className="workspace">
          <img src={copyBoard} alt="" />
          <h2>Your Workspace is empty</h2>
          <p>To add a tab click on any option on your bottom left</p>
        </div>
      ) : (
        <div className="selected-activity">{tabInfo.currentTab} Activity</div>
      )}
    </div>
  );
};

export default Center;
