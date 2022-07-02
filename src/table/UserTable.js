import React from 'react'
const UserTable= props=>( 
  
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>UserName</th>

        <th>Actions</th>

        </tr>
        </thead>
        <tbody>
        <tr>
        <td>Name</td>
        <td>UserName</td>

        <td>Actions</td>

        <td>
        <button>edit</button>
        <button>delete</button>
        </td>
        </tr>

          </tbody>
</table>
)
export default UserTable