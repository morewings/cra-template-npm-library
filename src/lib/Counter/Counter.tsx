import type {FC} from 'react';
import React, {useEffect} from 'react';
import {throttle} from 'lodash';

import useLogic from './useLogic';
import classes from './Counter.module.css';

export const Counter: FC<{initialValue?: number}> = ({initialValue = 0}) => {
  const {count, incrementCount} = useLogic(initialValue);

  useEffect(() => {
    const runner = throttle(() => {
      console.log('throttle');
    }, 10);
    runner();
  }, []);

  return (
    <div className={classes.counter}>
      <h2 className={classes.header}>Counter</h2>
      <button className={classes.button} type="button" onClick={incrementCount}>
        Increment by one
      </button>
      <div>
        Total value: <strong>{count}</strong>
      </div>
    </div>
  );
};
