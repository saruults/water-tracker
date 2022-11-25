const initialState = {
  dailyGoal: 3800,
  incrementSize: 200,
  recordCount: 0,
  current: 0,
  previous: 0,
};

// Use the initialState as a default value
export default function appReducer(state = initialState, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    case 'INCREMENT': {
      let newCount = state.current + state.incrementSize;
      let newRecord = state.recordCount;
      let previous = state.current;
      if (newCount > state.dailyGoal) {
        newCount -= state.dailyGoal;
        newRecord += 1;
      }
      return {
        ...state,
        recordCount: newRecord,
        current: newCount,
        previous: previous,
      };
    }
    case 'DECREMENT': {
      let previous = state.current;
      let newCurrent = (state.current -= state.incrementSize);
      newCurrent = newCurrent < 0 ? 0 : newCurrent;
      return {
        ...state,
        current: newCurrent,
        previous: previous,
      };
    }
    case 'UPDATE_SETTINGS': {
      const { newGoal, newSize } = action.payload;
      return {
        ...state,
        dailyGoal: parseInt(newGoal),
        incrementSize: parseInt(newSize),
      };
    }
    case 'RESET_RECORD': {
      return {
        ...state,
        recordCount: 0,
      };
    }
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
}
