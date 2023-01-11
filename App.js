import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
	return (
		<View style={styles.container}>
			<Text style={custumStyles.bb}>Hello Dingers</Text>
			<Text style={{ backgroundColor: "red", margin: 21 }}>
				Hello Dingers hello
			</Text>
			<Button color="red" title="Tap Me !" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

const custumStyles = StyleSheet.create({
	bb: {
		backgroundColor: "blue",
		margin: 21,
		borderWidth: 2,
		borderColor: "blue",
		padding: 10,
		color: "#fff",
	},
});
