import type {FC} from 'react';
import React, {useEffect} from 'react';
import {throttle} from 'lodash';

import useLogic from './useLogic';

export type Props = {
  /** Set initial value */
  initialValue?: number;
};

export const Counter: FC<Props> = ({initialValue = 0}) => {
  const {count, incrementCount} = useLogic(initialValue);

  useEffect(() => {
    const runner = throttle(() => {
      console.log('throttle');
    }, 10);
    runner();
  }, []);

  return (
    <div className="mx-6 my-9 box-border w-60 border border-slate-300 p-6">
      <h2 className="mb-3 font-sans text-2xl font-normal">Counter</h2>
      <button
        className="relative mx-auto mb-3 block rounded-md bg-teal-500 px-6 py-3 text-center text-white hover:bg-violet-600 active:left-px active:top-px"
        type="button"
        onClick={incrementCount}>
        Increment by one
      </button>
      <div>
        Total value: <strong>{count}</strong>
      </div>
    </div>
  );
};
