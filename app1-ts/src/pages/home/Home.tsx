import './Home.scss';
// import { Button } from '@carbon/react';
import { Add } from '@carbon/react/icons';
import React from 'react';
import { Button } from 'carbon-components-react';

import { Grid, Column } from '@carbon/react';

const Home = (): JSX.Element => {

  const shoot = (): void => {
    console.log('Great Shot!');
  };

  return (
    <div>
      <h1 id="home">home page</h1>
      <div>
        <Add />
        <Button onClick={shoot}><Add />content load</Button>
      </div>
      <br/>
      <br/>
      <div>
        <Grid className="landing-page" fullWidth>
          <Column lg={16} md={8} sm={4} className="landing-page__banner">
            1
          </Column>
          <Column lg={16} md={8} sm={4} className="landing-page__r2">
            <Grid className="tabs-group-content">
              <Column md={4} lg={7} sm={4} className="landing-page__tab-content">
                7/16
              </Column>
              <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
                8/16
              </Column>
            </Grid>
          </Column>
          <Column lg={16} md={8} sm={4} className="landing-page__r3">
            <Grid>
              <Column md={4} lg={4} sm={4}>
                1/4
              </Column>
              <Column md={4} lg={4} sm={4}>
                1/4
              </Column>
              <Column md={4} lg={4} sm={4}>
                1/4
              </Column>
              <Column md={4} lg={4} sm={4}>
                1/4
              </Column>
            </Grid>
          </Column>
        </Grid>
      </div>
    </div>
  );
};

export default Home;