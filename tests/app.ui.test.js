import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import EvenOdd from '../client/EvenOdd.jsx';
configure({ adapter: new Adapter() });

describe('Components in UI', () => {

  it('renders evenOdd without crashing component', () => {
    shallow(<evenOdd />);
  });

  it('Label changes the text for Even number after Button click', () => {
    const wrapper = mount(<EvenOdd />);
    wrapper.find('#number').simulate('change', { target: { value: 50 } });
    wrapper.find('#btnCheckEvent').simulate('click');
    expect(wrapper.find('#result').text()).toEqual('Even number');
    wrapper.unmount();
  });

  it('Label changes the text for Odd number after Button click', () => {
    const wrapper = mount(<EvenOdd />);
    wrapper.find('#number').simulate('change', { target: { value: 53 } });
    wrapper.find('#btnCheckEvent').simulate('click');
    expect(wrapper.find('#result').text()).toEqual('Odd number');
    wrapper.unmount();
  });

});

