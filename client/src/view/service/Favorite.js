import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, RefreshControl } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ThemeContext } from '../../App';
import BookmarkCard from '../../components/BookmarkCard';
import { HeaderText } from '../../components/Text';
import Text from '../../components/Text';
import TextInput from '../../components/TextInput';
import { getCategory, getFavouriteNewsByTab, getFavouriteTabs, getNews } from '../../utils/api/userService';
import CustomButton from '../../utils/CustomButton';
import { useSelector } from 'react-redux';
import Toast from 'react-native-toast-message';
import {changeLanguage, strings, getData} from "../../utils/languges/direct"
import { allTabs } from '../../utils/default';
import LinearGradient from 'react-native-linear-gradient';

function Favorite({ navigation }) {
  const { idUser } = useSelector((state) => state.taskReducer);
  const { theme, font } = React.useContext(ThemeContext);
  const [news, setNews] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [languge, setLanguage] = useState('');
  const [tabs, setTabs] = useState([]);
  const [selectedTab, setSelectedTab] = useState(null);

  const getTabs = async () => {
    if (idUser) {
      await getFavouriteTabs(idUser)
        .then((res) => {
          if (res.data.length === 0) {
            Toast.show({
              type: 'errorToast',
              text1: 'Bạn chưa có bài viết yêu thích',
              visibilityTime: 2000,
            });
          }
          setTabs(res.data.map((i) => i.nameCategory));
          setSelectedTab(res.data[0].nameCategory);
        })
        .catch(() => {});
    } else {
      await getCategory()
        .then((res) => {
          setTabs(res.data.map((i) => i.nameCategory));
          setSelectedTab(res.data[0]?.nameCategory);
        })
        .catch(() => {});
    }
  };

  const getAllNews = async () => {
    if (idUser) {
      await getFavouriteNewsByTab({ idUser: idUser, nameCategory: selectedTab })
        .then((res) => {
          setNews(res.data);
        })
        .catch(() => {});
    } else {
      await getNews(selectedTab)
        .then((res) => {
          setNews(res.data);
        })
        .catch(() => {});
    }
  };

  const getLang = async () => {
    await getData("appLang")
      .then(data => data)
      .then(value => {
        setLanguage((languge) => value)
      })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getTabs();
    if (!idUser) {
      Toast.show({
        type: 'errorToast',
        text1: 'Bạn chưa đăng nhập',
        visibilityTime: 2000,
      });
    }
  }, [idUser]);

  useEffect(() => {
    if (selectedTab) getAllNews();
  }, [selectedTab]);

  useEffect(() => {
    changeLanguage("vi")
    getLang()
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    setSearchInput('');
    if (!idUser) {
      Toast.show({
        type: 'errorToast',
        text1: 'Bạn chưa đăng nhập',
        visibilityTime: 2000,
      });
    }
    getTabs().then(() => getAllNews().then(() => setRefreshing(false)));
  };

  const filteredNews = news.filter((item) =>
    item.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <View style={{ 
      ...styles.container, 
      backgroundColor: theme.white, 
      height: '100%', 
      }}>
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
          Yêu thích
        </HeaderText>
        <View
          style={{width: '17%',}}
        >
          
        </View>
        <View
          style={{
            ...styles.headerSearch,
            borderColor: theme.blue,
            height: font.lineHeight * 2.8,
            marginTop: 5,
          }}
        >
          <TextInput
            style={{ 
              display: 'flex', 
              flex: 1,
            }}
            placeholder={strings.search}
            value={searchInput}
            onChangeText={(value) => setSearchInput(value)}
          />
          <MaterialCommunityIcons
            name="magnify"
            color={theme.blue}
            size={font.fontSize + 10}
          />
        </View>
        <LinearGradient colors={[theme.blue, theme.blue]} style={{...styles.linearGradient, marginTop: 5}}>
          <MaterialCommunityIcons name="bell-ring" color="#fff" size={font.fontSize + 8} />
        </LinearGradient>
      </View>

      <View
        style={{
          flexDirection: 'row', 
          alignItems: 'center',
          marginTop: 6,
          marginBottom: 10,
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

      <ScrollView showsVerticalScrollIndicator={false}>
        {filteredNews.map((item, index) => {
          return <BookmarkCard key={index} item={item} navigation={navigation} />;
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
});
export default Favorite;
