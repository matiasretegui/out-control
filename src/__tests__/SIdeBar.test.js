import React from 'react';
import { shallow, render, mount } from 'enzyme';
import SideBar from '../Component/SideBar/SideBar';
import { MemoryRouter } from 'react-router';


describe('SideBar', () => {
  it('should be defined', () => {
    expect(SideBar).toBeDefined();
  });

  it('should render correctly', () => {
    const tree = shallow(<SideBar />);
    expect(tree).toMatchSnapshot();
  });

  it('should have an active class on home link', () => {
    const tree = mount(
      <MemoryRouter initialEntries={[ '/' ]}>
        <SideBar/>
      </MemoryRouter>
    );
    expect(tree.find('.active').at(1).text()).toEqual('Balance')

  });
});