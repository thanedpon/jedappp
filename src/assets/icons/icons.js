import React from 'react';
import { StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';


import { colors } from '../styles/colors';

const iconMenu = ({ name }) => (<Icon name={name} size={30} color={colors} />)
const fontAwesome = ({ name, color }) => (<Icon name={name} size={30} color={color} />)


export const FontAwesome = {
    heart: iconMenu({ name: 'heart' }),
    comment: fontAwesome({ name: 'comment-o', color: colors.color_text_second }),
    user: fontAwesome({ name: 'user-o', color: colors.color_text_second }),
    plus: fontAwesome({ name: 'plus', color: colors.color_text_second }),
    chevronUp: fontAwesome({ name: 'chevron-up', color: colors.color_text_second}),
    chevronDown: fontAwesome({ name: 'chevron-down', color: colors.color_text_second})
}

