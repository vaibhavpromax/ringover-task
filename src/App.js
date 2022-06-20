import "./App.scss";
import Center from "./components/Center/Center";
import Left from "./components/Left/Left";
import Navbar from "./components/Navbar/Navbar";
import Right from "./components/Right/Right";
import tabContext from "../src/components/tab-context";
import { useCallback, useEffect, useState } from "react";

function App() {
  const [tabs, setTabs] = useState([]);
  const [showRight, setShowRight] = useState(true);
  const addTab = (tabToBeAdded) => {
    const tab = { title: tabToBeAdded, isOpen: true, isActive: true };
    const prevTabs = [...tabs];
    prevTabs.push(tab);
    for (let i = 0; i < prevTabs.length - 1; i++) {
      prevTabs[i].isActive = false;
    }

    prevTabs.length <= 4 && setTabs(prevTabs);
  };

  return (
    <tabContext.Provider
      value={{
        tabs: tabs,
        addTab: addTab,
        setTabs: setTabs,
      }}
    >
      <div className="App">
        <Navbar setShowRight={setShowRight} showRight={showRight} />
        <div className="wrapper">
          <Left />
          <Center />
          <Right showRight={showRight} setShowRight={setShowRight} />
        </div>
      </div>
    </tabContext.Provider>
  );
}

export default App;
