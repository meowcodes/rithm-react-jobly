import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { MemoryRouter } from 'react-router-dom';
import Company from './Company';


// // full mount
// it('mounts without crashing', function() {
//   mount(
//     <MemoryRouter>
//       <Company />
//     </MemoryRouter>
//   );
// });

// snapshot test
it('matches snapshot', function() {
  let wrapper = shallow(<Company />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
