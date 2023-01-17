import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, TextInput, View, FlatList } from "react-native";
import { useState } from "react";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
	const [courseGoals, setCourseGoals] = useState([]);

	const addGoalHandler = (enteredGoalText) => {
		setCourseGoals((currentCourseGoals) => [
			...currentCourseGoals,
			{ text: enteredGoalText, id: Math.random().toString() },
		]);
	};

	return (
		<View style={styles.appContainer}>
			<GoalInput onAddGoal={addGoalHandler} />
			<View style={styles.goalsContainer}>
				<FlatList
					data={courseGoals}
					renderItem={(itemData) => <GoalItem text={itemData.item.text} />}
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
