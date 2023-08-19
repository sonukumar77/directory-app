import { useState } from "react";
import "./Add.css";

const initialPersonData = {
  name: "",
  dateOfBirth: "",
  aadharNumber: null,
  mobileNumber: null,
  age: null
};
const Add = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [personData, setPersonData] = useState(initialPersonData);
  const [lsPersonData, setLsPersonData] = useState(() => {
    return getDataFromLS();
  });

  function getDataFromLS() {
    const data = JSON.parse(localStorage.getItem("person-data"));
    if (data) {
      return data;
    } else {
      return [];
    }
  }
  // const lsPersonData = getDataFromLS();

  const handleInputData = (e, field) => {
    const updatedPersonData = {
      ...personData
    };
    updatedPersonData[field] = e.target.value;
    setPersonData(updatedPersonData);
  };

  const handleSave = () => {
    const personDataFromLS = JSON.parse(localStorage.getItem("person-data"));
    const person = {
      Name: personData.name,
      "Date of Birth": personData.dateOfBirth,
      "Aadhar Number": personData.aadharNumber,
      "Mobile Number": personData.mobileNumber,
      Age: getAgeFromDOB(personData.dateOfBirth)
    };

    if (personDataFromLS) {
      const personArr = [...personDataFromLS, person];
      localStorage.setItem("person-data", JSON.stringify(personArr));
      setLsPersonData(personArr);
    } else {
      const newArr = [person];
      localStorage.setItem("person-data", JSON.stringify(newArr));
      setLsPersonData(newArr);
    }

    setIsAdding(false);
    setPersonData(initialPersonData);
  };

  const handleDelete = (aadhar) => {
    const updatedData = getDataFromLS().filter(
      (item) => item["Aadhar Number"] !== aadhar
    );
    localStorage.setItem("person-data", JSON.stringify(updatedData));
    setLsPersonData(updatedData);
  };

  const getAgeFromDOB = (dob) => {
    const calAge = new Date().getFullYear() - dob.split("-")[0];
    return calAge;
  };

  return (
    <div className="add-container">
      <h2>Add new Person</h2>
      <div className="table-wrapper">
        <table border="2">
          <thead>
            <tr>
              <th>Name</th>
              <th>Date Of birth</th>
              <th>Aadhar number</th>
              <th>Mobile Number</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {lsPersonData.map((elem, i) => {
              return (
                <tr key={i}>
                  <td>{elem.Name}</td>
                  <td>{elem["Date of Birth"]}</td>
                  <td>{elem["Aadhar Number"]}</td>
                  <td>{elem["Mobile Number"]}</td>
                  <td>{elem["Age"]}</td>
                  <td>
                    <div className="action-btn-wrapper">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-trash delete-btn"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#ff4500"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        onClick={() => handleDelete(elem["Aadhar Number"])}
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 7l16 0" />
                        <path d="M10 11l0 6" />
                        <path d="M14 11l0 6" />
                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                      </svg>
                    </div>
                  </td>
                </tr>
              );
            })}
            {isAdding && (
              <tr>
                <td>
                  <input
                    className="input"
                    type="text"
                    value={personData.name}
                    onChange={(e) => handleInputData(e, "name")}
                  />
                </td>
                <td>
                  <input
                    className="input"
                    type="date"
                    value={personData.dateOfBirth}
                    onChange={(e) => handleInputData(e, "dateOfBirth")}
                  />
                </td>
                <td>
                  <input
                    className="input"
                    type="number"
                    value={personData.aadharNumber}
                    onChange={(e) => handleInputData(e, "aadharNumber")}
                  />
                </td>
                <td>
                  <input
                    className="input"
                    type="number"
                    value={personData.mobileNumber}
                    onChange={(e) => handleInputData(e, "mobileNumber")}
                  />
                </td>
                <td>{personData.age}</td>
                <td>
                  <div className="action-btn-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-device-floppy save-btn"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#00b341"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      onClick={handleSave}
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" />
                      <path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                      <path d="M14 4l0 4l-6 0l0 -4" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-trash delete-btn"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#ff4500"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      onClick={handleDelete}
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 7l16 0" />
                      <path d="M10 11l0 6" />
                      <path d="M14 11l0 6" />
                      <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                      <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                    </svg>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="add-btn-container">
        <button
          className="btn active"
          onClick={() => setIsAdding(true)}
          disabled={isAdding}
        >
          Add New Person
        </button>
      </div>
    </div>
  );
};

export default Add;
