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
    Alert,
    Platform,
    AsyncStorage
} from 'react-native';

import PinCode from 'react-native-smooth-pincode-input'
import styles from './index.js';



const { width: WIDTH, height } = Dimensions.get('window')

export default class PinLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pinenable: false,
            pin: '',
            status : 'Sale'
        }
        
        inputRef = React.createRef();
    }

    handleOnPress = async () => {
        this.setState({ pinenable: !this.state.pinenable });
        await AsyncStorage.setItem('Status', `${this.state.status}`);
        this.props.navigation.navigate('Home', { status: this.state.status });
    }

    _checkCode = () => {
        if (this.state.pin != '123456') {
          this.inputRef.current.shake()
            .then(() => this.setState({ pin: '' }));
        }
    }

    render() {
        return (
            <View>
                <View style={[styles.sectionPin, { marginTop: WIDTH - 250 }]}>
                    <Text style={styles.headerPin}> ยืนยันรหัสพิน </Text>
                    <PinCode
                        inputRef={this.pinInput}
                        keyboardType='number-pad'
                        containerStyle={styles.pinCodeContainer}
                        codeLength={6}
                        password
                        mask='﹡'
                        cellStyle={styles.pinCodePin}
                        cellStyleFocused={styles.pinCodeFocused}
                        textStyle={styles.pinCodeText}
                        onFulfill={this._checkCode}
                        value={this.state.pin}
                        onTextChange={() => this.setState({ pin : this.state.pin })}
                        cellSize={48}
                        cellSpacing={5}
                        autoFocus
                    />
                    <TouchableOpacity style={[styles.btnLogin, { marginTop: WIDTH - 300}]}>
                        <Text style={[styles.title, { marginTop: 1, justifyContent: 'center' }]} onPress={() => this.handleOnPress()}>กลับไปหน้าเข้าสู่ระบบเข้าสู่ระบบ</Text>
                    </TouchableOpacity>
                </View>
            </View>

        )
    }
}