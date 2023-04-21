import React from 'react';
import { View, StyleSheet, ImageBackground, Pressable, Dimensions } from 'react-native';
import { ThemeContext } from '../App';
import { trimString } from '../utils/default';
import Text from './Text';
import Vi from '../utils/languges/vi';

function NewsCard({ item, navigation }) {
  const { theme } = React.useContext(ThemeContext);
  const { width, height } = Dimensions.get('window');

  return (
    <View style={{ marginBottom: 14, width: width * 0.9 }}>
      <Pressable onPress={() => navigation.push('Detail', { item: item })}>
        <View
          style={{
            height: 160,
            width: width * 0.9,
            backgroundColor: theme.darkWhite,
            borderRadius: 7
          }}
          flexDirection = 'row'
        >
          <View
            style={{
              height: 160,
              width: 110
            }}
          >
            <ImageBackground
              source={{
                uri:
                  item.image ||
                  'https://user-images.githubusercontent.com/43302778/106805462-7a908400-6645-11eb-958f-cd72b74a17b3.jpg',
              }}
              resizeMode="cover"
              style={styles.imageNews}
              imageStyle={{
                borderRadius: 7,
              }}
            >
            </ImageBackground>
          </View>

          <View
            style = {{
              width: width * 0.9 - 110,
              marginTop: 5,
              paddingLeft: 5,
              paddingRight: 5,
            }}
            flexDirection = "column"
          >
            <Text
              style={{
                ...styles.newsTitle,
                color: theme.blue,
              }}
              numberOfLines={2}
            >
              {trimString(item.title, 200)}
            </Text>
            <View
              style = {{
                height: 80,
              }}
            >
              <Text
                style={{
                  ...styles.textDetail,
                  color: theme.midGray,
                  marginTop: 5,
                }}
                numberOfLines={5}
              >
                {item.description}
              </Text>
            </View>
            <Text
              style={{
                ...styles.textDetail,
                color: theme.midGray,
                marginTop: 15,
              }}
              numberOfLines={1}
            >
              {item.writer}
            </Text>
          </View>

          
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  imageNews: {
    justifyContent: 'space-between',
    height: 160,
    width: 110,
    marginRight: 15,
  },
  newsTitle: {
    padding: 5,
    paddingLeft: 10,
    fontSize: 15,
    lineHeight: 17,
    fontWeight: 'bold',
    textAlign:'justify',
  },
  textDetail: {
    fontSize: 12,
    paddingLeft: 10,

  },
  textAuthor: {
    fontStyle: 'italic',
    padding: 5,
    paddingLeft: 10,
    fontWeight: '400'
  },
  textDate: {
    fontStyle: 'italic',
    padding: 5,
    paddingRight: 10,
    fontWeight: '400'
  }
});

export default NewsCard;
