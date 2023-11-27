import type {FC} from 'react';
import React from 'react';

import useLogic from './useLogic';
import classes from './Counter.module.css';

export const Counter: FC<{initialValue?: number}> = ({initialValue = 0}) => {
  const {count, incrementCount} = useLogic(initialValue);

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
