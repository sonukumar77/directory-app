import { useState } from "react";
import { getDataFromLS } from "../../utils/helper";
import NF from "./nf.gif";
import "./Retrieve.css";

const Retrieve = () => {
  const [input, setInput] = useState("");
  const [isFindBtnClicked, setIsFindBtnClicked] = useState(false);
  const [persondata, setPersondata] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setIsFindBtnClicked(false);
  };
  const handleFind = () => {
    const filterData = getDataFromLS().filter(
      (item) => item["Aadhar Number"] === input
    );
    setIsFindBtnClicked(true);
    setPersondata(filterData);
  };

  return (
    <div className="retrieve-container">
      <h2>Retrieve Information</h2>
      <div className="input-container">
        <input
          type="text"
          className="input"
          value={input}
          onChange={handleInputChange}
        />
        <button className="btn" onClick={handleFind}>
          Find
        </button>
      </div>
      {isFindBtnClicked &&
        (persondata.length > 0 ? (
          <div className="output">
            <p>
              {" "}
              <span>Name :</span> <span>{persondata[0]["Name"]}</span>
            </p>
            <p>
              {" "}
              <span>Date of Birth :</span>{" "}
              <span>{persondata[0]["Date of Birth"]} </span>
            </p>
            <p>
              {" "}
              <span>Aadhar Number :</span>{" "}
              <span>{persondata[0]["Aadhar Number"]}</span>
            </p>
            <p>
              {" "}
              <span>Mobile Number :</span>{" "}
              <span>{persondata[0]["Mobile Number"]}</span>
            </p>
            <p>
              {" "}
              <span>Age :</span> <span>{persondata[0]["Age"]}</span>
            </p>
          </div>
        ) : (
          <img src={NF} alt="not-found-img" />
        ))}
    </div>
  );
};

export default Retrieve;
