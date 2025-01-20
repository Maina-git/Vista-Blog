import React from 'react'
import UserInfo from '../components/profile/UserInfo';
import PostFeed from '../components/feed/PostFeed';
import ProfileFeed from '../components/feed/ProfileFeed';

const CreatePost = () => {
  return (
    <div className="bg-white w-full h-auto flex">
      <PostFeed/>
      <ProfileFeed/>
    </div>
  )
}

export default CreatePost;
