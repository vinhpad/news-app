import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ThemeContext } from '../App';
import Text from '../components/Text';
import TextInput from '../components/TextInput';

const { width, height } = Dimensions.get('window')

const IconInput = (props) => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <View 
      style={{
        ...props.style,
        height: 55,
        width: "100%",
        marginTop: 5,
      }}
    >
      <View 
        style={{
          ...styles.row,
        }}
      >
        <View 
          style={{
            ...styles.icon,
            justifyContent: 'flex-end',
          }}
        >
          <MaterialCommunityIcons 
            name={props.icon} 
            size={25} 
            color={theme.selectedTextColor} 
          />
        </View>
        <TextInput
          editable={true}
          value={props.value}
          placeholder={props.placeholder}
          placeholderTextColor={theme.black}
          style={[
            {
              ...styles.input,
              color: theme.midGray,
              borderBottomColor: theme.midGray,
            },
            props.error && { borderBottomColor: theme.red },
          ]}
          onChangeText={(value) => props.onChangeText(value)}
        />
      </View>
      {props.textError ? (
        <Text 
          style={{ 
            ...styles.textError, 
            color: theme.red,
            marginTop: 5,
          }}>
          {props.textError}
        </Text>
      ) : (
        <View/>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  textError: {
    fontWeight: '500',
    marginLeft: '29%',
    marginVertical: 12,
    marginTop: 3,
  },
  row: {
    padding: 4,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    width: '55%',
    borderBottomWidth: 2,
    textAlign: 'left',
  },
  icon: {
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default IconInput;
