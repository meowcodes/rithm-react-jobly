import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { MemoryRouter } from 'react-router-dom';
import Search from './Search';


// full mount
it('mounts without crashing', function() {
  mount(
    <MemoryRouter>
      <Search />
    </MemoryRouter>
  );
});

// snapshot test
it('matches snapshot', function() {
  let wrapper = shallow(<Search />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
