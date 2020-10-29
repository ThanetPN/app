import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, Alert } from "react-native";

import { FilledButton } from '../../components/FilledButton';

const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
);
export const CreateSpin = ({ navigation }) => {

    return (
        <ScreenContainer>

        </ScreenContainer>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#fff',
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 10,
        borderRadius: 5
    },
    text: {
        fontSize: 30,
        fontFamily: "SemiBold",
        alignSelf: "center",
    },
    loginButton: {
        marginVertical: 10,
    },
});