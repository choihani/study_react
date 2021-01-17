import React from 'react';

function User2({ user }) {
    return (
      <div>
        <b>{user.username}</b> <span>({user.email})</span>
      </div>
    );
  }
  
  function UserList2({ users }) {
    return (
      <div>
        {users.map(user => (
          <User2 user={user} key={user.id} />
        ))}
      </div>
    );
  }
  
  export default UserList2;