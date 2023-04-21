import React, { useEffect, useState, useRef } from 'react';
import { Image, ScrollView, StyleSheet, useWindowDimensions, SafeAreaView, Dimensions, ImageBackground, ImageBackgroundComponent } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Text, { fontFamily, SectionHeaderText } from '../../components/Text';
import { ThemeContext } from '../../App';
import CustomButton from '../../utils/CustomButton';
import View from '../../components/View';
import Tts from 'react-native-tts';
import { useSelector } from 'react-redux';
import { deleteFavourite, getFavouriteCheck, postFavourite } from '../../utils/api/userService';
import Toast from 'react-native-toast-message';
import { allTabs } from '../../utils/default';
import { changeLanguage, getData, strings } from '../../utils/languges/direct';
import { CommonActions } from '@react-navigation/native';

function urlify(text) {
  var urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.replace(urlRegex, ' ');
}

const {width, height} = Dimensions.get('window')

function Detail(props) {
  const { idUser } = useSelector((state) => state.taskReducer);
  const item = props.route.params.item;
  const { theme, font } = React.useContext(ThemeContext);

  const [heart, setHeart] = useState(false);
  const [speak, setSpeak] = useState(false);
  const [selectedTab, setSelectedTab] = useState(null);
  const [languge, setLanguage] = useState('');

  const getLang = async () => {
    await getData("appLang")
      .then(data => data)
      .then(value => {
        setLanguage((languge) => value)
      })
    .catch(err => console.log(err))
    
  }

  useEffect(() => {
    changeLanguage("vi")
    getLang()
  }, []);

  useEffect(() => {
     Tts.getInitStatus().then(() => {
      Tts.setDefaultLanguage('vi-VN');
      Tts.stop();
    });
    if (idUser) {
      getFavouriteCheck({ idUser: idUser, idNewspaper: item.idNewspaper })
        .then((res) => {
          setHeart(res.data.favourite);
        })
        .catch(() => {});
    }
  }, [props]);

  useEffect(() => {
    if (speak) {
      Tts.speak(item.title);
      Tts.speak(item.content);
    } else {
      Tts.stop();
    }
  }, [speak]);

  useEffect(() => {
    if (selectedTab) {
      props.navigation.dispatch(
        CommonActions.navigate({
          name: 'Home',
          params: {selectedTab: item.nameCategory}
        })
      )
    }
  }, [selectedTab]);

  useEffect(() => {
    if (heart) {
      postFavourite({ idUser: idUser, idNewspaper: item.idNewspaper });
    } else {
      deleteFavourite({ idUser: idUser, idNewspaper: item.idNewspaper });
    }
  }, [heart]);

  return (
    
    <View>
      <CustomButton
        onPress={() => {
          Tts.stop();
          props.navigation.goBack();
        }}
        style={{
          ...styles.linearGradient,
          top: 40,
          left: 40,
          display: 'flex',
        }}
      >
      <MaterialCommunityIcons
        name="arrow-left-thin"
        color={theme.darkGray}
        size={font.fontSize + 30}
      />
      </CustomButton>
      <LinearGradient
        colors={['transparent', 'transparent']}
        style={{
          ...styles.linearGradient,
          top: 40, 
          right: 40,
          marginTop: 7,
        }}
        onTouchStart={() => setSpeak(!speak)}
      >
        <MaterialCommunityIcons
          name={speak ? 'volume-off' : 'volume-high'}
          color={theme.darkGray}
          size={font.fontSize + 14}
        />
      </LinearGradient>
      <LinearGradient
        colors={['transparent', 'transparent']}
        style={[styles.linearGradient, { top: 47, right: 100 }]}
        onTouchStart={() => {
          if (idUser) {
            setHeart(!heart);
          } else {
            Toast.show({
              type: 'errorToast',
              text1: strings.needLogin,
              visibilityTime: 2000,
            });
          }
        }}
      >
        <MaterialCommunityIcons
          name={heart ? 'bookmark' : 'bookmark-outline'}
          color={heart ? theme.blue : theme.darkGray}
          size={font.fontSize + 14}
        />
      </LinearGradient>
      <ImageBackground
        style={{
          width: width,
        }}
        source={{
          uri:
            item.image ||
            'https://qph.cf2.quoracdn.net/main-qimg-3d69658bf00b1e706b75162a50d19d6c-pjlq',
        }}
        imageStyle = {{
          width: width,
          height: width + 55
        }}
      >
        <ScrollView>
          <View style = {{
            marginTop: '70%',
            backgroundColor: 'transparent',
          }}>
            <View
              style={{
                ...styles.title,
                backgroundColor: 'transparent',
                
              }}
            >
              <CustomButton
                onPress={() => {
                  setSelectedTab(item)
                }}
                style={{
                  ...styles.tab,
                  borderColor: theme.lightGray,
                  backgroundColor: theme.blue,
                  width: 90,
                  blur: 90,
                }}
              >
                <Text
                  style={{
                    color: theme.white,
                  }}
                >
                  {languge == 'vi' ? 
                    allTabs.find(({ id }) => 
                      id == item.nameCategory).id : 
                      allTabs.find(({ id }) => id == item.nameCategory).title }
                </Text>
              </CustomButton>
              <SectionHeaderText 
                style={{ 
                  marginVertical: 6, 
                  color: theme.white 
                }
              }>
                {item.title}
              </SectionHeaderText>
            </View>
            <View 
              style={{
                ...styles.content,
              }}
            >
              <View
                style={{
                  flexDirection: 'row', 
                }}
              >
                <Text
                  style={{
                    ...styles.boldText,
                    display: 'flex',
                    color: theme.black,
                    width: '75%',
                  }}
                >
                  {item.writer || 'Ẩn danh'}
                </Text>
                <Text
                  style={{
                    display: 'flex',
                    color: theme.black,
                    fontWeight: 'bold',
                    fontStyle: 'italic',
                    textAlign: 'right'
                  }}
                >
                  {item.date?.slice(0, -15) || ''}
                </Text>
              </View>
              <Text
                style={{
                  marginTop: 30,
                  fontStyle: 'italic',
                  fontWeight: 300,
                }}
              >
                {item.description}
              </Text>
              <Text
                style={{
                  marginTop: 20,
                  
                }}
              >
                {item.content}
              </Text>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    borderRadius: 40,
    padding: 24,
    zIndex: 1,
    width: '95%',
    alignSelf: 'center',
    textAlign:'justify'
  },
  content: {
    padding: 28,
    paddingTop: 35,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingBottom: 80,
    textAlign:'justify'
  },
  text: {
    paddingTop: 12,
  },
  boldText: {
    fontWeight: 'bold',
  },
  linearGradient: {
    zIndex: 1,
    position: 'absolute',
  },
  tab: {
    borderWidth: 1,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 5,
  },
});
export default Detail;
