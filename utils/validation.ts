import { Transaction } from '../navigation/AppNavigator';

export const validateTransaction = (transaction: Transaction): string | null => {
  if (!transaction.date) return 'Date is required';
  if (!transaction.amount) return 'Amount is required';
  if (!transaction.description) return 'Description is required';
  if (!transaction.location) return 'Location is required';
  if (!transaction.type) return 'Transaction type is required';
  if (!transaction.category) return 'Category is required';
  return null;
};