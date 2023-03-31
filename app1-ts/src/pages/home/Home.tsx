import './Home.scss';
// import { Button } from '@carbon/react';
import { Add } from '@carbon/react/icons';
import React from 'react';
import { Button } from 'carbon-components-react';
import { Grid, Column } from '@carbon/react';
import Table1 from '../../shared/components/Table1';



const Home = (): JSX.Element => {

  const headers = [
    {
      key: 'name',
      header: 'Name',
    },
    {
      key: 'createdAt',
      header: 'Created',
    },
    {
      key: 'updatedAt',
      header: 'Updated',
    },
    {
      key: 'issueCount',
      header: 'Open Issues',
    },
    {
      key: 'stars',
      header: 'Stars',
    },
    {
      key: 'links',
      header: 'Links',
    },
  ];
  const rows = [
    {
      id: '1',
      name: 'Resource 1',
      createdAt: 'Date',
      updatedAt: 'Date',
      issueCount: '123',
      stars: '456',
      links: 'Links',
    },
    {
      id: '2',
      name: 'Resource 2',
      createdAt: 'Date',
      updatedAt: 'Date',
      issueCount: '123',
      stars: '456',
      links: 'Links',
    },
    {
      id: '3',
      name: 'Resource 3',
      createdAt: 'Date',
      updatedAt: 'Date',
      issueCount: '123',
      stars: '456',
      links: 'Links',
    },
  ];



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
      <br />
      <br />
      <div>
        <div className="bx--grid bx--grid--full-width landing-page">
          <div className="bx--row landing-page__banner">
            <div className="bx--col-lg-16">1ok</div>
          </div>
          <div className="bx--row landing-page__r2">
            <div className="bx--col-md-4 bx--col-lg-7">7/16</div>
            <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">8/16</div>
          </div>
          <div className="bx--row landing-page__r3">
            <div className="bx--col-md-4 bx--col-lg-4">1/4</div>
            <div className="bx--col-md-4 bx--col-lg-4">1/4</div>
            <div className="bx--col-md-4 bx--col-lg-4">1/4</div>
            <div className="bx--col-md-4 bx--col-lg-4">1/4</div>
          </div>
        </div>
      </div>
      <br/><br/>
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
      <br />
      <br />
      <div>
        <Table1 headers={headers} rows={rows} />        
      </div>
    </div>
  );
};

export default Home;