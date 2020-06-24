import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {SearchForm} from 'Components';
import { setupGoogleMock } from '../../Mocks/googleMapsApiMock';

configure({adapter: new Adapter()});

beforeAll(() => {
  setupGoogleMock();
});

describe('Component: SearchForm', () => {

  //TODO: add expected return data from the onSubmit event
  const wrapper: any = shallow(<SearchForm />);

  test.only('it should render correctly', () => {
    const searchFormTree = renderer
      .create(<SearchForm />)
      .toJSON();
    expect(searchFormTree).toMatchSnapshot();
  });

  test('it should submit the form', () => {
    expect(wrapper.handleSubmit).toHaveBeenCalledTimes(1);
  });

});
