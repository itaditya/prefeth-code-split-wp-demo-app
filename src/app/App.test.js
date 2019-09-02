import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { App } from './App.js';

function setup(props = {}, config = {}) {
  const spyButtonClick = jest.fn();
  const { container, debug, getByRole } = render(
    <App onClick={spyButtonClick} {...props}>
      Sign Up
    </App>,
  );

  const triggerClick = event => fireEvent.click(getByRole('button'), event);

  return { container, debug, getByRole, triggerClick, spyButtonClick };
}

describe('<App /> works', () => {
  test('it renders properly', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
});
