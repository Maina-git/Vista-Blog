import React, { useState } from 'react';
import Sidebar from '../components/articles/Sidebar';
import BlogFeed from '../components/feed/BlogFeed';
import ProfileFeed from '../components/feed/ProfileFeed';
import Blogs from '../components/blogpages/Blogs';
import Culture from '../components/blogpages/Culture';
import Health from '../components/blogpages/Health';
import IT from '../components/blogpages/IT';
import Sports from '../components/blogpages/Sports';
import World from '../components/blogpages/World';
import { MdSportsVolleyball } from "react-icons/md";
import { CgMediaLive } from "react-icons/cg";
import { SiTechcrunch } from "react-icons/si";
import { TbWorldHeart } from "react-icons/tb";
import { TiThSmall } from "react-icons/ti";
import { MdHealthAndSafety } from "react-icons/md";
import Growth from '../components/blogpages/Growth';

interface Blog {
  id: number;
  name: string;
  path: JSX.Element;
  icon: JSX.Element;
}

const Home: React.FC = () => {
  const [blogItem, setBlogItem] = useState<JSX.Element | null>(<Blogs />);

  const Categories: Blog[] = [
    { id: 1, name: 'All', path: <Blogs />, icon: <TiThSmall/> },
    { id: 2, name: 'Sports', path: <Sports />, icon: <MdSportsVolleyball/> },
    { id: 3, name: 'Culture', path: <Culture />, icon: <CgMediaLive/> },
    { id: 4, name: 'IT and Tech', path: <IT />, icon: <SiTechcrunch/> },
    { id: 5, name: 'World', path: <World />, icon: <TbWorldHeart/> },
    { id: 6, name: 'Health', path: <Health />, icon: <MdHealthAndSafety/>},
    {id:7, name:"Growth", path:<Growth/>, icon:<TbWorldHeart/>}
  ];

  const handleBlogClick = (selectedBlog: JSX.Element): void => {
    setBlogItem(selectedBlog);
  };

  return (
    <div className="w-full h-auto flex items-center">
      <Sidebar Categories={Categories} onBlogsClick={handleBlogClick} />
      <BlogFeed blogs={blogItem} />
      <ProfileFeed />
    </div>
  );
};

export default Home;






