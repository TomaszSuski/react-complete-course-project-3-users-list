import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

export default function AddUser({ addUsers, users }) {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();

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
        setError({
          title: "Incorrect user name",
          message:
            "User name has to be at least 1 character long. It is required to proceed.",
        });

        break;
      case userAge.trim().length === 0:
        setError({
          title: "User age not provided",
          message: "User age is required to proceed",
        });

        break;
      case +userAge <= 0:
        setError({
          title: "Incorrect user age",
          message: "User age has to be more than 0",
        });

        break;
      default:
        let newUser = {
          name: userName,
          age: userAge,
          id: Math.random() + userName + userAge,
        };
        // let newUsers = [newUser, ...users];
        // addUsers(newUsers);
        addUsers((prevUsers) => {
          return [newUser, ...prevUsers];
        });
        setUserName("");
        setUserAge("");
        setError();
    }
  };
  const clearErrorHandler = () => setError(null);
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          clearError={clearErrorHandler}
        />
      )}
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
    </>
  );
}

AddUser.propTypes = {
  addUsers: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
};
