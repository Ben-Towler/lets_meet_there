import {PlaceJourney} from './PlaceJourney';

export interface Place {
  inbound: {
    origin: PlaceJourney,
    destination: PlaceJourney
  },
  outbound: {
    origin: PlaceJourney,
    destination: PlaceJourney
  }
}