import React from 'react';
import {Counter} from 'lib';
import classes from './App.module.css';

export const App = () => (
  <div className={classes.container}>
    <Counter initialValue={0} />
  </div>
);
