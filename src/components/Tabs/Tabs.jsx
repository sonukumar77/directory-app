import "./Tabs.css";
const Tabs = ({ tabs, changeTab, currentTab }) => {
  return (
    <div className="tab-container">
      <button
        className={`btn ${currentTab === tabs.add ? "active" : ""}`}
        onClick={() => changeTab(tabs.add)}
      >
        Add
      </button>
      <button
        className={`btn ${currentTab === tabs.retrieve ? "active" : ""}`}
        onClick={() => changeTab(tabs.retrieve)}
      >
        Retrieve
      </button>
    </div>
  );
};

export default Tabs;
