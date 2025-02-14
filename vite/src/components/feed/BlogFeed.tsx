import React from 'react';
interface BlogFeedProps {
  blogs: JSX.Element | null;
}

const BlogFeed: React.FC<BlogFeedProps> = ({ blogs }) => {
  return (
    <div className="w-full md:w-1/2 h-auto md:h-screen bg-gray-200 rounded-lg p-4 overflow-y-scroll" style={{ scrollbarWidth: 'none' }}>
      {blogs ? blogs : <div className="text-center">Select a category to view blogs.</div>}
    </div>
  );
};
export default BlogFeed;


