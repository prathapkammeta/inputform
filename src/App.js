import React from 'react';
import './style.css';
import UserTable from './table/UserTable';
import AddUser from './forms/AddUser'

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <UserTable />
      <h1>Add User </h1>
      <AddUser />
    </div>
  );
}
