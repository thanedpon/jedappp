import React from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    FlatList,
    AsyncStorage,
    Alert,
    Button
} from 'react-native';

import styles from './index.js';
import { images } from '../../assets/images.js';
import Menu from '../../components/menu/menu';
import { langSearchPPPC } from '../../assets/languages/langSearchPPPC';
import Api from '../../api/allApi';
import { withNavigation } from 'react-navigation';


// const firebase = require('firebase');
//import AsyncStorage from '@react-native-community/async-storage';


const { width: WIDTH, height } = Dimensions.get('window')

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            checked: false,
            data: [
                { id: 1, title: "ค้นหาข้อมูลลูกค้า", image: images.profile, pathName: 'Profile' },
                { id: 1, title: "เตือนการติดตาม", image: images.reminder, pathName: 'reminder' },
                { id: 2, title: "แดชบอร์ด", image: images.dashboard, pathName: 'Dashboard' },
                { id: 3, title: "เครื่องมือการขาย", image: images.saleTools, pathName: 'saleTools' },
                { id: 4, title: "สถานะข้อมูล", image: images.menuList, pathName: 'menuList' },
                { id: 5, title: "ตั้งค่า", image: images.setting, pathName: 'setting' },
            ],
            datasale: [
                { id: 1, title: "เตือนการติดตาม", image: images.reminder },
                { id: 2, title: "แดชบอร์ด", image: images.dashboard },
                { id: 3, title: "ตั้งค่า", image: images.setting },
            ],
            status: null,
            id: '',
            item: '',
        }
    }

    componentDidMount = async () => {
        try {
            this.state.status === null ? this.props.navigation.state.params.status || this.state.status : this.state.status
            const retrievedItem = await AsyncStorage.getItem('Token');
            const item = JSON.parse(retrievedItem);
            this.setState({ status: item.status });
            // Api.getProfile(item.token)
            //     .then((res) => {
            //         // let item = (JSON.parse(res.data.userId)).toString();
            //         let item = {
            //             userId : JSON.parse(res.data.userId)
            //         }
            //         AsyncStorage.setItem('userId', JSON.stringify(`${item}`));
            //         Alert.alert(item)
            //     });
            Api.getProfile(item.token).then(res => {
                // Alert.alert(JSON.parse(res.data.data.userId))
                let item = (JSON.parse(res.data.userId)).toString();
                AsyncStorage.setItem('userId', JSON.stringify(`${item}`));
            });
        } catch (error) {
            console.log(error)
        }
    }

    onclick(data) {
        this.props.navigation.navigate(`${data}`);
    }

    logout() {
        this.props.navigation.navigate('LoginPage');
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={[styles.box]}>
                    <View style={{ justifyContent: "flex-start", alignItems: 'center', alignSelf: 'center', top: WIDTH / 16 }}>
                        {this.state.status == 'SM' ?
                            <Text style={[styles.title, { fontWeight: 'bold' }]} testID="header"> {`${langSearchPPPC.th.SC} อีซูซุ`}</Text>
                            :
                            <Text style={[styles.title, { fontWeight: 'bold' }]} testID="header"> {`${langSearchPPPC.th.SM} อีซูซุ `}</Text>
                        }
                    </View>
                    <Image source={images.logo} style={styles.photoInfo} />
                </View>
                <FlatList style={styles.list}
                    contentContainerStyle={styles.listContainer}
                    data={this.state.status == 'SM' ? this.state.data : this.state.datasale}
                    horizontal={false}
                    numColumns={3}
                    keyExtractor={(item) => {
                        return item.id;
                    }}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={styles.card} onPress={() => { this.props.navigation.navigate(item.pathName) }} testID={item.pathName}>
                                <View style={styles.cardFooter}></View>
                                <Image style={styles.cardImage} source={item.image} />
                                <View style={styles.cardHeader}>
                                    <View style={{ alignItems: "center", justifyContent: "center", width: WIDTH / 2 }}>
                                        <Text style={[styles.title], { fontSize: 14 }}>{item.title} </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    }} />
                <Menu />

                <TouchableOpacity style={[styles.logout, { top: '-86%' }]} onPress={() => { this.props.navigation.navigate('LoginPage') }}>
                    <Image source={images.logout} />
                </TouchableOpacity>


            </View>
        )
    }
}

export default withNavigation(Home)