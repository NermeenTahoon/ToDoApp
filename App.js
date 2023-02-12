import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { TaskInputField } from "./components/taskInputField";
import { TaskItem } from "./components/TaskItem";
import {StyleSheet,Text,View,Button,Keyboard,ScrollView, TouchableOpacity,} from "react-native";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [errorMsg, setErrorMsg] = useState(false);
  const [doneTask, setDoneTask] = useState(false);

  {/******add task function********/}
  const addTask = (task) => {
    if(task){
      Keyboard.dismiss();
      setTasks([...tasks, task]);
      setErrorMsg(false);
    }
    else{
      setErrorMsg(true);
    }
  };
  {/******delete task function********/}
  const deleteTask = (deleteIndex) => {
    setTasks(tasks.filter((val, idx) => idx != deleteIndex));
  };


  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="black" />
      <Text style={styles.header}>Todo List</Text>
      <TaskInputField addTask={addTask} />
      {errorMsg && (
        <View style={styles.errorMsgStyle}>
          <Text style={styles.errorMsgText}>Task Can't Be Empty</Text>
        </View>
      )}

      <ScrollView>
        {tasks.map((task, idx) => {
          return (
            <View key={idx}>
              <TaskItem
                index={idx + 1}
                task={task}
                deleteTask={() =>deleteTask(idx)}
              />
            </View>
          );
        })}
      </ScrollView>
      <TouchableOpacity>
        <View style={styles.btn}>
          <Button
            title="Clear"
            color={"blue"}
            onPress={() => {
              setTasks([]);
            }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  errorMsgStyle: {
    backgroundColor: "red",
    padding: 20,
    top: 50,
  },
  header: {
    marginTop: 50,
    color: "black",
    fontSize: 35,
  },
  errorMsgText: {
    color: "white",
  },
  btn: {
    width: 200,
    color: "blue",
    fontSize: 20,
    borderRadius: 24,
    overflow: "hidden",
    margin: 20,
  },
});
