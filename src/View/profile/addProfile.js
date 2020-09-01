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

import { images } from '../../assets/images.js';
import styles from './index.js';
import SegmentedControlTab from 'react-native-segmented-control-tab'
import { Header } from 'react-native-elements';
import { langSearchPPPC } from '../../assets/languages/langSearchPPPC';
import DropDownItem from "react-native-drop-down-item";
import Icon from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors } from '../../assets/styles/colors';
import { Arr } from '../mock/PPPCData';



import PPPCSectionHeader from '../../components/commonComponent/PPPCHeaderSection/PPPCSectionHeader';

const { width: WIDTH } = Dimensions.get('window');



export default class AddProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: null,
            enable: false,
            selectedIndex: 0,
            screenHeight: 0,
            firstname: '',
            lastname: '',
        }

    }

    onContentSizeChange = (contentWidth, contentHeight) => {
        this.setState({ screenHeight: contentHeight });
    };

    backButton() {
        return (
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Profile') }} >
                <Image source={images.arrow} style={{ height: 15, width: 25 }} />
            </TouchableOpacity>
        )
    }

 

    render() {
        const scrollEnable = false;
        return (
            <View style={styles.container}>
                <Header
                    barStyle="light-content"
                    leftComponent={this.backButton()}
                    centerComponent={{ text: 'เพิ่มลูกค้าบุคคล', style: { color: 'black' } }}
                    containerStyle={{
                        backgroundColor: 'white',
                        justifyContent: 'space-around',
                    }}
                />
                <View style={styles.Section_Avatar}>
                    <Image source={images.photo} style={styles.avatar} />
                </View>
                
                <SegmentedControlTab
                    values={[langSearchPPPC.th.Required, langSearchPPPC.th.Additional]}
                    selectedIndex={this.state.selectedIndex}
                    onTabPress={index => this.setState({ selectedIndex: index })}
                    borderRadius={0}
                    tabsContainerStyle={{ height: 50, borderRadius: 10 }}
                    tabStyle={{ backgroundColor: '#F2F2F2', borderWidth: 0, borderColor: 'transparent' }}
                    activeTabStyle={{ backgroundColor: 'white', borderBottomWidth: 2, borderColor: 'red' }}
                    tabTextStyle={{ color: '#444444', fontWeight: 'bold' }}
                    activeTabTextStyle={{ color: 'black' }}
                />
                {this.state.selectedIndex == '0' ?
                    <View>
                        <ScrollView style={{ alignSelf: 'stretch', width: '100%' }} onContentSizeChange={this.onContentSizeChange} testID={'screen'}>
                            {
                                Arr.map((prop, key) => {
                                    return (
                                        <View>
                                            <ScrollView style={{ alignSelf: 'stretch', width: '100%' }} scrollEnabled={scrollEnable} >
                                                <PPPCSectionHeader
                                                    key={key}
                                                    style={styles.SECTION_HEADER}
                                                    id={prop.id}
                                                    name={prop.title}
                                                    firstname={prop.firstname}
                                                    image={prop.image}
                                                    testIDUsername={prop.testUsername}
                                                    testIDPassword={prop.testPasswords}
                                                    enable={prop.enable}
                                                    required
                                                />
                                                {/* {this.state.enable == true ?
                                                    <View />
                                                    :
                                                    <View style={{ height: '15%' }} />
                                                } */}
                                            </ScrollView>
                                        </View>
                                    );
                                })
                            }
                        <View>
                            <TouchableOpacity style={[styles.btnLogin, { left: '-35%', top: '10%' }]}  testID="addPP">
                                <Text style={[styles.titleButton, { alignItems: 'center', justifyContent: 'center' }]} accessibilityLabel="textpp" >{`${langSearchPPPC.th.Save}`}</Text>
                            </TouchableOpacity>
                        </View>
                        </ScrollView>
                    </View>
                    :
                    <PPPCSectionHeader name={`${langSearchPPPC.th.SC}`} />
                }
            </View>
        )
    }
}