import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import JobNumberPickerItem from './JobNumberPickerItem';

const numberOfJobs = [0,1,2,3];

export default class JobNumberPicker extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeJobNumber: 0,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {numberOfJobs.map((jobNumber, index) => {
          return (
            <JobNumberPickerItem 
              jobNumber={jobNumber}
              activeJobNumber={this.state.activeJobNumber}
              key={index}
              isActive={jobNumber === this.state.activeJobNumber}
              onClick={() => {
                this.handleChange(this.state.activeJobNumber, jobNumber);
                this.props.onChange(jobNumber);
              }}
            />
          );
        })}
      </View>
    );
  }

  handleChange = (activeJobNumber, jobNumber) => {
    if (activeJobNumber !== jobNumber) {
      this.setState({activeJobNumber: jobNumber})
    }
  };

}

const styles = StyleSheet.create({
  box: {
    height: 40,
    width: 40,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    top: 30,
    borderWidth: 1,
    flexDirection: 'row',
  },
});
