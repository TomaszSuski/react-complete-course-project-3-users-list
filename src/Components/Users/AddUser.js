import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

export default function AddUser({ addUsers, users }) {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState('');
  const [isNameValid, setIsNameValid] = useState(true);
  const [isAgeValid, setIsAgeValid] = useState(true);

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };
  const userAgeChangeHandler = (event) => {
    setUserAge(event.target.value);
  };
  const addUserHandler = (event) => {
    event.preventDefault();
    switch (true) {
      case userName.trim().length === 0:
        setIsNameValid(false);
        alert("User name not entered");
        break;
      case userAge.trim().length === 0:
        setIsAgeValid(false);
        alert("User age not entered");
        break;
      case userAge <= 0:
        alert("User age must be more than zero");
        break;
      default:
        let newUser = {
          name: userName,
          age: userAge,
          id: Math.random() + userName + userAge,
        };
        let newUsers = [newUser, ...users];
        addUsers(newUsers);
        setUserName("");
        setUserAge("");
    }
  };
  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={userName}
          onChange={userNameChangeHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          value={userAge}
          onChange={userAgeChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}

AddUser.propTypes = {
  addUsers: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
};
