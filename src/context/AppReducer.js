export default (state, action) => {
  console.log(state.list)
  switch(action.type) {
    case 'DELETE_LIST':
      return {
        ...state,
        list: state.list.filter(l => l.id !== action.payload)
      }
    case 'ADD_LIST':
      return {
        ...state,
        list: [action.payload, ...state.list]
      }
    default:
      return state;
  }
}