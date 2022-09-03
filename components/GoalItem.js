import { StyleSheet, Text, View, Pressable } from "react-native";

export const GoalItem = ({ data, onDelete }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        style={({ pressed }) => pressed & styles.pressedItem}
        onPress={() => onDelete(data.id)}
      >
        <Text style={styles.goalText}>{data.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    padding: 8,
    fontSize:18,
    borderRadius:2,
    color: "white",
  },
  pressedItem: {
    opacity: 0.5,
  },
});
