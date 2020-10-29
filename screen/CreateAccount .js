import React from "react";
import { View, StyleSheet, Image } from "react-native";

import { AuthContext } from "../context";
import { Input } from '../components/Input';
import { FilledButton } from '../components/FilledButton';
import { Error } from '../components/Error';
import { Loading } from '../components/Loading';

const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
);
export const CreateAccount = () => {
    const { signUp } = React.useContext(AuthContext);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState('');

    return (
        <ScreenContainer style={styles.container}>
            <Image source={require('../src/12.jpg')} style={styles.image} />
            <Error error={error} />
            <Input
                style={styles.input}
                placeholder={'Email'}
                keyboardType={'email-address'}
                value={email}
                onChangeText={setEmail}
            />
            <Input
                style={styles.input}
                placeholder={'Password'}
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <FilledButton
                title={'Register'}
                style={styles.loginButton}
                onPress={() => signUp()}
            />
            <Loading loading={loading} />
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
    title: {
        marginBottom: 48,
    },
    input: {
        marginVertical: 8,
    },
    loginButton: {
        marginVertical: 32,
    },
    closeIcon: {
        position: 'absolute',
        top: 60,
        right: 16,
    },
    image: {
        width: "80%",
        height: "35%",
        marginTop: 5,
    },
});