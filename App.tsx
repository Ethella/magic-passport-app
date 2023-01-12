import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { Magic } from '@magic-sdk/react-native-expo';
import Web3 from 'web3'
import React from 'react';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const magic = new Magic('pk_live_D651FC5A1D34D0D5');
  const web3 = new Web3(magic.rpcProvider);

  const magicProps = {
    magic,
    web3,
  }

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <magic.Relayer />
        <Navigation colorScheme={colorScheme} magicProps={magicProps}  />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
