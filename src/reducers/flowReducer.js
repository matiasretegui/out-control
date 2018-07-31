const flowReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_FLOW':
      return state.concat([action.data]);
    default:
      return state;
  }
}

export default flowReducer;