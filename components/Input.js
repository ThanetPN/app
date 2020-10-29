import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export function Input({ style, ...props }) {
    return (
        <TextInput
            {...props}
            style={[styles.input, style]}
            placeholderTextColor={'darkgray'}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#fff',
        width: '80%',
        padding: 10,
        borderRadius: 8,
        color: 'black',
        borderWidth: 1,
    },
});