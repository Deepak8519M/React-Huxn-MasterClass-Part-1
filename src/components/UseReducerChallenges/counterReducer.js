const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    case "incrementByNo":
      return { count: state.count + action.payload };

    case "decrementByNo":
      return { count: state.count - action.payload };

    default:
      return state;
  }
};

export default reducer;
