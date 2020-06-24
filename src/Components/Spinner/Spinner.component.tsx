import React from 'react';

import './Spinner.styles.css';

function Spinner (): JSX.Element {
  return (
    <div className='spinner-overlay'>
      <div className='spinner-container' />
    </div>
  );
}

export default Spinner;