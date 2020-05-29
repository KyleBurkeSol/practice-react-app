import React from 'react';
import { shallow } from 'enzyme';
import Posts from './PostsPage';

describe('Posts page test', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Posts />);
  });

  it('Has a Post header', () => {
    const postHeaderElement = wrapper.find('h1').text();
    expect(postHeaderElement).toBe('Posts');
  });

  it('Has a search filter text box', () => {
    const searchFilterFieldElementAttributes = wrapper.find('input#searchFilterField').props();
    expect(searchFilterFieldElementAttributes.placeholder).toBe('Type here');
    expect(searchFilterFieldElementAttributes.type).toBe('text');
  });

  it('Has a filter button', () => {
    const filterButtonElementAttributes = wrapper.find('button#searchFilterButton');
    expect(filterButtonElementAttributes.text()).toBe('Filter');
  });
});