

import React, { useState, useEffect } from 'react';

const UserInfo = ({ users }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(users);

  // Logic to handle search and sort
  useEffect(() => {
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchTerm, users]);

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Function to handle sorting by name
  const handleSortByName = () => {
    const sortedUsers = [...filteredUsers].sort((a, b) => a.name.localeCompare(b.name));
    setFilteredUsers(sortedUsers);
  };

  return (
    <div>
      <input type="text" placeholder="Search by name" value={searchTerm} onChange={handleSearchChange} />
      <button onClick={handleSortByName}>Sort by Name</button>
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
           
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserInfo;
