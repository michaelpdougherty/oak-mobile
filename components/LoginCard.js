import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { Card } from 'react-native-elements';

export default function LoginCard(props) {
  return (
      <Card containerStyle={styles.card}>
        <View style={styles.container}>
          <Text style={styles.header}>
            Log In
          </Text>
          <TextInput
        		placeholder="Username"
            style={[styles.textInput, {fontFamily: 'space-mono'}]}
            textContentType="username"
            onSubmitEditing={focusPasswordInput}
            onChangeText={props.onUsernameChange}
          />
          <TextInput
            placeholder="Password"
            style={[styles.textInput, {fontFamily: 'space-mono'}]}
            secureTextEntry={true}
            textContentType="password"
            ref={passwordInput}
            onSubmitEditing={props.onFormSubmit}
            onChangeText={props.onPasswordChange}
          />
          <View style={styles.loginButton}>
            <Button
              title="Go"
              color="white"
              onPress={props.onFormSubmit}
            />
          </View>
        </View>
      </Card>
  );
}

// password input ref
const passwordInput = React.createRef();

/*
function submitForm() {
  console.log("Submitting form...")
  fetch("https://oakgrades.com/api/auth", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  })
  .then((res) => res.json())
  .then((resJson) => {
		console.log(resJson.message)
	})
	.catch((err) => {
		console.log(err);
		throw err;
	})
}
*/

function focusPasswordInput() {
  passwordInput.current.focus()
}

const styles = StyleSheet.create({
  card: {
    padding: 25,
    borderRadius: 2,
    marginTop: 0,
    marginBottom: 5,
    marginRight: 20,
    marginLeft: 20,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
	containerItem: {
		alignSelf: 'center',
    margin: 10,
	},
  header: {
    textAlign: 'center',
    fontSize: 32,
    marginBottom: 20,
    fontFamily: 'open-sans'
  },
  textInput: {
    fontSize: 20,
    margin: 10,
    paddingVertical: 10,
    paddingLeft: 20,
    paddingRight: 100,
    borderRadius: 2,
    backgroundColor: '#f8f8ff',
  },
  loginButton: {
    alignSelf: 'center',
    backgroundColor: 'green',
    width: 100,
    marginTop: 15,
    padding: 5,
    borderRadius: 25,
  },
})
