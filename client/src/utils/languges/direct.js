import LocalizedStrings from 'react-native-localization'
import { english, vietnamese } from '.'
import AsyncStorage from '@react-native-async-storage/async-storage'

let strings = new LocalizedStrings({
  vi: vietnamese,
  en: english,
  
})

export {strings};

export const defaultLanguage = async () => {
  try {
    const lang = await AsyncStorage.getItem('appLang')
    if (lang) {
      strings.setLanguage(lang)
    }
  } catch (error) {
    console.log("err set default lang", error.message);
  }
}

export const changeLanguage = async (lang) => {
  try {
    //console.log(JSON.stringify(AsyncStorage.getItem('appLang')));
    strings.setLanguage(lang)
    AsyncStorage.setItem(
      'appLang',
      lang
    );
  } catch (error) {
    console.log("err set lang", error.message);
  }
}

export const getData = async (key) => {
  // get Data from Storage
  try {
    const data = await AsyncStorage.getItem(key);
    if (data !== null) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};