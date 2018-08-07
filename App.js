/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import JobNumberPicker from './src/components/JobNumberPicker';
import JobViewBox from './src/components/JobViewBox';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      jobNumber: 0,
    };
  }


  render() {
    return (
      <View style={styles.container}>
        <JobNumberPicker onChange={(jobNumber) => this.setState({jobNumber})}/>
       {Array(this.state.jobNumber).fill(null).map((jobNumber, index) => {
         return <JobViewBox key={index}/>
       })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
