import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native';

export default class LoginForm extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="rgba(52, 73, 94, 0.6)"
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="username or email"></TextInput>
                <TextInput
                    style={styles.input}
                    returnKeyType="go"
                    placeholderTextColor="rgba(52, 73, 94, 0.6)"
                    secureTextEntry
                    placeholder="password"
                    ref={(input) => this.passwordInput = input}></TextInput>

                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(26, 188, 156, 0.8)',
        marginBottom: 10,
        color: '#2c3e50',
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },
    buttonContainer: {
        paddingVertical: 15,
        backgroundColor: '#bdc3c7'
    },
    buttonText: {
        textAlign: 'center',
        color: '#8e44ad',
        fontWeight: '700'
    }
});