import { StyleSheet, View, Text, Pressable } from "react-native";
const GoalItem = ({ text, onDeleteItem, id }, props) => {
	return (
		<View style={styles.goalItem}>
			<Pressable
				android_ripple={{ color: "#dddddd" }}
				onPress={onDeleteItem.bind(this, id)}
			>
				<Text style={styles.goalText}>{text}</Text>
			</Pressable>
		</View>
	);
};

export default GoalItem;

const styles = StyleSheet.create({
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
