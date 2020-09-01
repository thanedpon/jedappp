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

import { images } from '../../assets/images';
import styles from './index.js';
import { Header } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { langSearchPPPC } from '../../assets/languages/langSearchPPPC';
import { colors } from '../../assets/styles/colors';
import Api from '../../api/allApi';
import { withNavigation } from 'react-navigation';
import moment from 'moment';
import { toast } from '../../components/Alert/Toast' 

class editProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: null,
            firstname: '',
            lastname: '',
            email: '',
            mobile_phone: '',
            id: '',
            userId: '',
            token: ''
        }
    }

    async componentDidMount() {
        try {
            const retrievedItem = await AsyncStorage.getItem('Token');
            const item = JSON.parse(retrievedItem);
            const { data } = this.props.navigation.state.params;
            this.setState({ id: JSON.stringify(data.id), token: item.token })
        } catch (err) {
            console.log(err)
        }
    }


    onChangeText = async (key, val, data) => {
        try {
            this.setState({ [key]: val })
        } catch (e) {
            console.log(e)
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


    async updateProfile(data) {
        const { id, firstname, lastname, email, mobile_phone, token } = this.state;
        let payload = {
            token: token.toString(),
            id: id,
            firstname: firstname != '' ? firstname : data.firstname,
            lastname: lastname != '' ? lastname : data.lastname,
            email: email != '' ? email : data.email,
            mobile_phone: mobile_phone != '' ? mobile_phone : data.mobile_phone,
            updated_at: moment().format('YYYY-MM-DDTHH:mm:ss')
        }
        try {
            if (payload) {
                Api.updateProfile(payload)
                    .then((res) => {
                        toast.showToast(res.data.message)
                    })
                this.props.navigation.navigate('Profile')
            }
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        const { data } = this.props.navigation.state.params;
        const header = data.status == 'PP' || 'PC' ? `${langSearchPPPC.th.EditPC}` : `${langSearchPPPC.th.EditPS}`
        return (
            <View style={styles.container}>
                <Header
                    barStyle="light-content"
                    leftComponent={this.backButton()}
                    centerComponent={{ text: header }}
                    containerStyle={{
                        backgroundColor: 'white',
                        justifyContent: 'space-around',
                    }}
                />

                <View style={styles.Section_Avatar}>
                    <Image source={images.photo} style={styles.avatar} />
                </View>

                <View style={styles.Section_Textinput}>
                    <View>
                        <Text style={{ right: wp('-4%'), top: wp('2%') }} testID={'firstname'}>
                            {`${langSearchPPPC.th.username} `}
                            <Text style={{ color: colors.google }}>{'*'}</Text>
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Username'
                            defaultValue={data.firstname}
                            autoCapitalize="none"
                            placeholderTextColor={colors.black50}
                            onChangeText={val => this.onChangeText('firstname', val)}
                            testID="inputusername"
                        />
                        {!this.state.username && !data.firstname ?
                            <Text style={{ color: 'red', fontSize: 10, left: '5%' }}>* Please enter your username </Text>
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
                            defaultValue={data.lastname}
                            autoCapitalize="none"
                            placeholderTextColor={colors.black50}
                            onChangeText={val => this.onChangeText('lastname', val)}
                            testID="inputlastname"
                        />
                        {!this.state.lastname && !data.lastname ?
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
                            defaultValue={data.email}
                            autoCapitalize="none"
                            placeholderTextColor={colors.black50}
                            onChangeText={val => this.onChangeText('email', val)}
                            testID="inputemail"
                        />
                        {/* {!registerUser.patt.test(this.state.email) ?
                            <Text style={{ color: 'red', fontSize: 10, left: '5%' }}>* Please enter the text to proceed</Text>
                            : null} */}
                    </View>

                    <View>
                        <Text style={{ right: wp('-4%'), top: '10%' }} testID="phone">
                            {`${langSearchPPPC.th.PhoneNumber}`}
                            <Text style={{ color: colors.google }}>{'*'}</Text>
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Phone Number'
                            defaultValue={data.mobile_phone}
                            autoCapitalize="none"
                            placeholderTextColor={colors.black50}
                            onChangeText={val => this.onChangeText('mobile_phone', val)}
                            testID="inputphone"
                        />
                        {!this.state.mobile_phone.match(/^[0-9]{10}$/) && !data.mobile_phone ?
                            <Text style={{ color: 'red', fontSize: 10, left: '5%' }}>* Please enter valid mobile no.</Text>
                            : null}
                    </View>

                    <TouchableOpacity style={[styles.btnLogin, { right: '38%', top: '5%' }]} onPress={() => { this.updateProfile(data) }} testID="test">
                        <Text style={[styles.titleButton, { alignItems: 'center', justifyContent: 'center' }]} accessibilityLabel="textpp" >{`${header}`}</Text>
                    </TouchableOpacity>
                </View>


            </View>
        )
    }
}

export default withNavigation(editProfile)