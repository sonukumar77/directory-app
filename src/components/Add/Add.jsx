import "./Add.css";

const Add = () => {
  return (
    <div className="add-container">
      <h3>Add new Person</h3>
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
          <tr>
            <td>
              {" "}
              <input />{" "}
            </td>
            <td>
              {" "}
              <input />{" "}
            </td>
            <td>
              {" "}
              <input />{" "}
            </td>
            <td>
              {" "}
              <input />{" "}
            </td>
            <td>20</td>
            <td>
              <a href="./l">Save</a>
              <a href="./">Delete</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Add;
