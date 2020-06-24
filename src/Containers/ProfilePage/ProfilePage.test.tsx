import React from 'react'
import {render} from '@testing-library/react'
import {ProfilePage} from 'Containers';
import { userMocks } from 'Mocks/data.mock';
import { Favourites } from 'Interfaces/User';
 
const mocks = {
  noDataUser: {
    displayName: 'Andrew',
    email: '',
    createdAt: {nanoseconds: 0, seconds: 0},
    id: '',
    favourites: [] as Favourites[]
  }
};

describe('test the profile page load', () => {
  it('should match snapshot and render correctly', () => {
    const { asFragment } = render(<ProfilePage user={userMocks} />);
    
    expect(asFragment()).toMatchSnapshot();
  })
  
  it('Should display the displayName', () => {
    const { queryByText } = render(<ProfilePage user={userMocks} />);
    const display = queryByText('Andrew');
    expect(display).toBeInTheDocument();
  })
  
  it('should tell the user when there are no favourite quotes', () => {
    const { queryByText } = render(<ProfilePage user={mocks.noDataUser} />);
    const noQuotes = queryByText('You have no quotes favourited');
    expect(noQuotes).toBeInTheDocument();
  })

  it('should render differently when favourite data exists', () => {
    const { queryByText } = render(<ProfilePage user={userMocks} />);
    const noQuotes = queryByText('You have no quotes favourited');
    expect(noQuotes).not.toBeInTheDocument();
  })

})

