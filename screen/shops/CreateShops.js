import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, TextInput } from "react-native";
import PhotoUpload from '../../components/UploadPhoto';

const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
);
export const CreateShops = ({ navigation }) => {
    return (
        <ScreenContainer>
            <PhotoUpload />
            <TextInput
                style={styles.textInput}
                placeholder={'NameShop'}
            />
            <TextInput
                style={styles.textInput}
                placeholder={'Location'}
            />
            <TextInput
                style={styles.textInput}
                placeholder={'DetailShop'}
            />
            <TextInput
                style={styles.textInput}
                placeholder={'Menu'}
            />
            <TextInput
                style={styles.textInput}
                placeholder={'Price'}
            />
            <Button
                title='CreateShop'
                onPress={() => navigation.navigate('DetailShops')}
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
    textInput: {
        backgroundColor: '#fff',
        width: '80%',
        padding: 10,
        margin: 4,
        borderRadius: 8,
        color: 'black',
        borderWidth: 1,
    },
    Menu: {
        backgroundColor: '#fff',
        width: '80%',
        padding: 10,
        borderRadius: 8,
        color: 'black',
        borderWidth: 1,
    },
});