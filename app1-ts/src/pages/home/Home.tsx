import './Home.scss';
// import { Button } from '@carbon/react';
import { Add } from '@carbon/react/icons';
import React from 'react';
import { Button } from 'carbon-components-react';

const Home = (): JSX.Element => {

  const shoot = (): void => {
    console.log('Great Shot!');
  };

  return (
    <div>
      <h1 id="home">home page</h1>    
      <div>
        <Add />
        <Button onClick={shoot}>content load</Button>
      </div>  
    </div>
  );
};

export default Home;