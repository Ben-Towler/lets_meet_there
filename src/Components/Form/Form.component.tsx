import React, { useState } from 'react';
import { StyledForm, } from './Styles';
import { Button } from 'Components';
import moment from 'moment';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import {LocationSearch} from 'Components';



interface Props {
  showDateRange? : any;
  onSubmit?: any;
  hasError?: any;
  fields?: any;
}



interface FormData {
  location?: any;
  destination?: any;
  startDate?: any;
  endDate?: any;
}

function Form ({showDateRange, onSubmit, hasError, fields}: Props): JSX.Element {
  const [focus, setFocus] = useState(null);
  const [formData, setFormData] = useState<FormData>({location: null, destination: null});
  const [isFormComplete, setIsFormComplete] = useState(false);


  const [formDates, setFormDates] = useState<FormData>({
    startDate: null,
    endDate: null,
  });

  function handleChange (name, googleLocation) {
    let parsedLoc = googleLocation.split(', ');
    const fields = {...formData};
    fields[name] = parsedLoc[0];
    
    setFormData(fields);
    isFormValid(formData)
  }
  
  function isFormValid (fields) {
    for (let i = 0; i < fields.length - 1; i++) {
     if (fields[i].length === 0) {
       setIsFormComplete(false);
     };
    }
    setIsFormComplete(true);
  }

  function handleSubmit (e) {
    e.preventDefault();

    if (isFormComplete) {
      const formCriteria: FormData = {
        ...formData,
      }

      if (showDateRange) {
        formCriteria.startDate = formatDate(formDates.startDate);
        formCriteria.endDate = formatDate(formDates.endDate);
      }

      onSubmit(formCriteria);
    }
  }

  function renderFields (fields) {
    return fields.map ( function (field) {
      return (
        <LocationSearch 
          key={field.name}
          name={field.name}
          field={ field } 
          onChange={handleChange} 
        /> 
      )
    })
  }

  function formatDate (date) {
    const formatted = moment(date).format('YYYY MM DD');
    return formatted.split(' ').join('-');
  }

  return (
    <StyledForm data-testid="form" onSubmit={(e) => handleSubmit(e)}>
      {hasError ? 'Error' : null}

      {renderFields(fields)}

      {showDateRange ?
        <DateRangePicker
          startDate={formDates.startDate}
          startDateId="startDate"
          endDate={formDates.endDate} 
          endDateId="endDate"
          onDatesChange={
            function ({ startDate, endDate }) {
              setFormDates({ startDate, endDate })
            }
          }
          showClearDates={true}
          focusedInput={focus}
          onFocusChange={(focus) => {
            setFocus(focus);
          }}
        /> : null
      }

      <Button type="submit">Submit</Button>
    </StyledForm>
  )
}

export default Form;
