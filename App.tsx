import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import 'react-native-gesture-handler';
import {
	useFonts,
	Roboto_500Medium,
	Roboto_700Bold
} from '@expo-google-fonts/roboto';
import {
	Lato_400Regular,
	Lato_700Bold
} from '@expo-google-fonts/lato';

export default function App() {
	const [fontsLoaded] = useFonts({
		Roboto_500Medium,
		Roboto_700Bold,
		Lato_400Regular,
		Lato_700Bold
	});

	if (!fontsLoaded) {
		return (
			<>
				{
					Platform.OS === 'android'
					//@ts-ignore
					? <AppLoading />
					: <SafeAreaView />
				}
			</>
		)
	}

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
