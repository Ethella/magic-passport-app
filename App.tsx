import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Magic } from "@magic-sdk/react-native-expo";
import { ConnectExtension } from "@magic-ext/connect";
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import Web3 from "web3";

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
        <Navigation colorScheme={colorScheme} magicProps={magicProps}/>
        <magic.Relayer/>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
