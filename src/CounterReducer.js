const CounterReducer = (state,action) => {
    switch (action) {
      case 'INCREMENT':
        return state + 1;
          // eslint-disable-next-line
        break;
      case 'DECREMENT':
        return state - 1;
          // eslint-disable-next-line
        break;
        default :
         return "please enter valid action";

    }
}

export default CounterReducer;
