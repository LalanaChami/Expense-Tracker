import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
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
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
      
      <FlatList
        data={transactions}
        renderItem={({ item }) => (
          <TransactionItem transaction={item} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddTransaction}>
        <Text style={styles.addButtonText}>Add Transaction</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
    backgroundColor: '#FFF2DB',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#003092',
    padding: 16,
    // borderRadius: 5,
  },
  title: {
    fontSize: 24,
    color: '#FFF2DB',
  },
  logoutButton: {
    backgroundColor: '#FFAB5B',
    padding: 10,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: '#FFF2DB',
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#00879E',
    margin: 10,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFF2DB',
    fontSize: 16,
  },
});

export default DashboardScreen;