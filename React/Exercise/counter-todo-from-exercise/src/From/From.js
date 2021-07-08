import React, { useState } from "react";

function From() {
  const class1 = "Input InputElement";
  const class2 = "Input InputElement Invalid";
  const [user, setUser] = useState({
    username: {
      value: "",
      validate: {
        maxlength: 20,
        minlength: 5,
        require: true,
      },
      error: {
        status: true,
        message: "",
        isTouch:false
      },
    },
    email: {
      value: "",
      validate: {
        maxlength: 15,
        minlength: 10,
        require: true,
      },
      error: {
        status: true,
        message: "",
        isTouch:false
      },
    },
    passwords: {
      value: "",
      validate: {
        maxlength: 16,
        minlength: 8,
        require: true,
      },
      error: {
        status: true,
        message: "",
        isTouch:false
      },
    },
    phonenumbers: {
      value: "",
      validate: {
        maxlength: 10,
        minlength: 10,
        require: false,
      },
      error: {
        status: true,
        message: "",
        isTouch:false
      },
    },
    isFormValid: false,
  });

  // const getCssInvalid = () => {
  //   let classCSS = "Input InputElement";
  //   if(updateFrom[].error.status) {
  //     classCSS += "Invalid"
  //   };
  //   return classCSS;
  // }

  function updateUser(e) {
    const fieldName = e.target.name;
    const fieldvalue = e.target.value;
    const updateFrom = { ...user };
    updateFrom[fieldName].value = fieldvalue;

    if(updateFrom[fieldName].value.length !== 0){
      updateFrom[fieldName].validate.require = false;
    } else {
      updateFrom[fieldName].validate.require = true;
    }

    if(updateFrom[fieldName].value.length >= updateFrom[fieldName].validate.minlength &&  updateFrom[fieldName].value.length <= updateFrom[fieldName].validate.maxlength && !updateFrom[fieldName].validate.require){
      updateFrom[fieldName].error.status = false;
    } else {
      updateFrom[fieldName].error.status = true;
    }

    let isNotError = false;
    for(let i in user) {
      if(user[i].error){
        console.log(user[i].error.status)
        if(user[i].error.status){
          isNotError = false;
        } else {
          isNotError = true;
        }
      }
    }

    if(isNotError){
      updateFrom.isFormValid = true;
    } else {
      updateFrom.isFormValid = false;
    }

    updateFrom[fieldName].error.isTouch = true;

    setUser({ ...updateFrom });
  }

  return (
    <div className="RegisterForm">
      <form>
        <input
          type="text"
          className={(user["username"].error.status && user["username"].error.isTouch)?class2:class1}
          placeholder="Username:"
          name="username"
          onChange={(e) => updateUser(e)}
        ></input>
        <br />
        <input
          type="email"
          className={(user["email"].error.status && user["email"].error.isTouch)?class2:class1}
          placeholder="Email:"
          name="email"
          onChange={(e) => updateUser(e)}
        ></input>
        <br />
        <input
          type="password"
          className={(user["passwords"].error.status && user["passwords"].error.isTouch)?class2:class1}
          placeholder="Password:"
          name="passwords"
          onChange={(e) => updateUser(e)}
        ></input>
        <br />
        <input
          type="text"
          className={(user["phonenumbers"].error.status && user["phonenumbers"].error.isTouch)?class2:class1}
          placeholder="Phonenumber:"
          name="phonenumbers"
          onChange={(e) => updateUser(e)}
        ></input>
        <br />
        <button className="Button" disabled={!user.isFormValid}>Register</button>
      </form>
    </div>
  );
}

export default From;
