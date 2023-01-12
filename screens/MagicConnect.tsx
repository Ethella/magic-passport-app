import {Button, StyleSheet} from 'react-native';
import Web3 from 'web3';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import {MagicProps, RootTabScreenProps} from '../types';
import {useCallback} from "react";

export default function MagicConnect(magicProps: MagicProps ) {

    const { magic, web3 } = magicProps;

    const handleLogin = useCallback(async () => {
        const account = await web3.eth.getAccounts()
        console.log('account', account);
    }, [])

    return (
        <View style={styles.container}>
            <Button title="Login With Magic" onPress={handleLogin}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
