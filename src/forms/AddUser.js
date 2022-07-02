import React, { useState } from 'react';
const AddUser = props => {
  const initialFormState = { id: null, name: '', username: ''};
  const [user, setUser] = useState(initialFormState);

  
  const handleInputChange = e => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
    console.log(user);
  };
  return (
    <div>
      <form onSubmit={e=>{ 
    e.preventDefault();
    if (!user.name || !user.username) return;
    props.addUser(user);
    setUser(initialFormState);  
    }}>
        <label>Name</label>
        <input
          type="text"
          value={user.name}
          name="name"
          onChange={handleInputChange}
        />
        
        <label>UserName</label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleInputChange}
        />
        <button>Add New User</button>
      </form>
    </div>
  );
};
export default AddUser;
