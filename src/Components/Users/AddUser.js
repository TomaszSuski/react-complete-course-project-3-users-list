import React from "react";
import PropTypes from "prop-types";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

export default function AddUser({ addUsers, users }) {
  const addUserHandler = (event) => {
    event.preventDefault();
    let newUser = {
      name: event.target.username.value,
      age: event.target.age.value,
      id: Math.random() + event.target.username.value + event.target.age.value,
    };
    let newUsers = [newUser, ...users];
    addUsers(newUsers);
  };
  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}

AddUser.propTypes = {
  addUsers: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
};
