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
    Animated,
    AsyncStorage
} from 'react-native';


import FontAwesome from 'react-native-vector-icons/FontAwesome';
const { width: WIDTH, height } = Dimensions.get('window')


export default class Tab1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            enableInfo: false,
        }
    }
    render() {
        return (
            <View style={{ backgroundColor: 'white', width: '100%', height: '100%' }}>
                {this.state.enableInfo == false ?
                    <View>
                        <TouchableOpacity onPress={() => this.setState({ enableInfo: !this.state.enableInfo })}>
                            <Text style={{ backgroundColor: 'orange', width: '100%', height: '30%' }}> HIHI </Text>
                            <FontAwesome name='chevron-down' style={{ left: WIDTH - 30, top: '-20%' }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ enableInfo: !this.state.enableInfo })}>
                            <Text style={{ backgroundColor: 'yellow', width: '100%', height: '30%', top: '-75%' }}> Tab2 </Text>
                            <FontAwesome name='chevron-down' style={{ left: WIDTH - 30, top: '-90%' }} />
                        </TouchableOpacity>
                    </View>
                    :
                    <View style={{ backgroundColor: 'gray', width: '100%', height: '30%' }}>
                        <TouchableOpacity onPress={() => this.setState({ enableInfo: !this.state.enableInfo })}>
                            <Text style={{ backgroundColor: 'orange', width: '100%', height: '35%' }}> HIHI </Text>
                            <FontAwesome name='chevron-up' style={{ left: WIDTH - 30, top: -25 }} />
                        </TouchableOpacity>
                        <View style={{ width: '100%', height: '30%' }}>
                            <Text>HELLO</Text>
                        </View>
                        <TouchableOpacity onPress={() => this.setState({ enableInfo: !this.state.enableInfo })}>
                            <Text style={{ backgroundColor: 'orange', width: '100%', height: '35%' }}> Tab2 </Text>
                            <FontAwesome name='chevron-down' style={{ left: WIDTH - 30, top: -25 }} />
                        </TouchableOpacity>
                    </View>

                }
            </View>
        )
    }
}



