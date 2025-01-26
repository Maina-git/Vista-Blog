import React from 'react'

import PostFeed from '../components/feed/PostFeed';
import ProfileFeed from '../components/feed/ProfileFeed';

const CreatePost:React.FC = () => {
  return (
    <div className="bg-white w-full h-auto flex">
      <PostFeed/>
      <ProfileFeed/>
    </div>
  )
}

export default CreatePost;
