import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, Alert } from "react-native";

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
export const Customers = ({ navigation }) => {

    return (
        <ScreenContainer>
            <Text>ชื่อร้าน : </Text>
            <CircleButton
                text="Point"
                size={200}
                color="#BEEB5F"
                textColor="white"
                fontSize={20}
                margin={10}
            />
            <View style={styles.buttonLayout}>
                <Button
                    color='#EBE291'
                    title={'เก็บแต้ม'}
                    onPress={() => navigation.navigate('CollectPoints')}
                />
            </View>
            <View style={styles.buttonLayout}>
                <Button
                    color='#ED6451'
                    title={'SPIN'}
                    onPress={() => navigation.navigate('Spin')}
                />
            </View>
            <View style={styles.buttonLayout}>
                <Button
                    color='#E9D62E'
                    title={'แลกแต้ม'}
                    fontSize='30'
                    onPress={() => navigation.navigate('ExchangePoints')}
                />
            </View>
        </ScreenContainer>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 6,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#fff',
    },
    button: {
        fontSize: 25,
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
    Button: {
        fontWeight: '500',
        marginRight: 20
    },
    buttonLayout: {
        width: '50%',
        flexDirection: 'column',
        marginTop: 4,
        padding: 4,
        borderRadius: 50,
    }
});