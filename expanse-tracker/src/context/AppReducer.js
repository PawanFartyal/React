
export default function AppReducer(state,action){
    const { payload } = action;
  switch (action.type) {
    case "ADD_TRANSACTION": {
      return {
        ...state,
        transactions: [...state.transactions, payload],
      };
    }
    case "DELETE_TRANSACTION": {
      const { payload } = action;
      return {
        ...state,
        transactions: state.transactions.filter((item) => {
          if (item.id === payload) return;
          return item;
        }),
      };
    }
    default:
      return state;
  }
}