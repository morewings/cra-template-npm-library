import React from 'react';
import {Counter} from 'lib/index';

import classes from './App.module.css';
import './index.css';

export const App = () => (
  <div className={classes.container}>
    <Counter initialValue={0} />
  </div>
);
