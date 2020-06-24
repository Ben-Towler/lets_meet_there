import React from 'react';
import { Trip } from 'Components';

interface Props {
  matchedFlights?: any;
  user?: any;
}

function FlightList ({ matchedFlights, user }: Props): JSX.Element {
  return (
    <div>
      <div className="tile_Container">
        {matchedFlights.map((flight) => (
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
  );
};

export default FlightList;