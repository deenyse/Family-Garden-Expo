import React from 'react';
import { useEffect,useState } from 'react';
import { Text, View, Button } from 'react-native';

export function TodoScreen() {

	const [count, setCount] = useState(0);

	return (

		<View>

			<Text>You clicked {count} times</Text>

     		<Button onPress={() => setCount(count + 1)} title="Click me!"/>


		</View>

	);

};
