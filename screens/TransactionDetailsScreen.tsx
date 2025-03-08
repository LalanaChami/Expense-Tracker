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
      {/* <Text style={styles.title}>Transaction Details</Text> */}
      <Text style={styles.detail}>Date: {transaction.date}</Text>
      <Text style={styles.detail}>Amount: ${transaction.amount}</Text>
      <Text style={styles.detail}>Description: {transaction.description}</Text>
      <Text style={styles.detail}>Location: {transaction.location}</Text>
      <Text style={styles.detail}>Type: {transaction.type}</Text>
      <Text style={styles.detail}>Category: {transaction.category}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFF2DB',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    color: '#003092',
    textAlign: 'center',
  },
  detail: {
    fontSize: 18,
    marginBottom: 8,
    color: '#00879E',
  },
});

export default TransactionDetailsScreen;