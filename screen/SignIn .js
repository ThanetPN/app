import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import { AuthContext } from "../context";

import { Input } from '../components/Input';
import { FilledButton } from '../components/FilledButton';
import { TextButton } from '../components/TextButton';
import { Error } from '../components/Error';
import { AuthContainer } from '../components/AuthContainer';
import { Loading } from '../components/Loading';

const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
);
export const SignIn = ({ navigation }) => {
    const { signIn } = React.useContext(AuthContext);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState('');

    return (
        <ScreenContainer>
            <Image source={require('../src/12.jpg')} style={styles.image} />
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
            <Error error={error} />
            
            <FilledButton
                title={'Sign In'}
                style={styles.loginButton}
                onPress={() => signIn()}
                /*onPress={async () => {
                    try {
                        setLoading(true);
                        await login(email, password);
                    } catch (e) {
                        setError(e.message);
                        setLoading(false);
                    }
                }}*/
            />
            <TextButton
                title={'Have u an account? Create one'}
                onPress={() => {
                    navigation.push("CreateAccount");
                }}
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
    image: {
        width: "80%",
        height: "35%",
        marginTop: 5,
    },
    title: {
        marginBottom: 20,
    },
    input: {
        marginVertical: 8,
    },
    loginButton: {
        marginVertical: 10,
    },
});