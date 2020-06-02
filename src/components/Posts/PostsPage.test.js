import React from 'react';
import { shallow } from 'enzyme';
import Posts from './PostsPage';
import Post from './Post';

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
    const searchFilterFieldElementAttributes = wrapper.find('input').props();
    expect(searchFilterFieldElementAttributes.placeholder).toBe('Type here');
    expect(searchFilterFieldElementAttributes.type).toBe('text');
  });

  it('Has a filter button', () => {
    const filterButtonElementAttributes = wrapper.find('button#searchFilterButton');
    expect(filterButtonElementAttributes.text()).toBe('Filter');
  });

  it('Has posts', () => {
    const mockedPosts = [
      {
        'title': 'title 1',
        'body': 'body 1'
      },
      {
        'title': 'title 2',
        'body': 'body 2'
      },
      {
        'title': 'title 3',
        'body': 'body 3'
      }
    ];

    wrapper.setState({ posts: mockedPosts });
    const posts = wrapper.find(Post);

    expect(posts).toHaveLength(3);

    posts.forEach((post, index) => {
      expect(post.props()).toStrictEqual(mockedPosts[index]);
    });
  });
});