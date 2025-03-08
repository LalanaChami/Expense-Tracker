import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTransaction } from '../store/actions';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList, Transaction } from '../navigation/AppNavigator';
import { validateTransaction } from '../utils/validation';
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from '@react-native-picker/picker';

const AddTransactionScreen: React.FC = () => {
  const [date, setDate] = useState(new Date());
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('Debit');
  const [category, setCategory] = useState('Food');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleAddTransaction = () => {
    if (isNaN(Number(amount))) {
      Alert.alert('Validation Error', 'Amount should be a number');
      return;
    }

    const transaction: Transaction = {
      id: new Date().getTime(), // Example ID
      date: date.toISOString(),
      amount,
      description,
      location,
      type,
      category,
    };

    const validationError = validateTransaction(transaction);

    if (validationError) {
      Alert.alert('Validation Error', validationError);
    } else {
      dispatch(addTransaction(transaction));
      navigation.goBack();
    }
  };

  const handleDateChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Date</Text>
      <TouchableOpacity style={styles.dateButton} onPress={() => setShowDatePicker(true)}>
        <Text style={styles.dateButtonText}>{date.toDateString()}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
      <Text style={styles.label}>Amount</Text>
      <TextInput
        style={styles.input}
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        placeholderTextColor="#003092"
      />
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        placeholderTextColor="#003092"
      />
      <Text style={styles.label}>Location</Text>
      <TextInput
        style={styles.input}
        placeholder="Location"
        value={location}
        onChangeText={setLocation}
        placeholderTextColor="#003092"
      />
      <Text style={styles.label}>Transaction Type</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={type}
          onValueChange={(itemValue) => setType(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Debit" value="Debit" />
          <Picker.Item label="Credit" value="Credit" />
          <Picker.Item label="Cash" value="Cash" />
        </Picker>
      </View>
      <Text style={styles.label}>Category</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={category}
          onValueChange={(itemValue) => setCategory(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Food" value="Food" />
          <Picker.Item label="Transport" value="Transport" />
          <Picker.Item label="Entertainment" value="Entertainment" />
          <Picker.Item label="Shopping" value="Shopping" />
          <Picker.Item label="Health" value="Health" />
          <Picker.Item label="Other" value="Other" />
        </Picker>
      </View>
      <TouchableOpacity style={styles.addButton} onPress={handleAddTransaction}>
        <Text style={styles.addButtonText}>Add Transaction</Text>
      </TouchableOpacity>
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
  input: {
    height: 50,
    borderColor: '#003092',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 5,
    backgroundColor: '#FFF2DB',
    color: '#003092',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#003092',
  },
  pickerContainer: {
    height: 50,
    borderColor: '#003092',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    backgroundColor: '#FFF2DB',
    justifyContent: 'center',
  },
  picker: {
    height: 50,
    color: '#003092',
  },
  dateButton: {
    height: 50,
    backgroundColor: '#003092',
    justifyContent: 'center',
    borderRadius: 5,
    marginBottom: 12,
  },
  dateButtonText: {
    color: '#FFF2DB',
    textAlign: 'center',
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#00879E',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  addButtonText: {
    color: '#FFF2DB',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default AddTransactionScreen;