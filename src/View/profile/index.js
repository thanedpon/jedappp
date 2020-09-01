import { StyleSheet, Dimensions, Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const { width: WIDTH } = Dimensions.get('window')
import { colors } from '../../assets/styles/colors';


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.searchColor
    },
    btnLogin: {
        width: WIDTH - 50,
        height: 45,
        borderRadius: 5,
        paddingLeft: 15,
        backgroundColor: colors.red,
        marginLeft: '42%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        flex: 1,
        alignSelf: 'center',
        color: "black",
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
        color: colors.white,
        fontWeight: 'bold',
    },
    searchBox: {
        paddingLeft: 10,
        width: WIDTH,
        height: 40,
        backgroundColor: colors.white,
        marginTop: '-40%'
    },
    /********** SegmentControlTab **************/
    tabContainer: {
        backgroundColor: 'transparent',
        width: '80%',
        flexDirection: 'row',
        marginTop: '25%',
        marginLeft: '10%',
    },
    tabStyle: {
        top: '-75%',
        backgroundColor: colors.white,
        borderColor: colors.navbarBackgroundColor,
        paddingVertical: 5
    },
    tabText: {
        color: colors.lightGrey
    },
    activeTab: {
        backgroundColor: colors.red
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    titletext: {
        fontSize: 20,
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
    SECTION_HEADER: {
        marginTop: 10,
        shadowColor: colors.lightGrey,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowRadius: 0,
        shadowOpacity: 1,
        elevation: 2,
        paddingHorizontal: 15,
    },
    SECTION_IMAGE: {
        width: wp('6.5%'), 
        height: hp('3%'), 
        marginRight: 5, 
        top: '0%', 
        left: 10
    },
    SECTION_IMAGE_OPEN: {
        width: wp('6.5%'), 
        height: hp('3%'), 
        marginRight: 5, 
        top: '-32%', 
        left: 10
    },
    TEXT: {
        color: colors.backgroundf9
    },
    SECTION_TEXTINPUT: {
        fontSize: 13,
        borderBottomWidth: 1,
        borderBottomColor: colors.black50,
        width: wp('90%'),
        height: '15%',
        top: '-2%'
    },
    animationstyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})