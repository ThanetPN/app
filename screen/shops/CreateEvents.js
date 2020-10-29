import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, Alert } from "react-native";

import { AuthContext } from "../../context";
import { FilledButton } from '../../components/FilledButton';

const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
);
export const CreateEvents = ({ navigation }) => {
    const { signOut } = React.useContext(AuthContext);

    return (
        <ScreenContainer>
            <Text>ชื่อ: </Text>
            <Text>ลายละเอียดของร้าน: </Text>
            <Text>วัน/เดือน/ป: </Text>
            <FilledButton
                title={'แก้ไข'}
                style={styles.loginButton}
                onPress={() => navigation.toggleDrawer()}
            />
            <FilledButton
                title={'บันทึก'}
                style={styles.loginButton}
                onPress={() => navigation.toggleDrawer()}
            />
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