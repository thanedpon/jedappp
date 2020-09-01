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
  ScrollView,
  Keyboard
} from 'react-native';
import { images } from '../../../assets/images';
import { colors } from '../../../assets/styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { langSearchPPPC } from '../../../assets/languages/langSearchPPPC';
// import PPPCSectionHeader2 from './PPPCSectionHeader2';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styles from './index';


const { width: WIDTH, height } = Dimensions.get('window')


export default class PPPCSectionHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enable: false,
      nameTitle: '',
      firstname: '',
      lastname: '',
      nameTitle1: '',
      firstname1: '',
      lastname1: ''
    }
  }

  checkdata() {
    this.props.navigation.navigate('AddProfile', { nameTitle: this.state.nameTitle, firstname: this.state.firstname, lastname: this.state.lastname })
  }


  render() {
    return (
        <View style={[styles.CONTAINER]}>
          {this.state.enable == false && this.props.enable == false ?
            <View>
              <TouchableOpacity style={styles.TouchableClose} testID={`"${this.props.id}"`} >
                <View style={styles.SECTION_CONTENT}>
                  <Image source={this.props.image} style={styles.SECTION_IMAGE} />
                  <View style={styles.SECTION_TEXT}>
                    <Text style={styles.TEXT} >
                      {`${this.props.name}`}
                      {this.props.required ?
                        <Text style={{ color: colors.google }}>{'*'}</Text>
                        : <Text style={{ color: colors.google }}>{'^'}</Text>
                      }
                    </Text>
                  </View>
                  <TouchableOpacity onPress={() => this.setState({ enable: !this.props.enable })} testID={`${this.props.firstname}`}>
                    <Icon name={'chevron-down'} style={styles.ICON} />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </View>
            :
            <View style={[styles.CONTAINER]}>
              <TouchableOpacity style={[styles.TouchableOpen, { height: hp('32%') }]}>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: 'gray', }}>
                  <Image source={this.props.image} style={styles.SECTION_IMAGE_OPEN} />
                  <View style={{ top: '-28%', left: 15 }}>
                    <Text style={styles.TEXT} testID={'text'}>
                      {`${this.props.name}`}
                      {this.props.required ?
                        <Text style={{ color: colors.google }}>{'*'}</Text>
                        : <Text style={{ color: colors.google }}>{'^'}</Text>}
                    </Text>
                  </View>
                  {this.props.id == '1' ?
                    <View style={{ width: '100%', top: '5%', right: '-10%' }}>
                      <View style={{ top: '-15%', right: '30%' }}>
                        <Text style={styles.TEXT}>
                          {`${langSearchPPPC.th.SalutationEmpty} ${this.props.id}`}
                          <Text style={{ color: colors.google }}>{'*'}</Text>
                        </Text>
                        <TextInput
                          style={[styles.SECTION_TEXTINPUT, { top: '10%', height: '25%' }]}
                          value={this.state.nameTitle}
                          onChangeText={(nameTitle) => this.setState({ nameTitle })}
                          testID={'nameTitle'}
                        />
                        <View style={{ flexDirection: 'row', top: '5%' }}>
                          <Text style={styles.TEXT}>
                            {`${this.props.firstname}`}
                            <Text style={{ color: colors.google }}>{'*'}</Text>
                          </Text>
                          <Text style={[styles.TEXT, { left: wp('40%') }]}>
                            {`${langSearchPPPC.th.lastname}`}
                            <Text style={{ color: colors.google }}>{'*'}</Text>
                          </Text>
                          <TextInput
                            style={[styles.BOX_BETWEEN, { left: '-19%', top: wp('10%'), width: '40%', height: '100%' }]}
                            value={this.state.firstname}
                            onChangeText={(firstname) => this.setState({ firstname })}
                            testID={'firstname'}
                          />
                          <TextInput
                            style={[styles.BOX_BETWEEN, { left: '-12%', top: wp('10%'), width: '43%', height: '100%' }]}
                            value={this.state.lastname}
                            onChangeText={(lastname) => this.setState({ lastname }) && Keyboard.dismiss()}
                            testID={'lastname'}
                          />
                        </View>
                      </View>
                      <TouchableOpacity onPress={() => this.setState({ enable: !this.state.enable })} testID="close">
                        <Icon name={'chevron-up'} style={{ left: wp('58%'), top: hp('-22%') }} />
                      </TouchableOpacity>
                    </View>
                    :
                    <View style={{ width: '100%', top: '5%', right: '-10%' }}>
                      <View style={{ top: '-15%', right: '30%' }}>
                        <Text style={styles.TEXT}>
                          {`${langSearchPPPC.th.SalutationEmpty} ${this.props.id}`}
                          <Text style={{ color: colors.google }}>{'*'}</Text>
                        </Text>
                        <TextInput
                          style={[styles.SECTION_TEXTINPUT, { top: '10%', height: '25%' }]}
                          value={this.state.nameTitle1}
                          onChangeText={(nameTitle1) => this.setState({ nameTitle1 })}
                          testID={'nameTitle'}
                        />
                        <View style={{ flexDirection: 'row', top: '5%' }}>
                          <Text style={styles.TEXT}>
                            {`${this.props.firstname}`}
                            <Text style={{ color: colors.google }}>{'*'}</Text>
                          </Text>
                          <Text style={[styles.TEXT, { left: wp('40%') }]}>
                            {`${langSearchPPPC.th.lastname}`}
                            <Text style={{ color: colors.google }}>{'*'}</Text>
                          </Text>
                          <TextInput
                            style={[styles.BOX_BETWEEN, { left: '-19%', top: wp('10%'), width: '40%', height: '100%' }]}
                            value={this.state.firstname1}
                            onChangeText={(firstname1) => this.setState({ firstname1 })}
                            testID={'firstname'}
                          />
                          <TextInput
                            style={[styles.BOX_BETWEEN, { left: '-12%', top: wp('10%'), width: '43%', height: '100%' }]}
                            value={this.state.lastname1}
                            onChangeText={(lastname1) => this.setState({ lastname1 })}
                            testID={'password'}
                          />
                        </View>
                      </View>
                      <TouchableOpacity onPress={() => this.setState({ enable: !this.state.enable && !this.props.enable })} testID={'close'}>
                        <Icon name={'chevron-up'} style={{ left: wp('58%'), top: hp('-22%') }} />
                      </TouchableOpacity>
                    </View>
                  }
                </View>
              </TouchableOpacity>
            </View>
          }
        </View>

    )
  }
}
