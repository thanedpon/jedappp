import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    Image,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    CheckBox,
    Alert,
    Platform,
    FlatList,
    ActivityIndicator,
    AsyncStorage,
} from 'react-native';

import { images } from '../../assets/images.js';
import styles from './index.js';
import Menu from '../../components/menu/menu';
import { Header } from 'react-native-elements';
import SegmentedControlTab from 'react-native-segmented-control-tab'
import { langSearchPPPC } from '../../assets/languages/langSearchPPPC';
import Api from '../../api/allApi';
// import AsyncStorage from '@react-native-community/async-storage';

const { width: WIDTH } = Dimensions.get('window');
let dataPersonal;
let dataPostpect;


export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: null,
            selectedIndex: 0,
            id: '',
            DATA_PROFILE: '',
            loading: true,
            isRefreshing: false,
            data: '',
            DATA: [
                {
                    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
                    firstname: 'สมชาย',
                    surname: 'ทองดี',
                    nationalId: 'PP20853',
                    contact: '099888767',
                    status: 'PS'
                },
                {
                    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
                    firstname: 'สมหญิง',
                    surname: 'ทองดี',
                    nationalId: 'PP20854',
                    contact: '099888007',
                    status: 'PS'
                },
                {
                    id: '58694a0f-3da1-471f-bd96-145571e29d72',
                    firstname: 'สมพงษ์',
                    surname: 'ทองดี',
                    nationalId: 'PP20855',
                    contact: '099888700',
                    status: 'PP'
                },
                {
                    id: '58694a0f-3da1-471f-bd96-145571e29d76',
                    firstname: 'สม',
                    surname: 'ทองดี',
                    nationalId: 'PP20855',
                    contact: '099888700',
                    status: 'PC'
                },
            ],
        }
    }


    componentDidMount = async () => {
        try {
            this.fetchData();
        } catch (err) {
            console.log(err)
        }
    }

    fetchData = async () => {
        try {
            const retrievedItem = await AsyncStorage.getItem('Token');
            const retrievedId = await AsyncStorage.getItem('userId');
            const item = JSON.parse(retrievedItem);
            // Alert.alert('id', retrievedId)
            this.setState({ status: item.status, id: retrievedId });
            Api.getProfileData(item.token)
                .then((res) => {
                    dataPersonal = res.data.data.filter(function (item) {
                        return item.status == 'PP' || item.status == 'PC';
                    });
                    dataPostpect = res.data.data.filter(function (item) {
                        return item.status == 'PS'
                    });
                    this.setState({
                        DATA_PROFILE: res.data.data,
                        isRefreshing: false,
                    });
                })
        } catch (err) {
            console.log(err)
        }
    }

    handleRefresh = () => {
        this.setState({ isRefreshing: true }, () => { this.fetchData(); })
    }

    backButton() {
        return (
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Home', { status: this.state.status }) }} testID="backToProfile">
                <Image source={images.arrow} style={{ height: 15, width: 25 }} />
            </TouchableOpacity>
        )
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header
                    barStyle="light-content"
                    leftComponent={this.backButton()}
                    centerComponent={{ text: langSearchPPPC.th.Search, style: { color: 'black' } }}
                    containerStyle={{
                        backgroundColor: 'white',
                        justifyContent: 'space-around',
                        height: '15%'
                    }}
                    testID={'header'}
                />

                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <TextInput
                        style={styles.searchBox}
                        placeholder="ค้นหา"
                        testID="search"
                    />
                </View>
                <SegmentedControlTab
                    tabsContainerStyle={styles.tabContainer}
                    tabStyle={styles.tabStyle}
                    tabTextStyle={styles.tabText}
                    activeTabStyle={styles.activeTab}
                    values={['ทั้งหมด', 'บุคคล', 'มุ่งหวัง']}
                    allowFontScaling={false}
                    selectedIndex={this.state.selectedIndex}
                    onTabPress={index => this.setState({ selectedIndex: index })}
                    accessibilityLabels="Tap me!"
                />

                <View style={{ flex: 3, marginTop: '-58%' }}>
                    <FlatList
                        data={this.state.selectedIndex == '1' ? dataPersonal : this.state.selectedIndex == '2' ? dataPostpect : this.state.DATA_PROFILE}
                        keyExtractor={(item) => item.id}
                        refreshing={this.state.isRefreshing}
                        onRefresh={this.handleRefresh}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.item}>
                                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('EditProfile', { data: item, }) }} testID={`"${item.firstname}"`}>
                                        <Text style={styles.titletext}>{`${item.firstname} ${item.lastname}`}</Text>
                                        <Text style={{ fontSize: 13 }}>{`อีเมล ${item.email}`}</Text>
                                        <Text style={{ fontSize: 13 }}>{`เบอร์โทรศัพท์ ${item.mobile_phone} `}</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        }} />
                </View>
                <Menu />

                <TouchableOpacity style={[styles.btnLogin, { left: '-35%', top: '-5%', backgroundColor: 'orange' }]} onPress={() => { this.props.navigation.navigate('CreateProfile') }} testID="test">
                    <Text style={[styles.titleButton, { alignItems: 'center', justifyContent: 'center' }]} accessibilityLabel="textpp" >เพิ่ม PP </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btnLogin, { left: '-35%', top: '-5%' }]} onPress={() => { this.props.navigation.navigate('AddProfile') } } testID="addPP">
                    <Text style={[styles.titleButton, { alignItems: 'center', justifyContent: 'center' }]} accessibilityLabel="textpp" >เพิ่ม PP ใหม่</Text>
                </TouchableOpacity>

            </View>
        )
    }
}