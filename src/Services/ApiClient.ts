import {Flight} from 'Interfaces/Flight';
import { Place } from 'Interfaces/Place';
import { Carrier } from 'Interfaces/Carrier';

export let fetchRequest = (url: string, options: any, testFetch?: Function) => {
  return !testFetch ? fetch(url, options)
    .then((res) => (res.status <= 400 ? res : Promise.reject(res)))
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
    }) : testFetch(url, options)
};

export function getFlights(origin: string, outbound: string, inbound: string, testFetch?: Function) {
  
  return !testFetch ? fetchRequest(
    `${process.env.REACT_APP_BROWSE_QUOTES}${origin}/anywhere/${outbound}/${inbound}`,
    {
      method: 'GET',
      headers: {
        'x-rapidapi-host': process.env.REACT_APP_API_HOST,
        'x-rapidapi-key': process.env.REACT_APP_API_KEY,
      },
    }
  ).then((data: {Quotes: Flight[], Places: Place[], Carriers: Carrier[]}) => {
    const quote = {
      quotes: data.Quotes,
      places: data.Places,
      carriers: data.Carriers,
    };
    return quote;
  }) : testFetch();
}

export function getPlace (query: string, testFetch?: Function) {
  return !testFetch ? fetchRequest(`${process.env.REACT_APP_AUTOSUGGEST}${query}`, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': process.env.REACT_APP_API_HOST,
      'x-rapidapi-key': process.env.REACT_APP_API_KEY,
    },
  }) : testFetch();
}

export async function getFavFlights (origin: string, destination: string, outbound: string, inbound: string, testFetch?: Function) {
  return !testFetch ? fetchRequest(
    `${process.env.REACT_APP_BROWSE_QUOTES}${origin}/${destination}/${outbound}/${inbound}`,
    {
      method: 'GET',
      headers: {
        'x-rapidapi-host': process.env.REACT_APP_API_HOST,
        'x-rapidapi-key': process.env.REACT_APP_API_KEY,
      },
    }
  ).then((data: {Quotes: Flight[], Places: Place[], Carriers: Carrier[]}) => {
    const quote = {
      quotes: data.Quotes,
      places: data.Places,
      carriers: data.Carriers,
    };
    return quote;
  }) : testFetch();
}
 
