import React from 'react';
import SimpleComponent from '../src/index';

describe('SimpleComponent', () => {
  const wrapper = shallow(<SimpleComponent />);

  it('root element should be a div', () => {
    expect(wrapper.type()).to.eql('div');
  });
});