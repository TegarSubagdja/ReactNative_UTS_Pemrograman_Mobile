import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constant/Colors'; // Import Colors from your file

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handlePress = (value) => {
        if (value === '=') {
            try {
                const calculatedResult = eval(input);
                setResult(calculatedResult.toString());
            } catch (error) {
                setResult('Error');
            }
        } else if (value === 'C') {
            setInput('');
            setResult('');
        } else {
            setInput(input + value);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.heading}>
                <Text style={styles.h1}>Calculator</Text>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputText}>{input}</Text>
                <Text style={styles.resultText}>{result}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.row}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handlePress('7')}
                    >
                        <Text style={styles.buttonText}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handlePress('8')}
                    >
                        <Text style={styles.buttonText}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handlePress('9')}
                    >
                        <Text style={styles.buttonText}>9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handlePress('/')}
                    >
                        <Text style={styles.buttonText}>/</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handlePress('4')}
                    >
                        <Text style={styles.buttonText}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handlePress('5')}
                    >
                        <Text style={styles.buttonText}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handlePress('6')}
                    >
                        <Text style={styles.buttonText}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handlePress('*')}
                    >
                        <Text style={styles.buttonText}>*</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handlePress('1')}
                    >
                        <Text style={styles.buttonText}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handlePress('2')}
                    >
                        <Text style={styles.buttonText}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handlePress('3')}
                    >
                        <Text style={styles.buttonText}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handlePress('-')}
                    >
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handlePress('0')}
                    >
                        <Text style={styles.buttonText}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handlePress('.')}
                    >
                        <Text style={styles.buttonText}>.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handlePress('=')}
                    >
                        <Text style={styles.buttonText}>=</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handlePress('+')}
                    >
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handlePress('C')}
                    >
                        <Text style={styles.buttonText}>C</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: "flex-end",
        backgroundColor: Colors.dark,
    },
    inputContainer: {
        backgroundColor: Colors.white,
        padding: 16,
        borderRadius: 8,
        marginBottom: 16,
    },
    inputText: {
        fontSize: 24,
        color: Colors.dark,
    },
    resultText: {
        fontSize: 32,
        color: Colors.primary,
        marginTop: 8,
    },
    buttonContainer: {
        backgroundColor: Colors.graySecondary,
        borderRadius: 8,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button: {
        flex: 1,
        padding: 16,
        alignItems: 'center',
        backgroundColor: Colors.primary,
        margin: 4,
        borderRadius: 8,
    },
    buttonText: {
        fontSize: 24,
        color: Colors.white,
    },
    buttonClear: {
        color: Colors.danger
    },
    h1: {
        color: Colors.white,
        fontSize: 30
    },
    heading: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 50,
    },
});

export default Calculator;
