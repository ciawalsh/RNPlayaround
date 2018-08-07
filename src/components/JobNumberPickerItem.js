import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class JobNumberPickerItem extends Component {

  render() {
    return (
      <TouchableOpacity 
        key={this.props.index}
        style={[styles.box, {backgroundColor: this.props.isActive ? 'blue' : 'white'}]} 
        onPress={() => {this.props.onClick(this.props.activeJobNumber, this.props.jobNumber)}}
      >
        <Text> {this.props.jobNumber} </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  active: {
    backgroundColor: 'blue',
  },
  box: {
    height: 40,
    width: 40,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
