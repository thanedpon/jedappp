import { StyleSheet, Dimensions, Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const { width: WIDTH } = Dimensions.get('window')
import { colors } from '../../assets/styles/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.searchColor
    },
    Section_Avatar : {
        backgroundColor: colors.navbarBackgroundColor, 
        width: '100%', 
        height: '18%'
    },
    avatar: {
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: '5%',
        width: '28%'
    },
    Section_Textinput : {
        top: wp('5%'),
        height: hp('100%'),
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
        borderBottomColor: colors.black50,
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
})