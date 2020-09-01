import { StyleSheet, Dimensions, Platform } from 'react-native';
const { width: WIDTH } = Dimensions.get('window')

export default StyleSheet.create({
    actionButtonIcon: {
        height: 20,
        width: 20,
    },
    viewButton: {
        flex: 1,
        ...Platform.select({
            ios: {
                marginLeft: WIDTH - WIDTH / 6,
                top: -WIDTH / 11,

            },
            android: {
                top: -WIDTH / 11,
                marginLeft: WIDTH - WIDTH / 6,
            }
        })
    }
})