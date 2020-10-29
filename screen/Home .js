import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";

import { SingOutButton } from '../components/SingOutButton';

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
export const Home = ({ navigation }) => {
    return (
        <ScreenContainer>
            <CircleButton
                text="ร้านค้า"
                size={200}
                color="#E9D62E"
                textColor="white"
                fontSize={20}
                margin={10}
                onPress={() => navigation.navigate('CreateShops')}
            />
            <CircleButton
                text="ลูกค้า"
                size={200}
                color="#37E372"
                textColor="white"
                fontSize={20}
                margin={10}
                onPress={() => navigation.navigate('Customers')}
            />
            <SingOutButton
                title={'Sign Out'}
                style={styles.loginButton}
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
        backgroundColor: 'green'
    },
});