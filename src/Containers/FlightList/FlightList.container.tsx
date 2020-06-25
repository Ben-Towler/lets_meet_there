import React from 'react';
import { Trip } from 'Components';
import { Flight } from 'Interfaces/Flight';
import { User } from 'Interfaces/User';
import { StyledFlightList } from './Styles';

interface Props {
  matchedFlights?: any;
  user?: User;
}

function FlightList ({ matchedFlights, user }: Props): JSX.Element {
  return (
    <StyledFlightList>
      <div>
        <div className="tile_Container">
          {matchedFlights.map((flight: any) => (
            <React.Fragment key={flight[0] + 1}>
              <Trip
                user={user}
                key={flight[0]}
                yourFlight={flight[1][0][0]}
                friendsFlight={flight[2][0][0]}
                location={flight[0]}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </StyledFlightList>
  );
};

export default FlightList;
