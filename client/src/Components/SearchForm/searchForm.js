import React, { useState } from 'react';
import './searchForm.css';

const SearchForm = (props) => {
  const initialState = {
    from1: '',
    from2: '',
    departDate: '',
    returnDate: '',
  };
  const [state, setState] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
    console.log(state);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
    const { from1, from2, departDate, returnDate } = state;
    if (from1 && from2 && departDate && returnDate) {
      try {
        props.searchFlights(from1, from2, departDate, returnDate);
        setState(initialState);
      } catch (e) {
        console.log(e);
      }
    } else {
      alert('Please fill all fields');
    }
  };
  const { from1, from2, departDate, returnDate } = state;
  return (
    <div className="form_container">
      <h1>Search for a place to meet</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="from1">From</label>
          <input
            type="text"
            name="from1"
            onChange={handleChange}
            value={from1}
            placeholder="Insert the first location"
          />
        </div>
        <div>
          <label htmlFor="from2">And from</label>
          <input
            type="text"
            name="from2"
            onChange={handleChange}
            value={from2}
            placeholder="Insert the other location"
          />
        </div>
        <div>
          <label htmlFor="departDate">Depart</label>
          <input
            type="text"
            name="departDate"
            onChange={handleChange}
            value={departDate}
            placeholder="Insert departure date"
          />
        </div>
        <div>
          <label htmlFor="returnDate">Return</label>
          <input
            type="text"
            name="returnDate"
            onChange={handleChange}
            value={returnDate}
            placeholder="Insert return date"
          />
        </div>
        <div className="ButtonDiv">
          <button type="submit"> Search Meeting Locations</button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;