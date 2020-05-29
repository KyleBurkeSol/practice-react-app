import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login tests', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  it('Has a welcome header', () => {
    const welcomeHeaderElement = wrapper.find('h1').text();
    expect(welcomeHeaderElement).toBe('Welcome!');
  });

  it('Has a username field', () => {
    const usernameFieldElementAttributes = wrapper.find('input#usernameField').props();
    expect(usernameFieldElementAttributes.placeholder).toBe('Your name');
    expect(usernameFieldElementAttributes.type).toBe('text');
  });

  it('Has a password field', () => {
    const passwordFieldElementAttributes = wrapper.find('input#passwordField').props();
    expect(passwordFieldElementAttributes.placeholder).toBe('Your password');
    expect(passwordFieldElementAttributes.type).toBe('password');
  });

  it('Has a login button', () => {
    const loginButtonElementAttributes = wrapper.find('button#loginButton');
    expect(loginButtonElementAttributes.text()).toBe('Log in');
  });
});