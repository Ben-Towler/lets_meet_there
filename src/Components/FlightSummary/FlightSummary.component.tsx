import React from 'react';
import { StyledFlightSummary } from './Styles';

interface Props {
  location: any
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
