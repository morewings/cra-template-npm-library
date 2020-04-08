import React from 'react';
import {Component, Counter} from 'lib';
import classes from './App.module.css';

const App = () => (
  <div className={classes.container}>
    <Component />
    <Counter initialValue={0} />
  </div>
);

export default App;
