import React from 'react';
import UserInfo from '../profile/UserInfo';

const ProfileFeed: React.FC = () => {
  return (
    <div className="hidden w-full md:w-1/4 h-auto md:h-screen md:block bg-gray-200 p-4 rounded-lg">
      <UserInfo/>
    </div>
  );
};
export default ProfileFeed;



