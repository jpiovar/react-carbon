import './About.scss';
// import { Add } from '@carbon/react/icons';
import { Add, LetterEe, Tree } from '@carbon/icons-react';
import React from 'react';
import { Button } from 'carbon-components-react';

const About = (): JSX.Element => {
  return (
    <>
      <div>
        <h1 id="home">About page</h1>      
      </div>
      <Button><Add />ok</Button>
      <LetterEe />
      <Tree />
    </>
  );
};

export default About;