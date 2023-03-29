import './Home.scss';

import React from 'react';

const Home = (): JSX.Element => {

  const shoot = (): void => {
    console.log('Great Shot!');
  };

  return (
    <div>
      <h1 id="home">home page</h1>    
      <div>
        <button onClick={shoot}>content load</button>
      </div>  
    </div>
  );
};

export default Home;