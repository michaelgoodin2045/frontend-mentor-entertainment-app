import React from 'react';
import avatar from '../assets/image-avatar.png';

const User = () => {
  return (
    <div className="user">
      <div className="user-avatar">
        <img src={avatar} alt="user avatar" />
      </div>
    </div>
  );
};

export default User;
