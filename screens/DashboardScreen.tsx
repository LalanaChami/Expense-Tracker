import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import TransactionItem from '../components/TransactionItem';
import { RootStackParamList, Transaction } from '../navigation/AppNavigator';

const DashboardScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const transactions = useSelector((state: { transactions: Transaction[] }) => state.transactions);

  const handleAddTransaction = () => {
    navigation.navigate('AddTransaction');
  };

  const handleLogout = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Dashboard</Text>
        <Button title="Logout" onPress={handleLogout} />
      </View>
      <Button title="Add Transaction" onPress={handleAddTransaction} />
      <FlatList
        data={transactions}
        renderItem={({ item }) => (
          <TransactionItem transaction={item} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
  },
});

export default DashboardScreen;