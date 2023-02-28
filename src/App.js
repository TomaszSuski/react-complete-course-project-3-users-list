import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([]);
  console.log(users);
  return (
    <div>
      <AddUser addUsers={setUsers} users={users} />
      <UsersList users={users} setUsers={setUsers} />
    </div>
  );
}

export default App;
