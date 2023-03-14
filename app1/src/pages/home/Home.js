import './Home.scss';
import { Button } from '@carbon/react';
import React from 'react';

const Home = () => {

  const shoot = () => {
    console.log('Great Shot!');
  };

  return (
    <div>
      <h1 id="home">home page</h1>    
      <div>
        <Button onClick={shoot}>content load</Button>
      </div>  
    </div>
  );
};

export default Home;