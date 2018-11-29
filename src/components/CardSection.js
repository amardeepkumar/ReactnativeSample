import React from 'react';
import { View } from 'react-native';

const CardSection = props => <View style={styles.containerStyle}>{props.children}</View>;

const styles = {
  containerStyle: {
    backgroundColor: '#fff2',
    borderBottomWidth: 1,
    padding: 5,
    justifyContentRules: 'flex-start',
    flexdirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export default CardSection;
