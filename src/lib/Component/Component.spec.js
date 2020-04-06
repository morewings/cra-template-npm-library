import React from 'react';
import {render} from '@testing-library/react';
import Component from './Component';

describe('lib > Component', () => {
  it('renders without crashing', () => {
    /**
     * `asFragment`:
     * @see https://testing-library.com/docs/react-testing-library/api#asfragment
     */
    const {asFragment} = render(<Component />);

    /**
     * Basic snapshot test to make sure, that rendered component
     * matches expected footprint.
     */
    expect(asFragment()).toMatchSnapshot();
  });
});
