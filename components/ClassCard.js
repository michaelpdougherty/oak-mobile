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
              {props.average} A
            </Text>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
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
