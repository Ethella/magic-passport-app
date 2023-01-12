import React from 'react';
import { Pressable } from 'react-native';
import { Text, View } from '../components/Themed';
import { styles } from './styles';

export default function MagicConnect(props: { magic?: any; web3?: any; }) {
    const TouchableButton = (props: { handler: () => void, title: String }) => (
        <Pressable style={styles.button} onPress={() => props.handler()}>
            <Text style={styles.text}>Login</Text>
        </Pressable>
    )

    /** GetAccount */
    const getAccount = async () => {
        console.log("Hit");
        try {
            const account = await props.web3.eth.getAccounts();
            console.log(account[0]);
        } catch(err) {
            console.log(err);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableButton handler={() => getAccount()} title="Login" />
        </View>
    );
}
