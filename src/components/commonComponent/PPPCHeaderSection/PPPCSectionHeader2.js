import React from 'react'
import {
  View,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  Image,
  TouchableOpacityProps,
  StyleProp,
  TextInput,
  Text,
  Dimensions,
  Alert,
} from 'react-native';
import { images } from '../../../assets/images';
import { colors } from '../../../assets/styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { langSearchPPPC } from '../../../assets/languages/langSearchPPPC';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styles from './index';


const { width: WIDTH, height } = Dimensions.get('window')


export default class PPPCSectionHeader2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enable: false,
      nameTitle : '',
      firstname: '',
      lastname: ''
    }
  }


  render() {
    return (
      <View style={{width: '100%'}}>
        
      </View>
    )
  }
}
