import React, { createContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Toast from 'react-native-toast-message';
 
import Home from './view/service/Home';
import Favorite from './view/service/Favorite';
import Login from './view/auth/Login';
import Signup from './view/auth/Signup';
import Profile from './view/service/Profile';
import Setting from './view/service/Setting';
import Detail from './view/service/Detail';
import { FONT_FAMILY, FONT_CONFIG } from './components/Text';
import { Store } from './redux/store';
import { Provider } from 'react-redux';
import Splash from './view/service/Splash';
import { strings } from './utils/languges/direct';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const toastConfig = {
  successToast: ({ text1 }) => (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

        height: 50,
        width: '90%',
        backgroundColor: 'white',

        borderRadius: 5,
        borderLeftColor: '#4BB543',
        borderLeftWidth: 8,
        elevation: 2,
      }}
    >
      <AntDesign name="checkcircleo" size={24} color="#4BB543" style={{ marginHorizontal: 12 }} />
      <Text style={{ fontSize: 16, fontWeight: '500', color: '#4BB543', maxWidth: '85%' }}>
        {text1}
      </Text>
    </View>
  ),

  errorToast: ({ text1 }) => (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

        height: 50,
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 5,
        borderLeftColor: '#ff3333', 
        borderLeftWidth: 8,
        elevation: 2,
      }}
    >
      <AntDesign name="closecircleo" size={24} color="#ff3333" style={{ marginHorizontal: 12 }} />
      <Text style={{ fontSize: 16, fontWeight: '500', color: '#ff3333', maxWidth: '85%' }}>
        {text1}
      </Text>
    </View>
  ),

  disableToast: ({ text1 }) => (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

        height: 50,
        width: '90%',
        backgroundColor: 'white',

        borderRadius: 5,
        borderLeftColor: '#cccccc',
        borderLeftWidth: 8,
        elevation: 2,
      }}
    >
      <MaterialIcons
        name="do-not-touch"
        size={24}
        color="#cccccc"
        style={{ marginHorizontal: 12 }}
      />
      <Text style={{ fontSize: 16, fontWeight: '500', color: '#cccccc' }}>{text1}</Text>
    </View>
  ),
};

const UserStack = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const FavoriteStack = () => {
  return (
    <Stack.Navigator initialRouteName="Favorite">
      <Stack.Screen
        name="Favorite"
        component={Favorite}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export const ThemeContext = React.createContext(THEME);
export const THEME = {
  selectedBgColor: '#FFFFFF',
  selectedTextColor: '#000000',
  selectedActiveColor: '#BB2649',
  selectedButtonColor: '#BB2649',
  selectedButtonTextColor: '#FFFFFF',
  red: '#E93D25',
  lightGray: '#707070',
  midGray: '#777777',
  darkGray: '#464646',
  gray: '#c4c4c4',
  blue: '#1E4079',
  lightBlack: '#343434',
  black: '#1b1b1f',
  darkWhite: '#F8F8F8',
  lightWhite: '#F3F3F3',
  white: '#FFFFFF'
};


const App = () => {
  const [theme, setTheme] = React.useState(THEME);
  const [font, setFont] = React.useState({ fontFamily: FONT_FAMILY[0], ...FONT_CONFIG });
  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        setTheme: setTheme,
        font: font,
        setFont: setFont,
      }}
    >
      <Provider store={Store}>
        <View style={{ flex: 1, backgroundColor: theme.selectedBgColor }}>
          <NavigationContainer>
            <Tab.Navigator
              initialRouteName="Home"
              screenOptions={{
                tabBarActiveTintColor: theme.blue,
                headerShown: false,
                tabBarInactiveBackgroundColor: theme.selectedBgColor,
                tabBarActiveBackgroundColor: theme.selectedBgColor,
              }}
            >
              <Tab.Screen
                name="HomeStack"
                component={HomeStack}
                options={{
                  tabBarLabel: strings.home,
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home-outline" color={color} size={size} />
                  ),
                }}
              />

              <Tab.Screen
                name="FavoriteStack"
                component={FavoriteStack}
                options={{
                  tabBarLabel: strings.bookmarks,
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons
                      name="bookmark-outline"
                      color={color}
                      size={size}
                    />
                  ),
                }}
              />
              <Tab.Screen
                name="UserStack"
                component={UserStack}
                options={{
                  tabBarLabel: strings.user,
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="emoticon-outline" color={color} size={size} />
                  ),
                }}
              />
              <Tab.Screen
                name="Setting"
                component={Setting}
                options={{
                  tabBarLabel: 'Cài đặt',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="cog-outline" color={color} size={size} />
                  ),
                }}
              />
            </Tab.Navigator>
            <Toast config={toastConfig} />
          </NavigationContainer>
        </View>
      </Provider>
    </ThemeContext.Provider>
  );
};

export default App;
