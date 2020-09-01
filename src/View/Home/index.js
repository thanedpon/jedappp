import { StyleSheet, Dimensions, Platform } from 'react-native';
const { width: WIDTH } = Dimensions.get('window')

export default StyleSheet.create({
    // height: Platform.OS === 'ios' ? 200 : 100,
    background: {
        flex: 1,
        width: 10,
        height: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        ...Platform.select({
            ios: {
                backgroundColor: '#F9F8F8'
            },
            android: {
                backgroundColor: '#F9F8F8'
            },
            default: {
                // other platforms, web for example
                backgroundColor: 'blue'
            }
        }),
        alignItems: 'center'
    },
    loginbox: {
        paddingTop: 40,
        paddingBottom: 40,
        ...Platform.select({
            ios: {
                marginTop: WIDTH - WIDTH / 2
            },
            android: {
                marginTop: WIDTH - WIDTH
            }
        })
    },
    box: {
        paddingTop: WIDTH / 3,
        width: WIDTH,
        ...Platform.select({
            ios: {
                height: WIDTH - WIDTH / 3,
            },
            android: {
                height: WIDTH - WIDTH / 2
            }
        })
    },
    pic: {
        height: 30,
        width: WIDTH / 2,
        alignItems: 'center',
    },
    photoInfo: {
        ...Platform.select({
            ios: {
                width: 90,
                height: 90,
                top: -WIDTH / 3,
                left: 25
            },
            android: {
                width: 90,
                height: 90,
                top: -WIDTH / 4,
                left: 25
            }
        })
    },
    logout: {
        ...Platform.select({
            ios: {
                width: 20,
                height: 20, 
                top: '14%', 
                left: -170
            },
            android: {
                width: 20, 
                height: 20, 
                top: '12%', 
                left: -160
            }
        })
    },
    section: {
        flexDirection: 'row',
        // backgroundColor: '#c5c9cc79',
        width: WIDTH - 100,
        paddingVertical: 15,
        paddingHorizontal: 10,
        // borderRadius: 15,
        marginHorizontal: 25,
        borderBottomWidth: 1,
        borderBottomColor: 'gray'
    },
    input: {
        borderRadius: 15,
        fontSize: 13,
        paddingLeft: 15,
        color: 'black',
    },
    btnLogin: {
        width: WIDTH - 100,
        height: 45,
        borderRadius: 5,
        paddingLeft: 15,
        backgroundColor: '#FD0401',
        // marginTop: WIDTH /2,
        justifyContent: 'center',
        marginHorizontal: WIDTH / 2,
        alignItems: 'center'
    },
    titleButton: {
        color: 'white',
        fontWeight: 'bold',
    },
    list: {
        paddingHorizontal: 20,
        ...Platform.select({
            ios: {
                // top: '-2%'
            },
            android: {
                marginTop: WIDTH - 350
            }
        })
    },
    listContainer: {
        alignItems: 'center',
    },
    /******** card **************/
    card: {
        //elevation: 12,   
        marginVertical: 10,
        backgroundColor: "white",
        flexBasis: '30%',
        marginHorizontal: 5,
        borderRadius: 5,

    },
    cardHeader: {
        paddingVertical: 17,
        paddingHorizontal: 16,
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center"
    },
    cardContent: {
        paddingVertical: 12.5,
        paddingHorizontal: 16,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12.5,
        paddingBottom: 25,
        paddingHorizontal: 16,
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
    },
    cardImage: {
        height: 30,
        width: 30,
        alignSelf: 'center'
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