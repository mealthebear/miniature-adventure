import React, { useState } from 'react';

const UpdateForm = (props) => {
  return (
    <>
      <h3>{props.formHeading}</h3>
      <form onSubmit={props.updateUser}>
        <label>Your Name</label>
        <input type="text"></input> <br />

        <h4>New Name and/or Age</h4>

        <label>Name</label>
        <input type="text"></input>

        <label>Age</label>
        <input type="text"></input>

        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default UpdateForm;
