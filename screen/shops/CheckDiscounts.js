import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, Alert } from "react-native";

import { AuthContext } from "../../context";
import { FilledButton } from '../../components/FilledButton';

const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
);
const CircleButton = props => (
    <TouchableOpacity
        style={{
            margin: props.margin,
            height: props.size,
            width: props.size,
            backgroundColor: props.color,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: props.size * 2,
        }}
        onPress={props.onPress}>
        <Text style={{ color: props.textColor, fontSize: props.fontSize }}>
            {props.text}
        </Text>
    </TouchableOpacity>
);

export const CheckDiscounts = ({ navigation }) => {
    const { signOut } = React.useContext(AuthContext);

    return (
        <ScreenContainer>
            <Text>ชื่อ : </Text>
            <CircleButton
                text="Point"
                size={200}
                color="#BEEB5F"
                textColor="white"
                fontSize={20}
                margin={10}
                onPress={() => navigation.navigate('CreateShops')}
            />
            <Text>ประวัติการแลก Point : </Text>
            <Text>1. ชานมไข่มุก     27/02/2563 </Text>
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