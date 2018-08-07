import React, { Component } from 'react';
import { Picker, View, Text, StyleSheet } from 'react-native';
import Selector from './Selector';

export default class JobViewBox extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text> What is your current status? </Text>
        <Selector
          placeholder={{
            label: 'Select...',
            value: null,
          }}
          options={[{
            "label": "Unemployed",
            "value": "unemployed"
          }, {
            "label": "Student",
            "value": "student"
          }, {
            "label": "Child",
            "value": "child"
          }]}
          onChange={(value, index) => {
            console.log(value, index)
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    top: 50,
    width: '90%',
    height: 100,
    borderWidth: 1,
    padding: 8,
    flexDirection: 'column',
  },
});
