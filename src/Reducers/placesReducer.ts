import helpers from '../helpers';
import { PlaceJourney } from 'Interfaces/PlaceJourney';

const placesReducer = (state = {}, action: {type: string, quotesA: PlaceJourney[], quotesB: PlaceJourney[]}) => {
  switch (action.type) {
    case 'home/getPlaces':
      return helpers.createDict(action.quotesA, action.quotesB, 'PlaceId');
    default:
      return state;
  }
};

export default placesReducer;
