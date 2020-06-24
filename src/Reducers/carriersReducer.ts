import helpers from '../helpers';


interface Flight {
  Name?: string,
  CarrierId?: number,
}

const carriersReducer = (state = {}, action: {type?: string, quotesA?: Flight[], quotesB?: Flight[]}) => {
  switch (action.type) {
    case 'home/getCarriers':
      return helpers.createDict(action.quotesA, action.quotesB, 'CarrierId');
    default:
      return state;
  }
};

export default carriersReducer;
