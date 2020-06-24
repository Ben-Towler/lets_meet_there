import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPlace as apiGetPlace, getFlights } from 'Services/ApiClient';
import { SearchForm, Spinner } from 'Components';
import { FlightList } from 'Containers';
import helpers from 'helpers';
import { isLoading, getPlaces, getCarriers } from 'Actions';
import { Wrapper, Hero, Title } from './Styles';
import {User} from 'Interfaces/User';
import {GetPlaceResponse} from 'Interfaces/getPlaceResponse';

interface Props {
  currentUser?: User;
}

export default function HomePage({currentUser}: Props): JSX.Element {

  const [matched, setMatched] = useState([]);
  // Redux items
  const loading = useSelector((state: {isLoading: Boolean}) => state.isLoading);
  const dispatch = useDispatch();

  const getPlace = async (query: string) => {
    return apiGetPlace(query).then((res: {Places: GetPlaceResponse[]}) => {
      return helpers.placeId(res, query);
    });
  };

  const searchFlights = async (from1: string, from2: string, departDate: string, returnDate: string) => {
    dispatch(isLoading());
    const quotesA = await getFlights(from1, departDate, returnDate);
    const quotesB = await getFlights(from2, departDate, returnDate);
    dispatch(getPlaces(quotesA.places, quotesB.places)); // dispatch is a redux function that gets the named reducer and sets the state.
    dispatch(getCarriers(quotesA.carriers, quotesB.carriers));
    setMatched(helpers.matchFlights(quotesA, quotesB)); // as this is passed through props fine to leave outside redux.
    dispatch(isLoading());
  };

  return (
    <Wrapper>
      <Hero>
        <Title>Search for a place to meet</Title>
        <SearchForm
          searchFlights={searchFlights}
          getPlace={getPlace}
        />

        {<div>
          {!loading 
            ? <FlightList user={currentUser} matchedFlights={matched}></FlightList>
            : <Spinner />
          }
        </div>}
      </Hero>
    </Wrapper>
  );
};
