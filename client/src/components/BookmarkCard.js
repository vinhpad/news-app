import React from 'react';
import { View, StyleSheet, ImageBackground, Pressable, Dimensions } from 'react-native';
import { ThemeContext } from '../App';
import { trimString } from '../utils/default';
import Text from './Text';
import Vi from '../utils/languges/vi';
const { width, height } = Dimensions.get('window');

function BookmarkCard({ item, navigation }) {
  const { theme } = React.useContext(ThemeContext);
  
  return (
    <View style={{ marginBottom: 14, width: width * 0.9 }}>
      <Pressable onPress={() => navigation.push('Detail', { item: item })}>
        <View
          style={{
            height: 80,
            width: width * 0.9,
            backgroundColor: theme.darkWhite,
            borderRadius: 7
          }}
          flexDirection = 'row'
        >
          <View
            style={{
              height: 80,
              width: 80
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
              width: width * 0.9 - 80,
              marginTop: 5,
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
          </View>

          
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  imageNews: {
    justifyContent: 'space-between',
    height: 80,
    width: 80,
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

export default BookmarkCard;
