import React, { useState } from 'react';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';
import './locationSearch.css';

import {Fields} from '../Form/Form.component';

interface Props {
  onChange: Function;
  name: string;
  field: Fields;
}

export default function LocationSearch({ onChange, name, field }: Props): JSX.Element {

  const [location, setLocation] = useState('');

  const handleLocationChange = (location: string) => {
    setLocation(location);
  };

  const handleLocationSelect = (location: string) => {

    setLocation(location);
  
    geocodeByAddress(location)
      .then((results) => { 
        onChange(name, results[0].formatted_address) })
      .catch(error => console.log('Error fetching location', error))
 
  };

  const searchOptions = {
    types: ['(cities)'], 
  }

  interface Suggestions {
    id: string,
    description: string,
    placeId: string,
    active: Boolean,
    index: number,
    formattedSuggestion: {
      mainText: string,
      secondaryText: string
    },
    matchedSubstrings: {length: number, offset: number}[],
    terms: {offset: number, value: string}[],
    types: string[]
  }

  interface RenderInput {
    getInputProps: Function,
    getSuggestionItemProps: Function,
    suggestions: any
  }

  const renderInput = ({ getInputProps, getSuggestionItemProps, suggestions }: RenderInput): JSX.Element => (
    <div className="autocomplete-root">
      <input className="form-control" {...field} {...getInputProps()} />
      <div className="autocomplete-dropdown-container">

        {suggestions.map((suggestion: Suggestions): JSX.Element => (
          <div {...getSuggestionItemProps(suggestion)} className="suggestion">
            <span>{suggestion.description}</span>
          </div>
        ))}
        
      </div>
    </div>
  );

  return (
    <div>
      <PlacesAutocomplete
        value={location} 
        // name={name}
        onChange={handleLocationChange}
        onSelect={handleLocationSelect}
        searchOptions={searchOptions}
        >

        {renderInput}

      </PlacesAutocomplete>
    </div>
  )
};
