import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { AuthContext } from "../context";
export function SingOutButton({ title, style, onPress }) {
    const { signOut } = React.useContext(AuthContext);
    const { colors } = useTheme();
    return (
        <TouchableOpacity
            style={[styles.container, style, { backgroundColor: colors.primary }]}
            onPress={() => signOut()}>
            <Text style={styles.text}>{title.toUpperCase()}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '60%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
        borderRadius: 8,
    },
    text: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16,
    },
});