import React from 'react';
import App from './App';
import { ProfilePage, Home } from 'Containers';
import { Provider } from 'react-redux';
import ShallowRenderer from 'react-test-renderer/shallow';
import { shallow, configure, mount } from 'enzyme';
import { Route } from 'react-router-dom';
import { MemoryRouter } from 'react-router';
import configureStore from 'redux-mock-store'
import Adapter from 'enzyme-adapter-react-16';
import { setupGoogleMock } from './Mocks/googleMapsApiMock';
import {userMocks} from 'Mocks/data.mock';

configure({adapter: new Adapter()});

beforeAll(() => {
  setupGoogleMock();
});




describe('App', () => {
  let store = configureStore()({});

  beforeEach(() => {
    store = configureStore()({});
  })

  describe('App Matches Snapshot', () => {
    test('snapshot matches', () => {
      const renderer = ShallowRenderer.createRenderer();
      const result = renderer.render(
        <Provider store={store}>
          <App />
        </Provider>
      )
      expect(result).toMatchSnapshot()
    });
  });

  describe('It renders without crashing', () => {
    test('renders without crashing', () => {
      shallow(<App />);
     });
  });

  test('/ path should render home container', () => {
    const wrapper = mount (
      <MemoryRouter initialEntries={[ '/' ]}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );
    expect(wrapper.find(Home)).toHaveLength(1);
  });

  test('/profile should render profile container', async () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/profile']}>
        <Provider store={store}> 
          <Route path="/profile" render={() => <ProfilePage user={userMocks} />} />
        </Provider>
      </MemoryRouter>
    );
    expect(wrapper.find(ProfilePage).html());
  });
});
