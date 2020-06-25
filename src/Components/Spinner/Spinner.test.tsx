import React from 'react'
import { render } from '@testing-library/react'
import Spinner from './Spinner.component';

describe('test the Spinner', () => {
  it('should match snapshot and render correctly', () => {
    const { asFragment } = render(<Spinner />)
    
    expect(asFragment()).toMatchSnapshot()
  })
})