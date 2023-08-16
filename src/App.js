import { useState } from "react";
import Add from "./components/Add/Add";
import Header from "./components/Header/Header";
import Retrieve from "./components/Retrieve/Retrieve";
import Tabs from "./components/Tabs/Tabs";
import "./styles.css";

const tabs = {
  add: "Add",
  retrieve: "Retrieve"
};
export default function App() {
  const [currentTab, setCurrentTab] = useState(tabs.add);
  const changeTab = (t) => {
    setCurrentTab(t);
  };
  return (
    <div className="App">
      <Header />
      <Tabs tabs={tabs} changeTab={changeTab} currentTab={currentTab} />
      {currentTab === "Add" ? <Add /> : <Retrieve />}
    </div>
  );
}
