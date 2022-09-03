import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, FlatList, Button, Text } from "react-native";
import { GoalInput } from "./components/GoalInput";
import { GoalItem } from "./components/GoalItem";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const addGoalHandler = (inputText) => {
    setGoals((prev) => [
      ...prev,
      { text: inputText, id: Math.random().toString() },
    ]);
    closeModal();
  };

  const closeModal = () => setModalIsVisible(false);

  const deleteGoalHandler = (id) => {
    setGoals((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color={"#5e0acc"}
          onPress={() => setModalIsVisible(true)}
        />
        <GoalInput
          isVisible={modalIsVisible}
          onClose={closeModal}
          onAddGoal={addGoalHandler}
        />
        <Text style={styles.title}>Course Goals : {goals.length}</Text>
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            keyExtractor={(item) => {
              return item.id;
            }}
            renderItem={(itemData) => (
              <GoalItem onDelete={deleteGoalHandler} data={itemData.item} />
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  title:{
    color:"white",
    fontSize:20,
    marginVertical:20,
    textAlign:"center"
  },
  goalsContainer: {
    flex: 5,
  },
});
