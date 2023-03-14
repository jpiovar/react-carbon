import './Home.scss';
import { Button } from '@carbon/react';
import { decrement, increment } from 'redux/counter';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';

const Home = () => {

  // @ts-ignore
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const increase = () => {
    console.log('increment Great Shot!');
    dispatch(increment());
  };

  const decrease = () => {
    console.log('decrement Great Shot!');
    dispatch(decrement());
  };

  return (
    <div>
      <h1 id="home">home page</h1>    
      <div>
        <Button onClick={increase}>increase content load</Button>
        <Button onClick={decrease}>decrease content load</Button>
      </div>  
      <span>{count}</span>
    </div>
  );
};

export default Home;