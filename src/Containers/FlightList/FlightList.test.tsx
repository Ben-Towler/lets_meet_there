import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow'
import { configure } from 'enzyme';
import {FlightList} from 'Containers';
import Adapter from 'enzyme-adapter-react-16';
import { flightListMock } from '../../Mocks/data.mock';
configure({adapter: new Adapter()});

describe('Flight Tile', () => {

  it('Matches snapshot', () => {
    const renderer = ShallowRenderer.createRenderer();
    const result = renderer.render(
      <FlightList 
        matchedFlights={flightListMock} 
      />
    );
    expect(result).toMatchSnapshot()
  })

});