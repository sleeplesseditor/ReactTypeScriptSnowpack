import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

test('renders itself', () => {
  window.matchMedia = jest.fn().mockImplementation(query => {
    return {
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    };
  });

  const component = shallow(<App />);
  expect(component).toHaveLength(1);
});
