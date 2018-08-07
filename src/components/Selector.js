import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import PickerSelect from 'react-native-picker-select';

type Option = {
  label: string,
  value: string,
};

type Props = {
  value: string,
  placeholder: Option,
  options: Array<Option>,
  onChange: Function,
};

export default class Selector extends Component<Props> {

  render() {

    return (
      <PickerSelect
        value={this.props.value}
        style={{...styles}}
        placeholder={this.props.placeholder}
        items={this.props.options}
        onValueChange={this.props.onChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    backgroundColor: 'white',
    color: 'black',
  }
});