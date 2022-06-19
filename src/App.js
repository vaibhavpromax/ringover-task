import "./App.scss";
import Center from "./components/Center/Center";
import Left from "./components/Left/Left";
import Navbar from "./components/Navbar/Navbar";
import Right from "./components/Right/Right";
import tabContext from "../src/components/tab-context";
import { useCallback, useEffect, useState } from "react";

function App() {
  const [tabs, setTabs] = useState([]);
  const [currentTab, setCurrentTab] = useState("");
  const addTab = (tabToBeAdded) => {
    tabs.length < 4 && setTabs([...tabs, tabToBeAdded]);
    setCurrentTab(tabToBeAdded);
  };

  return (
    <tabContext.Provider
      value={{
        tabs: tabs,
        currentTab: currentTab,
        setCurrentTab: setCurrentTab,
        addTab: addTab,
        setTabs: setTabs,
      }}
    >
      <div className="App">
        <Navbar />
        <div className="wrapper">
          <Left />
          <Center />
          <Right />
        </div>
      </div>
    </tabContext.Provider>
  );
}

export default App;
