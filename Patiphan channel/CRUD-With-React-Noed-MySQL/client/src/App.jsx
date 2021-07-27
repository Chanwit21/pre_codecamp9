import React, { useState } from "react";
import Axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);
  const [newWage, setNewWage] = useState(0);

  const [employeeList, setEmployeeList] = useState([]);

  const getEmployee = () => {
    Axios.get("http://localhost:3001/employee").then((res) => {
      setEmployeeList(res.data);
    });
  };

  const addEmployee = () => {
    Axios.post("http://localhost:3001/create", {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage,
    }).then(() => {
      [
        ...employeeList,
        {
          name: name,
          age: age,
          country: country,
          position: position,
          wage: wage,
        },
      ];
    });
  };

  const updateEmployeeWage = (id) => {
    Axios.put("http://localhost:3001/update", { wage: newWage, id: id }).then(
      (res) => {
        setEmployeeList(
          employeeList.map((val) => {
            return val.id === id ? {
                  id: val.id,
                  name: val.name,
                  age: val.age,
                  country: val.country,
                  position: val.position,
                  wage: newWage
                }
              : val;
          })
        )
        setNewWage('');
      }
    ).catch(err => {
      console.log(err)
    })
  };

  const deleteEmployee = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then( res => {
      setEmployeeList(
        employeeList.filter((val) => val.id !== id )
      )
    })
  }

  return (
    <div className="App container">
      <h1>Employee Information</h1>
      <div className="information">
        <form action="">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name..."
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <label htmlFor="age" className="form-label">
              Age:
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter Age..."
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
            <label htmlFor="country" className="form-label">
              Country:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Country..."
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            />
            <label htmlFor="position" className="form-label">
              Position:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Position..."
              onChange={(e) => {
                setPosition(e.target.value);
              }}
            />
            <label htmlFor="wage" className="form-label">
              Wage:
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter Wage..."
              onChange={(e) => {
                setWage(e.target.value);
              }}
            />
          </div>
          <button className="btn btn-success" onClick={addEmployee}>
            Add Employee
          </button>
        </form>
      </div>
      <hr />
      <div className="employees">
        <button className="btn btn-primary" onClick={getEmployee}>
          Show employees
        </button>
        <div style={{ marginTop: "30px" }}>
          {employeeList.map((val, key) => {
            return (
              <div className="employee card">
                <div className="card-body text-left">
                  <p className="card-text"> Name : {val.name}</p>
                  <p className="card-text"> Age : {val.age}</p>
                  <p className="card-text"> Country : {val.country}</p>
                  <p className="card-text"> Position : {val.position}</p>
                  <p className="card-text"> Wage : {val.wage}</p>
                  <div className="d-flex">
                    <input
                      type="number"
                      style={{ width: "300px" }}
                      placeholder="150000...."
                      className="form-control"
                      value={newWage}
                      onChange={(e) => {
                        setNewWage(e.target.value);
                      }}
                    />
                    <button
                      className="btn btn-warning"
                      onClick={() => updateEmployeeWage(val.id)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteEmployee(val.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
