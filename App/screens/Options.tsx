// eslint-disable-next-line no-use-before-define
import React from 'react';
import {
  TouchableOpacity,
  Text,
  SafeAreaView,
  StyleSheet,
  ViewStyle,
  TextStyle,
  View,
} from 'react-native';
import colors from '../constants/colors';

interface Style {
  row: ViewStyle;
  text: TextStyle;
  separator: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  text: {
    fontSize: 16,
    color: colors.text,
  },
  separator: {
    backgroundColor: colors.border,
    height: StyleSheet.hairlineWidth,
    marginLeft: 20,
  },
});

export default (): JSX.Element => (
  <SafeAreaView>
    <TouchableOpacity style={styles.row}>
      <Text style={styles.text}>Themes</Text>
    </TouchableOpacity>

    <View style={styles.separator} />

    <TouchableOpacity style={styles.row}>
      <Text style={styles.text}>React Native Basics</Text>
    </TouchableOpacity>

    <View style={styles.separator} />

    <TouchableOpacity style={styles.row}>
      <Text style={styles.text}>React Native By Example</Text>
    </TouchableOpacity>
  </SafeAreaView>
);
