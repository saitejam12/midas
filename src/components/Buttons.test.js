import React from 'react';
import { shallow } from 'enzyme';
import Buttons from './Buttons';

describe('Test Button component', () => {
  it('Test click event', () => {
    const mockCallBack = jest.fn();

    const button = shallow((<Buttons onClick={mockCallBack}>Ok!</Buttons>));
    button.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});