import { Platform } from 'react-native';

export function testProps(id) {
    if (!id) {
      return
    }
    return Platform.OS === 'ios'
      ? { testID: id }
      : {
          testID: id,
          accessibilityLabel: id,
        }
  }