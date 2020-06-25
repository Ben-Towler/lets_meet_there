const isLoadingReducer = (state = false, action: {type?: string}) => {
  switch (action.type) {
    case 'home/isLoading':
      return !state;
    default:
      return state;
  }
};

export default isLoadingReducer;
