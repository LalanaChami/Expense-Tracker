import { AnyAction } from 'redux';
import { ADD_TRANSACTION, TransactionActionTypes } from './actions';
import { Transaction } from '../navigation/AppNavigator';

interface AppState {
  transactions: Transaction[];
}

const initialState: AppState = {
  transactions: [],
};

const reducer = (state = initialState, action: AnyAction): AppState => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;