import type {FC} from 'react';
import React, {useEffect} from 'react';
import {throttle} from 'lodash';

import useLogic from './useLogic';
import {Container, Header, Button} from './Counter.style';

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
    <Container>
      <Header>Counter</Header>
      <Button type="button" onClick={incrementCount}>
        Increment by one
      </Button>
      <div>
        Total value: <strong>{count}</strong>
      </div>
    </Container>
  );
};
