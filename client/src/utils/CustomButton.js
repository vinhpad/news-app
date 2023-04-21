import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { ThemeContext } from '../App';
import Text, { ButtonText } from '../components/Text';

export default function CustomButton({ children, style, ...props }) {
  const { theme } = React.useContext(ThemeContext);
  return (
    <TouchableOpacity {...props} style={{...style }}>
      {children}
    </TouchableOpacity>
  );
}

// props.pos = 'left' or 'right' to pick position of icon

export function Button(props) {
  const { theme } = React.useContext(ThemeContext);
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: theme.selectedButtonColor, ...props.buttonStyles }]}
      onPress={props.onPress}
    >
      {props.pos === 'left' && (
        <MaterialCommunityIcons
          name={props.iconName}
          size={props.iconSize}
          color={props.iconColor || theme.blue}
        />
      )}
      <ButtonText
        style={{ 
          ...styles.text, 
          color: theme.white, 
          ...props.textStyles,
          height: 13,
        }}
        numberOfLines={1}
      >
        {props.text}
      </ButtonText>
      {props.pos === 'right' && (
        <MaterialCommunityIcons
          name={props.iconName}
          size={props.iconSize}
          color={props.iconColor || theme.blue}
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginHorizontal: '10%',
    marginVertical: '6%',
    lineHeight: 13,
  },
});
