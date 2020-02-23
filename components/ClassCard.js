import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { Card } from 'react-native-elements';

export default function ClassCard(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Card containerStyle={styles.card}>
        <View style={styles.container}>
          <View style={styles.containerItem}>
            <Text style={styles.text}>
              {props.period}
            </Text>
          </View>
          <View style={styles.teacherNameView}>
            <Text style={styles.text}>
              {props.teacherLast}
            </Text>
          </View>
          <View style={styles.containerItem}>
            <Text style={styles.text}>
              {props.average} {getLetter(props.average)}
            </Text>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
}

function getLetter(val) {
  if (val == undefined) {
    return
  } else if (val >= 89.5) {
    return 'A'
  } else if (val >= 79.5) {
    return 'B'
  } else if (val >= 69.5) {
    return 'C'
  } else if (val >= 59.5) {
    return 'D'
  } else {
    return 'F'
  }
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    borderRadius: 2,
    marginTop: 0,
    marginBottom: 5,
    marginRight: 20,
    marginLeft: 20,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  teacherNameView: {
    flexGrow: 1,
    paddingLeft: 20
  },
  text: {
    fontSize: 20
  }
})
