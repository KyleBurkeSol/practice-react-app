import React from 'react';
import { shallow } from 'enzyme';
import Posts from './PostsPage';
import Post from './Post';
import axios from 'axios';

jest.mock('axios');

describe('Posts page test', () => {
  it('Has a Post header', async () => {
    axios.get.mockResolvedValue({ data: [] });
    const wrapper = shallow(<Posts />);
    const postHeaderElement = wrapper.find('h1').text();
    expect(postHeaderElement).toBe('Posts');
  });

  it('Has a search filter text box', () => {
    axios.get.mockResolvedValue({ data: [] });
    const wrapper = shallow(<Posts />);
    const searchFilterFieldElementAttributes = wrapper.find('input').props();
    expect(searchFilterFieldElementAttributes.placeholder).toBe('Type here');
    expect(searchFilterFieldElementAttributes.type).toBe('text');
  });

  it('Has a filter button', () => {
    axios.get.mockResolvedValue({ data: [] });
    const wrapper = shallow(<Posts />);
    const filterButtonElementAttributes = wrapper.find('button#searchFilterButton');
    expect(filterButtonElementAttributes.text()).toBe('Filter');
  });

  it('Has posts', () => {
    axios.get.mockResolvedValue({ data: [] });
    const wrapper = shallow(<Posts />);
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

  it('Fetches posts', async () => {
    const data = [
      {
        "userId": 1,
        "id": 1,
        "title": "title uno",
        "body": "body uno"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "title dos",
        "body": "body dos"
      },
      {
        "userId": 1,
        "id": 3,
        "title": "title tres",
        "body": "body tres"
      }
    ];

    axios.get.mockResolvedValue({ data: data });
    const wrapper = shallow(<Posts />);

    expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts');
  });
});