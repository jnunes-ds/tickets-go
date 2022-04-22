import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

interface Props {
	children: React.ReactNode
}

export function Routes({ children }: Props) {
  return (
		<View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar barStyle={'default'} />
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
