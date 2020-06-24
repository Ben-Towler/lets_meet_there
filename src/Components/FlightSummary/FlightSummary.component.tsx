import React from 'react';
import { StyledFlightSummary } from './Styles';
import {Location} from 'Interfaces/Location';

interface Props {
  location: Location
}

function FlightSummary ({ location }: Props): JSX.Element {

  return (
    <StyledFlightSummary>
      {location.city}
      {location.country}
    </StyledFlightSummary>
  );
  
}

export default FlightSummary;
