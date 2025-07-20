// src/components/UserProfile.jsx
import React, { useContext } from 'react';
import UserContext from '../UserContext';

function UserProfile() {
  const userData = useContext(UserContext);

  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ color: 'blue', fontSize: '1.5rem' }}>{userData.name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold' }}>{userData.age || "N/A"}</span></p>
      <p>Email: <span style={{ fontStyle: 'italic' }}>{userData.email}</span></p>
    </div>
  );
}

export default UserProfile;