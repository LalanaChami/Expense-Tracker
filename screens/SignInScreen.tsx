import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';

const SignInScreen: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleSignIn = () => {
    if (username === 'admin' && password === 'admin') {
      navigation.navigate('Dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        placeholderTextColor="#003092"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor="#003092"
      />
      <Button title="Sign In" onPress={handleSignIn} color="#FFAB5B" />
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

export default SignInScreen;