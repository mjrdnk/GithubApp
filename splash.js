import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Splash extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>Github App</Text>
                </View>
                <View>
                    <Text style={styles.subtitle}>Powered by react-native</Text>
                </View>
            </View>
        );
    }
}

styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#8e44ad',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: '#FFF',
        fontSize: 31,
        fontWeight: 'bold',
    },
    subtitle: {
        color: '#FFF',
        fontWeight: '200',
        paddingBottom: 20
    },
    titleWrapper: {
        justifyContent: 'center',
        flex: 1,
    }
});