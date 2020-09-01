import { StyleSheet, Dimensions, Platform } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { colors } from '../../assets/styles/colors';
const { width: WIDTH } = Dimensions.get('window')


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.searchColor
    },
    input: {
        width: wp('90%'),
        height: hp('5%'),
        margin: 10,
        padding: 8,
        color: colors.black50,
        borderRadius: 14,
        fontSize: 15,
        fontWeight: '200',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    },
    btnLogin: {
        width: WIDTH - 100,
        height: 45,
        borderRadius: 5,
        paddingLeft: 15,
        backgroundColor: colors.red,
        justifyContent: 'center',
        marginHorizontal: WIDTH / 2,
        alignItems: 'center'
    },
    title: {
        flex: 1,
        alignSelf: 'center',
        color: colors.black50,
        ...Platform.select({
            ios: {
                fontSize: 19,
                left: WIDTH - WIDTH,
                top: -WIDTH / 20
            },
            android: {
                fontSize: 19,
                left: WIDTH - 360,
                top: -WIDTH / 7
            }
        })
    },
    titleButton: {
        color: 'white',
        fontWeight: 'bold',
    },
    dropdown: {
        width: wp('80%'),
        height: hp('5%'),
        top: wp('5%')
    },
    content : {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})