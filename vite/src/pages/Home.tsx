import React from 'react'
import Landing from './Landing';
import Mobile from './Mobile';
import Desktop from './Desktop';

const Home:React.FC = () => {
  return (
    <div className="w-full h-auto">
      <Landing/>
      <Desktop/>
      <Mobile/>
    </div>
  )
}
export default Home;








