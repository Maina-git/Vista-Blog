import React from 'react';
import UserInfo from '../profile/UserInfo';

const ProfileFeed: React.FC = () => {
  return (
    <div className="w-1/4 h-screen m-2 rounded-lg bg-gray-200 p-4">
    <UserInfo/>
    </div>
  );
};

export default ProfileFeed;
