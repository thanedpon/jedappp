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
    Button,
    AsyncStorage
} from 'react-native';

import { images } from '../../assets/images.js';
import styles from './index.js';
import { Header } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { langSearchPPPC } from '../../assets/languages/langSearchPPPC';
import { colors } from '../../assets/styles/colors';
import DropDownPicker from 'react-native-dropdown-picker';
import Api from '../../api/allApi';
import moment from 'moment';
import { toast } from '../../components/Alert/Toast' 
const { width: WIDTH } = Dimensions.get('window');


export default class createdProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: null,
            token: '',
            username: '',
            lastname: '',
            email: '',
            mobile_phone: '',
            ErrorStatus: true,
            StatusPerson: '',
            id: '',
            showToast: false
        }
    }

    async componentDidMount() {
        try {
            const retrievedItem = await AsyncStorage.getItem('Token');
            const item = JSON.parse(retrievedItem);
            const retrievedId = await AsyncStorage.getItem('userId');
            // Alert.alert(JSON.parse(retrievedId))
            this.setState({ id: JSON.parse(retrievedId), token: item.token })

        } catch (err) {
            console.log(err)
        }
    }

    onChangeText = (key, val) => {
        try {
            this.setState({ [key]: val })
        } catch (e) {
            console.log(e)
        }
        //this.setState({ [key]: val })
    }

    valid = async () => {
        const { id, username, lastname, email, mobile_phone, StatusPerson } = this.state;
        let payload = {
            token: this.state.token.toString(),
            id: `${id}`,
            username: username,
            lastname: lastname,
            email: email,
            mobile_phone: mobile_phone,
            status: StatusPerson,
            created_at: moment().format('YYYY-MM-DDTHH:mm:ss')
        }
        console.log(payload)
        try {
            if (username != '' && lastname != '' && email != '' && mobile_phone != '', StatusPerson != '') {
                Api.createProfile(payload)
                    .then((res) => {
                        toast.showToast(res.data.message)
                        // Alert.alert(res.data.message)
                    })

                this.props.navigation.navigate('Profile')
            }
            else {
                Alert.alert('Fail')
            }
        } catch (err) {
            Alert.alert('error signing up: ', err)
            this.props.navigation.navigate('Profile')
        }
    }

    backButton() {
        return (
            <View>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('Profile') }}  >
                    <Image source={images.arrow} style={{ height: 15, width: 25 }} />
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        return (
            <View style={styles.container}>
                <View style={styles.container}>
                    <Header
                        barStyle="light-content"
                        leftComponent={this.backButton()}
                        centerComponent={{ text: 'เพิ่มรายชื่อ', style: { color: 'black' } }}
                        containerStyle={{
                            backgroundColor: 'white',
                            justifyContent: 'space-around',
                            // top: '-197%'
                        }}
                    />
                </View>
                
                <View style={[styles.content, {top: wp('-75%') }]}>
                    <View>
                        <Text style={{ right: wp('-4%'), top: wp('2%') }} testID={'firstname'}>
                            {`${langSearchPPPC.th.username}`}
                            <Text style={{ color: colors.google }}>{'*'}</Text>
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Username'
                            autoCapitalize="none"
                            placeholderTextColor={colors.black50}
                            onChangeText={val => this.onChangeText('username', val)}
                            testID="inputusername"
                        />
                        {!this.state.username ?
                            <Text style={{ color: 'red', fontSize: 10, left: '5%' }}>* Please enter your username</Text>
                            : null}
                    </View>
                    <View>
                        <Text style={{ right: wp('-4%'), top: '6%' }} testID="lastname">
                            {`${langSearchPPPC.th.lastname}`}
                            <Text style={{ color: colors.google }}>{'*'}</Text>
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Lastname'
                            autoCapitalize="none"
                            placeholderTextColor={colors.black50}
                            onChangeText={val => this.onChangeText('lastname', val)}
                            testID="inputlastname"
                        />
                        {!this.state.lastname ?
                            <Text style={{ color: 'red', fontSize: 10, left: '5%' }}>* Please enter your lastname</Text>
                            : null}
                    </View>

                    <View>
                        <Text style={{ right: wp('-4%'), top: '8%' }} testID="email">
                            {`${langSearchPPPC.th.Email}`}
                            <Text style={{ color: colors.google }}>{'*'}</Text>
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Email'
                            autoCapitalize="none"
                            placeholderTextColor={colors.black50}
                            onChangeText={val => this.onChangeText('email', val)}
                            testID="inputemail"
                        />
                        {!pattern.test(this.state.email) ?
                            <Text style={{ color: 'red', fontSize: 10, left: '5%' }}>* Please enter the text to proceed</Text>
                            : null}
                    </View>

                    <View>
                        <Text style={{ right: wp('-4%'), top: '10%' }} testID="phone">
                            {`${langSearchPPPC.th.PhoneNumber}`}
                            <Text style={{ color: colors.google }}>{'*'}</Text>
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Phone Number'
                            autoCapitalize="none"
                            placeholderTextColor={colors.black50}
                            onChangeText={val => this.onChangeText('mobile_phone', val)}
                            testID="inputphone"
                        />
                        {!this.state.mobile_phone.match(/^[0-9]{10}$/) ?
                            <Text style={{ color: 'red', fontSize: 10, left: '5%' }}>* Please enter valid mobile no.</Text>
                            : null}
                    </View>
                    <View>
                        <Text style={{ right: wp('-1%'), top: '10%' }} >
                            สถานะ
                            <Text style={{ color: colors.google }}>{'*'}</Text>
                        </Text>
                        <DropDownPicker
                            items={[
                                { label: 'PP', value: 'PP' },
                                { label: 'PC', value: 'PC' },
                                { label: 'PS', value: 'PS' },
                            ]}
                            defaultValue={this.state.StatusPerson}
                            containerStyle={styles.dropdown}
                            style={{ backgroundColor: '#fafafa' }}
                            itemStyle={{
                                justifyContent: 'flex-start'
                            }}
                            dropDownStyle={{ backgroundColor: '#fafafa' }}
                            onChangeItem={item => this.setState({
                                StatusPerson: item.value
                            })}
                        />
                    </View>

                    <TouchableOpacity style={[styles.btnLogin, { left: '-0%', top: '35%' }]} onPress={this.valid} testID="test">
                        <Text style={[styles.titleButton, { alignItems: 'center', justifyContent: 'center' }]} accessibilityLabel="textpp" >เพิ่มรายชื่อ</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}