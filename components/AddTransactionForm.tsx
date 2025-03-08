// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
// import { useDispatch } from 'react-redux';
// import { addTransaction } from '../store/actions';
// import { validateTransaction } from '../utils/validation';
// import { useNavigation, NavigationProp } from '@react-navigation/native';
// import { RootStackParamList, Transaction } from '../navigation/AppNavigator';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import { Picker } from '@react-native-picker/picker';

// const AddTransactionForm: React.FC = () => {
//   const [date, setDate] = useState(new Date());
//   const [amount, setAmount] = useState('');
//   const [description, setDescription] = useState('');
//   const [location, setLocation] = useState('');
//   const [type, setType] = useState('Debit');
//   const [category, setCategory] = useState('Food');
//   const [showDatePicker, setShowDatePicker] = useState(false);
//   const dispatch = useDispatch();
//   const navigation = useNavigation<NavigationProp<RootStackParamList>>();

//   const handleAddTransaction = () => {
//     const transaction: Transaction = {
//       id: new Date().getTime(), // Example ID
//       date: date.toISOString(),
//       amount,
//       description,
//       location,
//       type,
//       category,
//     };

//     const validationError = validateTransaction(transaction);

//     if (validationError) {
//       Alert.alert('Validation Error', validationError);
//     } else {
//       dispatch(addTransaction(transaction));
//       navigation.goBack();
//     }
//   };

//   const handleDateChange = (event: any, selectedDate?: Date) => {
//     const currentDate = selectedDate || date;
//     setShowDatePicker(false);
//     setDate(currentDate);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Add Transaction</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Amount"
//         value={amount}
//         onChangeText={setAmount}
//         keyboardType="numeric"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Description"
//         value={description}
//         onChangeText={setDescription}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Location"
//         value={location}
//         onChangeText={setLocation}
//       />
//       <Text style={styles.label}>Transaction Type</Text>
//       <Picker
//         selectedValue={type}
//         onValueChange={(itemValue) => setType(itemValue)}
//         style={styles.picker}
//       >
//         <Picker.Item label="Debit" value="Debit" />
//         <Picker.Item label="Credit" value="Credit" />
//         <Picker.Item label="Cash" value="Cash" />
//       </Picker>
//       <Text style={styles.label}>Category</Text>
//       <Picker
//         selectedValue={category}
//         onValueChange={(itemValue) => setCategory(itemValue)}
//         style={styles.picker}
//       >
//         <Picker.Item label="Food" value="Food" />
//         <Picker.Item label="Transport" value="Transport" />
//         <Picker.Item label="Entertainment" value="Entertainment" />
//         <Picker.Item label="Shopping" value="Shopping" />
//         <Picker.Item label="Health" value="Health" />
//         <Picker.Item label="Other" value="Other" />
//       </Picker>
//       <Text style={styles.label}>Date</Text>
//       <Button title="Pick Date" onPress={() => setShowDatePicker(true)} />
//       {showDatePicker && (
//         <DateTimePicker
//           value={date}
//           mode="date"
//           display="default"
//           onChange={handleDateChange}
//         />
//       )}
//       <Button title="Add Transaction" onPress={handleAddTransaction} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 16,
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 16,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 12,
//     paddingHorizontal: 8,
//   },
//   label: {
//     fontSize: 16,
//     marginBottom: 8,
//   },
//   picker: {
//     height: 50,
//     marginBottom: 12,
//   },
// });

// export default AddTransactionForm;