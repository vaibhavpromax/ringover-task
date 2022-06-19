import React from "react";

const tabContext = React.createContext({
  tabs: [],
  currentTab: null,
  setCurrentTab: () => {},
  addTab: () => {},
});
export default tabContext;
