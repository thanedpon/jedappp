import Toast from 'react-native-root-toast';

export const toast = {
    showToast: (message, duration = 2500) => {
      Toast.show(`${message}`, {
        duration: Toast.durations.SHORT,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
      });
    },
  };

  