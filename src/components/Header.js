import React from 'react';
import { Text, View } from 'react-native';

const Header = props => (
  <View style={styles.viewStyle}>
    <Text style={styles.textStyle}>{props.headerText2}</Text>
    <Text style={styles.textStyle}>{props.headerText}</Text>
  </View>
);

const styles = {
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    backgroundColor: '#F0FF9A',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    elevation: 2
  }
};

export default Header;
