import React from 'react';
import Login from './Login';

describe('Local State', () => {
 ...
});

describe('App Component', () => {
  it('renders the Counter wrapper', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find(Counter)).to.have.length(1);
  });
});