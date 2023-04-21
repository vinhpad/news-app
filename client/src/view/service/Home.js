import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  RefreshControl,
  useWindowDimensions,
  StatusBar,
  Platform, 
  Image,
  Dimensions
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { trimString } from '../../utils/default';
import NewsCard from '../../components/NewsCard';
import HotNews from '../../components/HotNews';
import {
  setEmailRedux,
  setIdUserRedux,
  setProfilePhotoPathRedux,
  setUsernameRedux,
} from '../../redux/actions';
import { ThemeContext, newThemeContext } from '../../App';
import LinearGradient from 'react-native-linear-gradient';
import Text, { SectionHeaderText } from '../../components/Text';
import TextInput from '../../components/TextInput';
import { getCategory, getNews } from '../../utils/api/userService';
import CustomButton from '../../utils/CustomButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native';
import {changeLanguage, strings, getData} from "../../utils/languges/direct"
import { allTabs } from '../../utils/default';
const { width, height } = Dimensions.get('window');



function Home({ navigation }) {
  const {theme, font} = React.useContext(ThemeContext);
  const [refreshing, setRefreshing] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [news, setNews] = useState([]);
  const [hotNews, setHotNews] = useState(null);
  const window = useWindowDimensions();
  const newsLengthRef = useRef(0);
  const [languge, setLanguage] = useState('');
  const [timerID, setTimerID] = useState(null)
  const [nextPage, setNextPage] = useState(null)
  const [index, setIndex] = useState(0)
  const [tabs, setTabs] = useState([]);
  const scrollViewRef = useRef('scrollview');
  const ref = useRef()

  const [selectedTab, setSelectedTab] = useState(null);

  const dispatch = useDispatch();

  const getTabs = async () => {
    await getCategory()
      .then((res) => {
        setTabs(res.data.map((i) => i.nameCategory));
        setSelectedTab(res.data[0].nameCategory);
      })
      .catch(() => {});
  };

  const getLang = async () => {
    await getData("appLang")
      .then(data => data)
      .then(value => {
        setLanguage((languge) => value)
      })
    .catch(err => console.log(err))
  }

  const getAllNews = async () => {
    await getNews(selectedTab)
      .then((res) => {
        setNews(res.data);
        setHotNews(res.data ? 0 : null);
        newsLengthRef.current = res.data.length;
      })
      .catch(() => {});
  };

  // get alltab, info user and lang
  useEffect(() => {
    getTabs();
    AsyncStorage.getItem('user').then((user) => {
      let userData = JSON.parse(user);
      if (userData) {
        dispatch(setEmailRedux(userData.email));
        dispatch(setUsernameRedux(userData.username));
        dispatch(setIdUserRedux(userData.idUser));
        dispatch(setProfilePhotoPathRedux(userData.profilePhotoPath));
      }
    });
    changeLanguage("vi")
    getLang()
  }, []);

  // swap hotnews
  useEffect(()=> {
    const interval = setInterval(() => {
      ref?.current?.scrollTo({y: width * 0.9365 * index, animated: true});
      setIndex((index + 1) % newsLengthRef.current);
    }, 5000);
    return () => clearInterval(interval);
    });

  // get new
  useEffect(() => {
    if (selectedTab) {
      getAllNews();
    }
  }, [selectedTab]);

  // dark mode
  useEffect(() => {

  })

  const onRefresh = () => {
    setRefreshing(true);
    setSearchInput('');
    getAllNews().then(() => setRefreshing(false));
  };

  const filteredNews = news.filter((item) =>
    item.title.toLowerCase().includes(searchInput.toLowerCase()),
  );

  

  return (
    <View style={{ 
      ...styles.container, 
      backgroundColor: theme.white, 
      height: '100%', 
      }}>
      {/*header */}
      <View
        style={{
          ...styles.header,
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Image
          style={styles.tinyLogo}
          source={require('client/assets/logo.png')}
        />
        <Text
          style={{
            lineHeight: 20,
            color: theme.blue,
            fontWeight: 'bold',
            fontStyle: 'italic',
            alignItems: "center",
            fontSize: 17,
          }}
        >
          VSTC News
        </Text>
        <View
          style={{width: '8%',}}
        >
          
        </View>
        <View
          style={{
            ...styles.headerSearch,
            borderColor: theme.blue,
            height: font.lineHeight * 2.8,
          }}
        >
          <TextInput
            style={{ 
              display: 'flex', 
              flex: 1,
              alignItems: "center",
              alignSelf: 'center'
            }}
            placeholder={strings.search}
            value={searchInput}
            onChangeText={(value) => setSearchInput(value)}
          />
          <MaterialCommunityIcons
            name="magnify"
            color={theme.midGray}
            size={font.fontSize + 10}
          />
        </View>
        <LinearGradient colors={[theme.blue, theme.blue]} style={styles.linearGradient}>
          <MaterialCommunityIcons name="bell-ring" color="#fff" size={font.fontSize + 8} />
        </LinearGradient>
      </View>
      {/**category tabs */}
      <View
        style={{
          flexDirection: 'row', 
          alignItems: 'center',
          marginTop: 5,
        }}
      >
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          {tabs.map((item, index) => (
            <CustomButton
              key={index}
              onPress={() => {
                setSelectedTab(item);
              }}
              style={{
                ...styles.tab,
                borderColor: item === selectedTab ? theme.blue : theme.darkWhite,
                backgroundColor: item === selectedTab ? theme.blue : theme.darkWhite,
              }}
            >
              <Text
                style={{
                  color: item === selectedTab ? theme.darkWhite : theme.blue,
                }}
              >
                {languge == 'vi' ? allTabs.find(({ id }) => id == item).id : allTabs.find(({ id }) => id == item).title }
              </Text>
            </CustomButton>
          ))}
        </ScrollView>
      </View>
      {/*Hot News */}
      <View style={styles.topNewsContainer}>
        <ScrollView
          showsHorizontalScrollIndicator={false} 
          horizontal={true}
          ref={ref}
        >
          {filteredNews.map((item, index) => {
            return <HotNews key={index} item={item} navigation={navigation} />;
          })}
        </ScrollView>
      </View>
      {/**Tabs News */}
      <Text
        style={{
          lineHeight: 20,
          color: theme.blue,
          fontWeight: 'bold',
          fontStyle: 'italic',
          alignItems: 'flex-start',
          fontSize: 17,
        }}
      >
        {strings.recentNews}
      </Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={theme.selectedActiveColor}
          />
        }
      >
        {filteredNews.map((item, index) => {
          return <NewsCard key={index} item={item} navigation={navigation} />;
        })}
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '3%',
    justifyContent: 'center',
  },
  headerSearch: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    width: '40%',
    paddingHorizontal: 10,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  linearGradient: {
    padding: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  tab: {
    borderWidth: 1,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 5,
    marginTop: 0,
  },
  topNewsTitle: {
    fontWeight: 'bold',
  },
  imageStyle: {
    borderRadius: 15,
  },
  imageContent: {
    display: 'flex',
    justifyContent: 'space-evenly',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  topNewsContainer: {
    display: 'flex',
    width: '100%',
    marginVertical: 10,
  },
  topNewsContent: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  topNewsText: {
    padding: 10,
    borderRadius: 10,
  },
});
export default Home;
