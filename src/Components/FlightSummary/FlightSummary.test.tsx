import React from 'react';
import renderer from 'react-test-renderer';
import FlightSummary from './FlightSummary.component';
import {Location} from 'Interfaces/Location';
 
describe('Flight Summary', () => {
  let location: Location;

  beforeEach(() => {
    location = {
      city: 'Barcelona',
      country: 'Spain'
    }
  });

  test('snapshot renders', () => {
    const component = renderer.create(
    <FlightSummary
      location={location}
    />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});