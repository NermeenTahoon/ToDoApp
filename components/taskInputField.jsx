import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  KeyboardAvoidingView,
} from "react-native";
//material icon
import { MaterialIcons } from "@expo/vector-icons";

export const TaskInputField = (props) => {
  const [task, setTask] = useState();
  const handleAddTask = (value) => {
    props.addTask(value);
    setTask(null);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputField}
        placeholder=" Enter Your Task ... "
        onChangeText={(txt) => {
          setTask(txt);
        }}
        value={task}
      />

      <TouchableOpacity
        onPress={() => {
        // handleAddTask
          handleAddTask(task);
        }}
      >
        <View style={styles.btn}>
          <MaterialIcons name="keyboard-arrow-down" color="white" size={25} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    alignItems: "center",
    flexDirection: "row",
  },
  inputField: {
    width: "80%",
    borderWidth: 2,
    marginVertical: 24,
    marginLeft: 8,
    padding: 8,
    borderRadius: 24,
    borderColor: "blue",
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
    width: 50,
    height: 50,
    borderRadius: 24,
    margin: 6,
  },
});