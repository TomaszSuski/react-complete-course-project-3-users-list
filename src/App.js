import React, { useState } from 'react';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/UsersList';


function App() {
  const [users, setUsers] = useState([]);
  return (
    <div>
      <AddUser addUsers={setUsers} users={users} />
      <UsersList />
    </div>
  );
}

export default App;
