import React, { useEffect, useState, useContext } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';

import CustomButton, { Button } from '../../utils/CustomButton';
import IconInput from '../../utils/Input';
import { API_URL } from '../../utils/api/userService';
import {
  setEmailRedux,
  setIdUserRedux,
  setProfilePhotoPathRedux,
  setUsernameRedux,
} from '../../redux/actions';
import Text, { HeaderText } from '../../components/Text';
import { ThemeContext } from '../../App';
import { strings } from '../../utils/languges/direct';
const {width, height} = Dimensions.get('window')

function Login({ navigation }) {
  const { theme } = useContext(ThemeContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [onSubmit, setOnSubmit] = useState(false);
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPass, setErrorPass] = useState('');

  const dispatch = useDispatch();

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

  const validatePass = (value) => {
    if (!value) {
      setErrorPass(strings.enterPass);
    } else {
      setErrorPass('');
      return true;
    }
    return false;
  };

  const submit = () => {
    setOnSubmit(true);
    const valid1 = validateEmail(email);
    const valid2 = validatePass(password);
    if (valid1 && valid2) {
      axios.post(`${API_URL}/users/login`, { email, password }).then((res) => {
        if (res.data.error) {
          Toast.show({
            type: 'errorToast',
            text1: res.data.error,
            visibilityTime: 2000,
          });
          //   setErrorText(true);
        } else {
          Toast.show({
            type: 'successToast',
            text1: strings.loginSuccess,
            visibilityTime: 2000,
          });
          dispatch(setEmailRedux(email));
          dispatch(setUsernameRedux(res.data.username));
          dispatch(setIdUserRedux(res.data.idUser));
          dispatch(setProfilePhotoPathRedux(res.data.profile_photo_path));
          // Save to Async Storage
          AsyncStorage.setItem(
            'user',
            JSON.stringify({
              idUser: res.data.idUser,
              email: res.data.email,
              username: res.data.username,
              profilePhotoPath: res.data.profile_photo_path,
            })
          ).then(() => {
            navigation.replace('Profile');
          });
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
            {strings.login}
          </HeaderText>
        </View>
        <View
          style = {{width: width - 40, flex: 1, display: 'flex', alignItems: 'center'}}
        >
          <Image
            style={{...styles.image, borderColor: theme.blue}}
            source={require('../../../assets/logo.png')}
            resizeMode="contain"
          ></Image>
        </View>
        <View style={{...styles.input}}>
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
          <IconInput
            placeholder={strings.password}
            secureTextEntry
            icon="lock-outline"
            value={password}
            textError={errorPass}
            error={errorPass !== ''}
            onChangeText={(value) => {
              setPassword(value);
              if (onSubmit) validatePass(value);
            }}
          />
          <TouchableOpacity style={{ marginTop: 20, width: '85%' }}>
            <Text style={{ textAlign: 'right', color: theme.blue }}>
              {strings.forgotPassword}
            </Text>
          </TouchableOpacity>
        </View>
        <View 
          style = {{
            ...styles.button,
          }}>
          <Button
            buttonStyles={{ padding: 12, marginTop: 20, backgroundColor: theme.blue, }}
            text={strings.loginNow}
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
              {strings.createAccount}
            </Text>
            <Text
              style={{
                ...styles.navigation,
                color: theme.blue,
              }}
              onPress={() => navigation.replace('Signup')}
            >
              {strings.signup}
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

export default Login;
