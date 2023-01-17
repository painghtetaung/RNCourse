import { View, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";
const GoalInput = ({ onAddGoal }) => {
	const [enteredGoalText, setEnteredGoalText] = useState("");
	const goalInputHandler = (enteredText) => {
		setEnteredGoalText(enteredText);
	};

	const addGoalHandler = () => {
		onAddGoal(enteredGoalText);
		setEnteredGoalText("");
	};
	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.textInput}
				placeholder="Your course goal!"
				value={enteredGoalText}
				onChangeText={goalInputHandler}
			/>
			<Button title="Add Goal" onPress={addGoalHandler} />
		</View>
	);
};

export default GoalInput;

const styles = StyleSheet.create({
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
});
