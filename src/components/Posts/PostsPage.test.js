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

  it('Has a correct initial state', () => {
    axios.get.mockResolvedValue({ data: [] });
    const wrapper = shallow(<Posts />);
    expect(wrapper.state()).toStrictEqual({ posts: [], filter: '' });
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

    const props = [
      {
        'title': 'title 1',
        'body': 'body 1',
        'filterStart': 0,
        'filterLength': 0
      },
      {
        'title': 'title 2',
        'body': 'body 2',
        'filterStart': 0,
        'filterLength': 0
      },
      {
        'title': 'title 3',
        'body': 'body 3',
        'filterStart': 0,
        'filterLength': 0
      }
    ];

    posts.forEach((post, index) => {
      expect(post.props()).toStrictEqual(props[index]);
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

  it('Filters posts', () => {
    axios.get.mockResolvedValue({ data: [] });
    const wrapper = shallow(<Posts />);

    // Set the state of the compotnent to have 3 posts
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

    // Check 3 posts are being rendered
    let props = [
      {
        'title': 'title 1',
        'body': 'body 1',
        'filterStart': 0,
        'filterLength': 0
      },
      {
        'title': 'title 2',
        'body': 'body 2',
        'filterStart': 0,
        'filterLength': 0
      },
      {
        'title': 'title 3',
        'body': 'body 3',
        'filterStart': 0,
        'filterLength': 0
      }
    ];
    let posts = wrapper.find(Post);
    expect(posts).toHaveLength(3);
    posts.forEach((post, index) => {
      expect(post.props()).toStrictEqual(props[index]);
    });

    // Set the state of the compotent to have a filter of 'title 1'
    wrapper.setState({ filter: 'title 3' });

    // Check the post with a title of 'title 3' is rendered
    posts = wrapper.find(Post);
    expect(posts).toHaveLength(1);
    props = {
      'title': 'title 3',
      'body': 'body 3',
      'filterStart': 0,
      'filterLength': 7
    };
    expect(posts.first().props()).toStrictEqual(props);
  });

  it('Sets the filter when you type in the filter field', () => {
    axios.get.mockResolvedValue({ data: [] });
    const wrapper = shallow(<Posts />);
    
    // Check the filter is ''
    expect(wrapper.state().filter).toBe('');

    // Simulate typing in the filter field
    wrapper.find('input').simulate('change', { target: { value: 'hello' } });

    // Check the state is changed
    expect(wrapper.state().filter).toBe('hello');
  });
});