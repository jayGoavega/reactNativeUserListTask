import {StyleSheet} from 'react-native'
import Colors from './colors'

export const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgWhite,
  },
  headerTitle: {
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
    color: Colors.textBlackPrimary,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
  },
  indicator: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});