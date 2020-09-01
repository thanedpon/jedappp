import { StyleSheet, Dimensions, Platform } from 'react-native';
import { colors } from '../../assets/styles/colors';
const { width: WIDTH } = Dimensions.get('screen')

export default StyleSheet.create({
    // height: Platform.OS === 'ios' ? 200 : 100,
    background: {
        flex: 1,
        width: 15,
        height: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        ...Platform.select({
            ios: {
                backgroundColor: colors.white
            },
            android: {
                backgroundColor: colors.white
            },
            default: {
                // other platforms, web for example
                backgroundColor: 'blue'
            }
        }),
        alignItems: 'center'
    },
    loginbox: {
        shadowColor: colors.slateGrey,
        paddingTop: 40,
        paddingBottom: 40,
        ...Platform.select({
            ios: {
                marginTop: WIDTH - 250
            },
            android: {
                marginTop: WIDTH - 270
            }
        })
    },
    image: {
        alignItems: 'center',
        ...Platform.select({
            ios: {
                width: WIDTH / 2,
                height: 40,
            },
            android: {
                height: 40,
                width: WIDTH - 150,
            }
        })
    },
    section: {
        flexDirection: 'row',
        //width: WIDTH - 100,
        paddingHorizontal: 10,
        marginHorizontal: 25,
        borderBottomWidth: 1,
        borderBottomColor: colors.slateGrey,
        ...Platform.select({
            ios: {
                width: WIDTH - 100,
                height: 50,
                paddingVertical: 15,
            },
            android: {
                height: 50,
                width: WIDTH - 100,
                paddingVertical: 5,
            }
        })
    },
    sectionPin: {
        // flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        ...Platform.select({
            ios: {
                width: WIDTH - 100,
                height: 40,
            },
            android: {
                height: 40,
                width: WIDTH - 100,
            }
        })
    },
    input: {
        fontSize: 13,
        width: '90%',
        color: colors.black,
    },
    btnLogin: {
        width: WIDTH - 100,
        height: 45,
        borderRadius: 5,
        paddingLeft: 15,
        backgroundColor: colors.red,
        marginTop: 35,
        justifyContent: 'center',
        marginHorizontal: 25,
        alignItems: 'center'
    },
    title: {
        color: colors.white,
        fontWeight: 'bold',
    },
    checkbox: {
        ...Platform.select({
            ios: {
                right: 70,
                marginTop: 20,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',

            },
            android: {
                marginTop: 20
            }
        })
    },
    headerPin: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 25,
        color: colors.black50,
    },
    backButton: {
        ...Platform.select({
            ios: {
                top: WIDTH - 350,
                marginRight: WIDTH - 60
            },
            android: {
                top: 30,
                marginRight: WIDTH - 60
            }
        })
    },
    pinCodeContainer: {
        marginTop: 50,
    },
    pinCodePin: {
        borderRadius: 26,
        backgroundColor: colors.backgroundf9,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: colors.silver,
    },
    pinCodeFocused: {
        borderRadius: 26,
        backgroundColor: colors.white249,
        borderStyle: 'solid',
        borderWidth: 1.5,
        borderColor: colors.black50,
    },
    pinCodeText: {
        fontSize: 18,
        fontWeight: 'bold',
        fontStyle: 'normal',
        letterSpacing: 0,
        textAlign: 'center',
        color: colors.black50,
    },

})