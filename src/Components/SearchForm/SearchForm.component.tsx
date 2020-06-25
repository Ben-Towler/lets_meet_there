import React, { useState } from 'react';
import { StyledSearchForm } from './Styles';
import { Form } from 'Components';
import {FormData} from 'Interfaces/FormData';

interface Props {
  searchFlights: Function;
  getPlace: Function
}

function SearchForm ({ searchFlights, getPlace }: Props): JSX.Element {
  const [hasError, setHasError] = useState(false);

  async function flightResults (formData: FormData) {
    try {
      const flightData = [
        await getPlace(formData.location),
        await getPlace(formData.destination),
        formData.startDate,
        formData.endDate
      ];
      return await searchFlights(...flightData);
    } catch (err) {
      setHasError(true);
    }
  }

  async function fetchFlightResults (formData: FormData) {
    if (!formData) setHasError(true);
    await flightResults(formData);
  };

  const formFields = [
    {
      key: 'location',
      title: 'Location',
      name: 'location',
      type: 'text',
      placeholder: 'London...'
    },
    {
      key: 'destination',
      title: 'Destination',
      name: 'destination',
      type: 'text',
      placeholder: 'Barcelona...'
    }
  ]

  return (
    <StyledSearchForm>
      <Form
        key="searchflights"
        fields={formFields}
        hasError={hasError}
        showDateRange={true}
        onSubmit={fetchFlightResults}
      />
    </StyledSearchForm>
  );
};

export default SearchForm;
