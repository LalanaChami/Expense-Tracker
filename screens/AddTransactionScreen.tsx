import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTransaction } from '../store/actions';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList, Transaction } from '../navigation/AppNavigator';
import { validateTransaction } from '../utils/validation';

const AddTransactionScreen: React.FC = () => {
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleAddTransaction = () => {
    const transaction: Transaction = {
      id: new Date().getTime(), // Example ID
      date,
      amount,
      description,
      location,
      type,
      category,
    };

    const validationError = validateTransaction(transaction);

    if (validationError) {
      alert(validationError);
    } else {
      // dispatch(addTransaction(transaction));
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Transaction</Text>
      <TextInput
        style={styles.input}
        placeholder="Date"
        value={date}
        onChangeText={setDate}
        placeholderTextColor="#003092"
      />
      <TextInput
        style={styles.input}
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
        placeholderTextColor="#003092"
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        placeholderTextColor="#003092"
      />
      <TextInput
        style={styles.input}
        placeholder="Location"
        value={location}
        onChangeText={setLocation}
        placeholderTextColor="#003092"
      />
      <TextInput
        style={styles.input}
        placeholder="Transaction Type"
        value={type}
        onChangeText={setType}
        placeholderTextColor="#003092"
      />
      <TextInput
        style={styles.input}
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
        placeholderTextColor="#003092"
      />
      <Button title="Add Transaction" onPress={handleAddTransaction} color="#00879E" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#FFF2DB',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    color: '#003092',
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#003092',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 5,
    backgroundColor: '#FFF2DB',
    color: '#003092',
  },
});

export default AddTransactionScreen;