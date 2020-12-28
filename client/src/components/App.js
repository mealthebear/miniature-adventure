import React, { useState } from 'react';

const App = () => {
  return (
    <>
    <h1>Sign up for the Event!</h1>
    <h3>Welcome to the Registration Form! Please enter your
    name and age, and we'll process your request. Thank you!
    </h3>
    <form>
      <label>Name</label>
      <input type="text"></input>

      <label>Age</label>
      <input type="text"></input>

      <input type="submit" value="Submit" />
    </form>
    </>
  )  
}

export default App;
