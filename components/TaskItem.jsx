import { View, Text, TouchableOpacity,StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

export const TaskItem = (props) => {
    const [doneTask, setDoneTask] = useState(false);
    const taskDone = () => {
        setDoneTask(true);
  };

  return (
    <View style={styles.contentTask}>
        {/******Task Content********/}
      <View style={styles.contentRow}>
        <Text style={doneTask && styles.doneTask}>{props.task}</Text>
      </View>
        {/*********Delete button************/}
        <View style={styles.buttons}>

            <TouchableOpacity onPress={props.deleteTask}>
          <View style={styles.btnStyle}>
            <Icon name="delete" size={20} color="white" />
          </View>
        </TouchableOpacity>
        {/**************(Icon)********************/}
        <TouchableOpacity onPress={taskDone}>
          <View style={styles.btnStyle}>
            <MaterialIcons name="check-circle" color="white" size={22} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentTask: {
    backgroundColor: "#c9d1d2",
    padding: 15,
    top: 10,
    width: 370,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  contentRow:{
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  buttons:{
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
    margin: 5,
  },
  btnStyle:{
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    marginLeft: 8,
    backgroundColor: "purple",
    borderRadius: 25,
  },
  doneTask:{
    color: "purple",
    fontWeight: "800",
    borderColor: "#003004",
    fontSize: 19,
  },
});