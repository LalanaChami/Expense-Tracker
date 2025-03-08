import { Transaction } from '../navigation/AppNavigator';

export const ADD_TRANSACTION = 'ADD_TRANSACTION';

export interface AddTransactionAction {
  type: typeof ADD_TRANSACTION;
  payload: Transaction;
}

export type TransactionActionTypes = AddTransactionAction;

export const addTransaction = (transaction: Transaction) => {
  return {
    type: ADD_TRANSACTION,
    payload: transaction,
  };
};