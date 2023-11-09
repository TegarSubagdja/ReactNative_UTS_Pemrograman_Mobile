import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../constant/Colors'; // Import Colors from your file

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState('');

  const convertCurrency = () => {
    // Replace this with a real currency conversion API or logic
    const conversionRate = 0.85; // Example conversion rate (USD to EUR)
    const result = parseFloat(amount) * conversionRate;
    setConvertedAmount(result.toFixed(2).toString());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Currency Converter</Text>
      <TextInput
        style={styles.input}
        placeholder="Amount"
        value={amount}
        onChangeText={(text) => setAmount(text)}
        keyboardType="numeric"
      />
      <View style={styles.currencyRow}>
        <TextInput
          style={styles.currencyInput}
          placeholder="From Currency"
          value={fromCurrency}
          onChangeText={(text) => setFromCurrency(text)}
        />
        <TextInput
          style={styles.currencyInput}
          placeholder="To Currency"
          value={toCurrency}
          onChangeText={(text) => setToCurrency(text)}
        />
      </View>
      <TouchableOpacity
        style={styles.convertButton}
        onPress={convertCurrency}
      >
        <Text style={styles.convertButtonText}>Convert</Text>
      </TouchableOpacity>
      <Text style={styles.resultText}>
        {amount} {fromCurrency} is {convertedAmount} {toCurrency}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: Colors.white,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    backgroundColor: Colors.grayLight,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    color: Colors.dark,
  },
  currencyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  currencyInput: {
    flex: 1,
    backgroundColor: Colors.grayLight,
    borderRadius: 8,
    padding: 12,
    marginRight: 8,
    color: Colors.dark,
  },
  convertButton: {
    backgroundColor: Colors.primary,
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 16,
  },
  convertButtonText: {
    fontSize: 18,
    color: Colors.white,
  },
  resultText: {
    fontSize: 20,
    color: Colors.grayLight,
    textAlign: 'center',
    marginTop: 16,
  },
});

export default CurrencyConverter;
