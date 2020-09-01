import React from 'react';
import {
    View,
    Image,
    ImageBackground,
    Dimensions,
    
} from 'react-native';

import { images } from '../../assets/images.js';
import styles from './index.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import ActionButton from 'react-native-circular-action-menu';
import { colors } from '../../assets/styles/colors';

// import AsyncStorage from '@react-native-community/async-storage'


export default class menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: null
        }
        
    }

    render() {
        return (
            <View style={styles.viewButton} >
                <ActionButton buttonColor={colors.google} position="right" radius={200}  icon={<Icon name='bars' style={{color: colors.white249}} size={30}/>}>
                    <ActionButton.Item buttonColor={colors.google} title="New Task" onPress={() => console.log("notes tapped!")}>
                        <Image style={[styles.actionButtonIcon]} source={images.calendar_white} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor={colors.google} title="Notifications" onPress={() => { }}>
                        <Image style={[styles.actionButtonIcon]} source={images.saleTools_white} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor={colors.google} title="All Tasks" onPress={() => { }}>
                        <Image style={[styles.actionButtonIcon]} source={images.dashboard_white} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor={colors.google} title="All Tasks" onPress={() => { }}>
                        <Image style={[styles.actionButtonIcon]} source={images.profile_white} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor={colors.google} title="All Tasks" onPress={() => { this.props.navigation && this.props.navigation.navigate('Profile') }}>
                        <Image style={[styles.actionButtonIcon]} source={images.menu_white} />
                    </ActionButton.Item>
                </ActionButton>
            </View>
        )
    }
}