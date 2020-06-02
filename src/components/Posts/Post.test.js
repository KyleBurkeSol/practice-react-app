import React from 'react';
import { shallow } from 'enzyme';
import Post from './Post';

describe('Post', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Post />);
  });

  it('Renders a day date', () => {
    const dayElement = wrapper.find({'data-testid': 'day'});
    expect(dayElement.text()).toBe('28');
  });

  it('Renders a month date', () => {
    const monthElement = wrapper.find({'data-testid': 'month'});
    expect(monthElement.text()).toBe('JAN');
  });

  it('Renders a post title', () => {
    wrapper.setProps({ title: 'post title' });
    const titleElement = wrapper.find({'data-testid': 'title'});
    expect(titleElement.text()).toBe('post title');
  });

  it('Renders a post content', () => {
    wrapper.setProps({ body: 'post body' });
    const titleElement = wrapper.find({'data-testid': 'content'});
    expect(titleElement.text()).toBe('post body');
  });
});