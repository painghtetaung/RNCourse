import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const goalInputHandler = (enteredText) => {
	console.log(enteredText);
};

export default function App() {
	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.textInput}
					placeholder="Your course goal!"
					onChangeText={goalInputHandler}
				/>
				<Button title="Add Goal" />
			</View>
			<View style={styles.goalsContainer}>
				<Text>List of goals...</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 16,
	},
	inputContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingBottom: 24,
		borderBottomWidth: 1,
		borderBottomColor: "#cccccc",
	},
	textInput: {
		borderWidth: 1,
		borderColor: "#cccccc",
		width: "70%",
		marginRight: 10,
		padding: 8,
	},
	goalsContainer: {
		flex: 4,
	},
});

// const custumStyles = StyleSheet.create({
// 	bb: {
// 		backgroundColor: "blue",
// 		margin: 21,
// 		borderWidth: 2,
// 		borderColor: "blue",
// 		padding: 10,
// 		color: "#fff",
// 	},
// });
