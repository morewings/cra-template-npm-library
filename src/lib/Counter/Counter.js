import React from 'react';
import PropTypes from 'prop-types';
import useLogic from './useLogic';
import classes from './Counter.module.css';

const Counter = ({initialValue}) => {
  /**
   *  Get count value from Redux store. We defined selector
   *  (state => state.counter.value) inside counter feature folder,
   *  to make component global state agnostic
   */
  const {count, incrementCount} = useLogic(initialValue);

  return (
    <div className={classes.counter}>
      <h2 className={classes.header}>Sync counter</h2>
      <button className={classes.button} type="button" onClick={incrementCount}>
        Increment by one
      </button>
      <div>
        Total value: <strong>{count}</strong>
      </div>
    </div>
  );
};

Counter.propTypes = {
  initialValue: PropTypes.number.isRequired,
};

export default Counter;
