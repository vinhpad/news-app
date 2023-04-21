import React from 'react';
import { View, StyleSheet, ImageBackground, Pressable, Dimensions } from 'react-native';
import { ThemeContext } from '../App';
import { trimString } from '../utils/default';
import Text from './Text';
import Vi from '../utils/languges/vi';
const { width, height } = Dimensions.get('window');

function HotNews({ item, navigation }) {
  const { theme } = React.useContext(ThemeContext);
  
  return (
    <View style={{ marginBottom: 30, width: width * 0.9, height: 275, marginRight: 15 }}>
      <Pressable onPress={() => navigation.push('Detail', { item: item })}>
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
          <View style = {{
            backgroundColor: theme.blue,
            height: 75,
            top: 200,
            borderRadius: 7,
          }}>
            <View
              style={{
                height: 50,
              }}
            >
              <Text
              style={{
                ...styles.newsTitle,
                color: theme.darkWhite,
              }}
              numberOfLines={2}
              >
                {trimString(item.title, 200)}
             </Text>
            </View>
            
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                
              }}
            >
              <Text
                style={{
                  ...styles.textAuthor,
                  color: theme.darkWhite,
                }}
              >
                {trimString(item.writer, 20)}
              </Text>
              <Text
                style={{
                  ...styles.textDate,
                  color: theme.darkWhite,
                }}
              >
                {item.date?.slice(0, -15) || ''}
              </Text>
            </View>
          </View>
          
        </ImageBackground>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  imageNews: {
    justifyContent: 'space-between',
    height: 195,
    width: width * 0.9,
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

export default HotNews;
