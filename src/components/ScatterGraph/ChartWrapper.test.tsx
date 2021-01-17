import React from 'react';
import ChartWrapper from './ChartWrapper';
import { shallow } from 'enzyme';

describe('ChartWrapper component', () => {
    let ChartWrapperComponent: any;
    
    beforeEach(() => {
      ChartWrapperComponent = shallow(<ChartWrapper />);
    });
  
    it('should render itself', () => {
      expect(ChartWrapperComponent).toHaveLength(1);
    });  
});
