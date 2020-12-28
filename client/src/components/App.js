import axios from 'axios';
import InputForm from './InputForm.js';
import UpdateForm from './UpdateForm.js';
import React, { useState } from 'react';

const App = () => {

  const [createdUser, setCreatedUser] = useState([]);
  const [deletedInfo, setDeletedInfo] = useState([]);
  const [listOfUsers, setListOfUsers] = useState([]);
  const [updatedInfo, setUpdatedInfo] = useState([]);

  const [usersName, setUsersName] = useState('');
  const [usersAge, setUsersAge] = useState('');
  const [usersNewName, setUsersNewName] = useState('');
  const [usersNewAge, setUsersNewAge] = useState('');

  const handleChange = (handlerMethod) => {
    handlerMethod();
    // console.log('usersName: ', usersName);
    // console.log('usersAge: ', usersAge);
    // console.log('usersNewName: ', usersNewName);
    // console.log('usersNewAge: ', usersNewAge);
  }

  const createUser = (e) => {
    e.preventDefault();
    axios.post('/api/users', { name: 'Travis', age: 26 })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.log(error))
  }

  const deleteUser = (e) => {
    e.preventDefault();
    axios.delete('/api/users', { name: 'Bob' })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => console.log(error))
  }

  const getUsers = (e) => {
    e.preventDefault();
    axios.get('/api/users')
    .then((response) => {
      console.log(response);
      let placeArray = [];
      response.data.map((user) => {
        placeArray.push(user.name);
      })
      setListOfUsers(placeArray);
    })
    .catch((error) => console.log(error));
  }

  const updateUser = (e) => {
    e.preventDefault();
    axios.put('/api/users', { name: 'Simon', newName: 'Simonuel', newAge: 37 })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => console.log(error))
  }

  const createHeading = `Welcome to the Registration Form! Please enter your
  name and age, and we'll process your request. Thank you!`;
  const deleteHeading = `Please enter your information here to be removed
  from the list. Thank you!`;
  const updateHeading = `Want to modify your information? Just enter your
  name, and what you would like to change. Thank you!`;

  return (
    <>
    <h1>Sign up for the Event!</h1>
    <InputForm formHeading={createHeading} onChange={handleChange} setUsersName={setUsersName} setUsersAge={setUsersAge} crudFunction={createUser}/>
    <UpdateForm formHeading={updateHeading} 
      onChange={handleChange} 
      updateUser={updateUser}
      setUsersName={setUsersName} 
      setUsersAge={setUsersAge}
      setUsersNewName={setUsersNewName}
      setUsersNewAge={setUsersNewAge}
    />
    <InputForm formHeading={deleteHeading} onChange={handleChange} setUsersName={setUsersName} setUsersAge={setUsersAge} crudFunction={deleteUser}/>
    <h3>Want to see who's on the list? Click the button below!</h3>
    <button type="button" onClick={createUser}>Create a User</button>
    <button type="button" onClick={deleteUser}>Delete a User</button>
    <button type="button" onClick={updateUser}>Update a User</button>
    <button type="button" onClick={getUsers}>List of Users</button>
    {listOfUsers}
    </>
  )  
}

export default App;
