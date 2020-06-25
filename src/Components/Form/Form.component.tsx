// @ts-nocheck
import React, { useState } from 'react';
import { StyledForm, } from './Styles';
import { Button } from 'Components';
import moment from 'moment';
import 'react-dates/initialize';
import { DateRangePicker, DateRangePickerShape } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import {LocationSearch} from 'Components';
import {FormData} from 'Interfaces/FormData'

export interface Fields {
  key: string;
  title: string;
  name: string;
  type: string;
  placeholder: string;
}

interface Props {
  showDateRange? : boolean;
  onSubmit?: Function
  hasError?: boolean;
  fields?: Fields[];
}

function Form ({showDateRange, onSubmit, hasError, fields}: Props): JSX.Element {
  const [focus, setFocus] = useState(null);
  const [formData, setFormData] = useState<FormData>({location: null, destination: null});
  const [isFormComplete, setIsFormComplete] = useState(false);


  const [formDates, setFormDates] = useState<FormData>({
    startDate: null,
    endDate: null,
  });

  function handleChange (name: string, googleLocation: string) {
    let parsedLoc = googleLocation.split(', ');
    
    const fieldsObj: FormData = {...formData};
    let location = {};
    location[name] = parsedLoc[0];
    
    // console.log("NAME ", name);
    // console.log("LOCATION ", googleLocation);
    console.log('fieldsObj ', fieldsObj);
    console.log('LOCATION ', location);
    setFormData({...fieldsObj, ...location});
    isFormValid(formData)
  }
  
  function isFormValid (fields) {
    console.log('FIELDS', fields);
    for (let i = 0; i < fields.length - 1; i++) {
     if (fields[i].length === 0) {
       setIsFormComplete(false);
     };
    }
    setIsFormComplete(true);
  }

  function handleSubmit (e: Event) {
    
    e.preventDefault();
    
    console.log('HERE');
    if (isFormComplete) {
      console.log('FORM ', isFormComplete);
      const formCriteria: FormData = {
        ...formData,
      }
      
      if (showDateRange) {
        formCriteria.startDate = formatDate(formDates.startDate);
        formCriteria.endDate = formatDate(formDates.endDate);
      }
      console.log('FORM CRITERIA ', formCriteria);
      onSubmit(formCriteria);
    }
  }

  function renderFields (fields: Fields[]) {
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

  function formatDate (date: string) {
    const formatted = moment(date).format('YYYY MM DD');
    return formatted.split(' ').join('-');
  }

  // interface DRP {
  //   startDate: string,
  //   startDateId: string,
  //   endDate: string,
  //   endDateId: string,
  //   onDatesChange: Function,
  //   showClearDates: Boolean,
  //   focusedInput: [] | null
  //   onFocusChange: Function,
  // }

  interface DRP extends DateRangePickerShape {}
  const DRPProps : DRP = {
    startDate: formDates.startDate, 
    startDateId: 'startDate',
    endDate: formDates.endDate ,
    endDateId: 'endDate',
    onDatesChange: function ({ startDate , endDate }: {startDate: string, endDate: string}) {
        setFormDates({ startDate, endDate })
    },
    showClearDates: true,
    focusedInput: focus,
    onFocusChange: (focus: [] | null) => {
      setFocus(focus);
    }
  }
  return (
    <StyledForm data-testid='form' onSubmit={(e) => handleSubmit(e)}>
      {hasError ? 'Error' : null}

      {renderFields(fields)}

      {showDateRange ?
        <DateRangePicker
          {...DRPProps}
        /> : null
      }

      <Button tertiary={true} type="submit">Submit</Button>
    </StyledForm>
  )
}

export default Form;
