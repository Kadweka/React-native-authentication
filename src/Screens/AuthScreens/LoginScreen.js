import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react/cjs/react.production.min";
import {AuthContext} from '../../context/AuthContext'

const LoginScreen = (Navigation) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  // const [authContext] = useContext(AuthContext); 
  const onPressLogin = () => {
    console.warn("esting the login");
  };
  return (
    <View style={styles.Container}>
      <View style={styles.wrapper}>
        <TextInput
          value={email}
          style={styles.input}
          placeholder="Enter Email"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          value={password}
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          placeholder="Enter Password"
          secureTextEntry
        />
        <Pressable onPress={onPressLogin} style={styles.button}>
          <Text style={styles.text}>Login</Text>
        </Pressable>
        <View style={{ flexDirection: "row", marginTop: "10%" }}>
          <Text>Don`t Have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.link}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    width: "80%",
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    height: "15%",
    borderColor: "#bbb",
    borderRadius: 5,
    paddingHorizontal: 14,
  },
  link: {
    color: "blue",
  },
  text: {
    fontWeight: "bold",
    color: "white",
  },
  button: {
    backgroundColor: "#3B71F3",
    width: "100%",
    padding: 15,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 5,
  },
});
export default LoginScreen;
