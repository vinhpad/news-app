import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import { Button } from '../../utils/CustomButton';
import IconInput from '../../utils/Input';
import { API_URL } from '../../utils/api/userService';
import Text, { HeaderText } from '../../components/Text';
import { ThemeContext } from '../../App';
import { strings } from '../../utils/languges/direct';
const Ajv = require("ajv");
const ajv = new Ajv();
const {width, height} = Dimensions.get('window')

function Signup({ navigation }) {
  const { theme } = React.useContext(ThemeContext);

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [checkPass, setCheckPass] = useState('');
  const [onSubmit, setOnSubmit] = useState(false);
  const [errorName, setErrorName] = useState('');
  const [errorPass, setErrorPass] = useState('');
  const [errorCheckPass, setErrorCheckPass] = useState('');

  const validateEmail = (value) => {
    if (!value) {
      setErrorEmail(strings.enterEmail);
    } else {
      if (value
        .toLowerCase()
        .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        setErrorEmail('');
        return true;
      } else {
        setErrorEmail(strings.enterValidEmail);
      }
    }
    return false;
  };

  const validateName = (value) => {
    if (!value) {
      setErrorName(strings.enterName);
    } else {
      setErrorName('');
      return true;
    }
    return false;
  };

  const validatePass = (value) => {
    if (!value) {
      setErrorPass(strings.enterPass);
    } else if (value.length < 6 || value.length > 20) {
      setErrorPass(strings.enterValidPass);
    } else {
      setErrorPass('');
      return true;
    }
    return false;
  };

  const validateCheckPass = (value) => {
    if (!value) {
      setErrorCheckPass(strings.enterPass);
    } else if (password !== value) {
      setErrorCheckPass(strings.matchPass);
    } else {
      setErrorCheckPass('');
      return true;
    }
    return false;
  };
  
  const submit = () => {
    setOnSubmit(true);
    const valid1 = validateEmail(email);
    const valid2 = validateName(username);
    const valid3 = validatePass(password);
    const valid4 = validateCheckPass(checkPass);
    if (valid1 && valid2 && valid3 && valid4) {
      axios
        .post(`${API_URL}/users/`, {
          username,
          email,
          password,
        })
        .then((res) => {
          if (res.data.error) {
            Toast.show({
              type: 'errorToast',
              text1: res.data.error,
              visibilityTime: 2000,
            });
            setErrorEmail(res.data.error);
          } else {
            Toast.show({
              type: 'successToast',
              text1: strings.signupSuccess,
              visibilityTime: 2000,
            });
            navigation.navigate('Login');
          }
        });
    }
  };

  return (
    <View style={{ 
      ...styles.container, 
      backgroundColor: theme.white, 
      height: '100%', 
      width: '100%',
      flexDirection: 'column',
      }}>
      <ScrollView>
        <View
          style={{
            ...styles.header,
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <HeaderText
            style={{
              ...styles.header,
              color: theme.blue
            }}
          >
            {strings.signup}
          </HeaderText>
        </View>
        <View
          style = {{
            width: width - 40,  
            alignItems: 'center',
          }}
        >
          <Image
            style={{...styles.image, borderColor: theme.blue}}
            source={require('../../../assets/logo.png')}
            resizeMode="contain"
          ></Image>
        </View>
        <View style={{...styles.input}}>
          <View>
            <IconInput
              placeholder={strings.email}
              icon="email-outline"
              value={email}
              textError={errorEmail}
              error={errorEmail !== ''}
              onChangeText={(value) => {
                setEmail(value);
                if (onSubmit) validateEmail(value);
              }}
            />
          </View>
          <View>
            <IconInput
              placeholder={strings.name}
              icon="account-outline"
              value={username}
              textError={errorName}
              error={errorName !== ''}
              onChangeText={(value) => {
                setUsername(value);
                if (onSubmit) validateName(value);
              }}
            />
          </View>
          <View>
          <IconInput
            placeholder={strings.password}
            autoCapitalize={'none'}
            secureTextEntry = {true}
            icon="lock-outline"
            value={password}
            textError={errorPass}
            error={errorPass !== ''}
            onChangeText={(value) => {
              setPassword(value);
              if (onSubmit) validatePass(value);
            }}
          />
          </View>
          <View>
            <IconInput
              placeholder={strings.confirm}
              autoCapitalize={'none'}
              secureTextEntry='true'
              icon="lock-check-outline"
              value={checkPass}
              textError={errorCheckPass}
              error={errorCheckPass !== ''}
              onChangeText={(value) => {
                setCheckPass(value);
                if (onSubmit) validateCheckPass(value);
              }}
            />
          </View>
        </View>
        <View
          style = {{
            ...styles.button,
          }}
        >
          <Button
            buttonStyles={{ padding: 12, backgroundColor: theme.blue, }}
            text={strings.signUpNow}
            onPress={submit}
          />
        </View>
        <View
          style = {{
            height: 30,
            flexDirection: 'row',
            alignSelf: 'center',
            marginTop: 20,
          }}
        >
            <Text
              style={{
                ...styles.textFooter,
              }}
            >
              {strings.haveAccount}
            </Text>
            <Text
              style={{
                ...styles.navigation,
                color: theme.blue,
              }}
              onPress={() => navigation.replace('Login')}
            >
              {strings.login}
            </Text>
        </View>
        
        
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  input: {
    width: width - 40,
    alignContent: "center",
  },  
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '3%',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 250,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 75,
    marginTop: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textFooter: {
    textAlign: 'center',
  },
  navigation: {
    textAlign: 'center',
    marginLeft: 5,
  },
});

export default Signup;
