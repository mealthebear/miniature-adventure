import React, { useState } from 'react';

const InputForm = (props) => {
  return (
    <>
      <h3>{props.formHeading}</h3>
      <form onSubmit={props.crudFunction}>
        <label>Name</label>
        <input type="text" onChange={props.onChange(() => props.setUsersName())}></input>

        <label>Age</label>
        <input type="text" onChange={props.onChange(() => props.setUsersAge())}></input>

        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default InputForm;
