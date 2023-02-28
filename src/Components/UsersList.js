import React from "react";
import PropTypes from "prop-types";
import styles from "./UsersList.module.css";
import Card from "./UI/Card";

export default function UsersList({ users, setUsers }) {
  return (
    <Card className={styles.users}>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)  
          </li>
        ))}
      </ul>
    </Card>
  );
}

UsersList.propTypes = {
  users: PropTypes.array.isRequired,
  setUsers: PropTypes.func.isRequired,
};
