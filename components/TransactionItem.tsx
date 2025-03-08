import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList, Transaction } from '../navigation/AppNavigator';

type TransactionItemProps = {
  transaction: Transaction;
};

const TransactionItem: React.FC<TransactionItemProps> = ({ transaction }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handlePress = () => {
    navigation.navigate('TransactionDetails', { transaction });
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.item}>
      <Text style={styles.description}>{transaction.description}</Text>
      <Text style={styles.amount}>${transaction.amount}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#003092',
    backgroundColor: '#FFF2DB',
  },
  description: {
    fontSize: 18,
    color: '#003092',
  },
  amount: {
    fontSize: 16,
    color: '#FFAB5B',
  },
});

export default TransactionItem;