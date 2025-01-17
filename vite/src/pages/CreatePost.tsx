import React from 'react'
import UserInfo from '../components/profile/UserInfo';
import PostFeed from '../components/feed/PostFeed';
import ProfileFeed from '../components/feed/ProfileFeed';

const CreatePost = () => {
  return (
    <div className="bg-gray-100 w-full h-screen flex">
      <PostFeed/>
      <ProfileFeed/>
    </div>
  )
}

export default CreatePost;
