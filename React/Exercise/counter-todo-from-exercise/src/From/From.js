import React, { useState } from "react";

function From() {
  return (
  <div className="RegisterForm">
      <form>
          <input type="text" className="Input InputElement" placeholder="Username:" name="username"></input><br/>
          <input type="email" className="Input InputElement" placeholder="Email:" name="email"></input><br/>
          <input type="password" className="Input InputElement" placeholder="Password:" name="passwords"></input><br/>
          <input type="text" className="Input InputElement" placeholder="Phonenumber:" name="phonenumbers"></input><br/>
          <button className="Button">Register</button>
      </form>
  </div>
  )
}

export default From;
