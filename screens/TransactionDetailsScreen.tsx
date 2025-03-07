import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';

type TransactionDetailsScreenRouteProp = RouteProp<RootStackParamList, 'TransactionDetails'>;

const TransactionDetailsScreen: React.FC = () => {
  const route = useRoute<TransactionDetailsScreenRouteProp>();
  const { transaction } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transaction Details</Text>
      <Text>Date: {transaction.date}</Text>
      <Text>Amount: {transaction.amount}</Text>
      <Text>Description: {transaction.description}</Text>
      <Text>Location: {transaction.location}</Text>
      <Text>Type: {transaction.type}</Text>
      <Text>Category: {transaction.category}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
});

export default TransactionDetailsScreen;