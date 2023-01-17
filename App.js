import { StatusBar } from "expo-status-bar";
import {
	Button,
	StyleSheet,
	Text,
	TextInput,
	View,
	ScrollView,
	FlatList,
} from "react-native";
import { useState } from "react";

export default function App() {
	const [enteredGoalText, setEnteredGoalText] = useState("");
	const [courseGoals, setCourseGoals] = useState([]);
	const goalInputHandler = (enteredText) => {
		setEnteredGoalText(enteredText);
	};

	const addGoalHandler = () => {
		setCourseGoals((currentCourseGoals) => [
			...currentCourseGoals,
			{ text: enteredGoalText, id: Math.random().toString() },
		]);
		setEnteredGoalText("");
	};

	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.textInput}
					placeholder="Your course goal!"
					value={enteredGoalText}
					onChangeText={goalInputHandler}
				/>
				<Button title="Add Goal" onPress={addGoalHandler} />
			</View>
			<View style={styles.goalsContainer}>
				<FlatList
					data={courseGoals}
					renderItem={(itemData) => (
						<View style={styles.goalItem}>
							<Text style={styles.goalText}>{itemData.item.text}</Text>
						</View>
					)}
					// alwaysBounceVertical={false}
					keyExtractor={(item, index) => {
						return item.id;
					}}
				/>
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
	goalItem: {
		margin: 8,
		padding: 8,
		borderRadius: 6,
		backgroundColor: "#5e0acc",
	},
	goalText: {
		color: "white",
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
