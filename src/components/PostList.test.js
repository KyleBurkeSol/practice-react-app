import React from 'react';
import { shallow } from 'enzyme';
import PostList from './PostList';




describe('Post List test', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<PostList />);
  });

  it('Has a Post lists node', () => {
    expect(wrapper.exists('ul#post-list')).toEqual(true);
  });

  it('Has a Post item date field', () => {
    expect(wrapper.exists('ul#post-list li div.post-date')).toEqual(true);
  });

  it('Has a Post item title field', () => {
    expect(wrapper.exists('ul#post-list li div.post-details h4')).toEqual(true);
  });

  it('Has a Post item description', () => {
    expect(wrapper.exists('ul#post-list li div.post-details span')).toEqual(true);
  });

  it('Has at least one Post item', () => {
    expect(wrapper.find('ul#post-list li').length).toBeGreaterThan(0);
  });
});


