import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/views/screens/HomeScreen";
import DemoScreen from "./src/screens/DemoScreen";
import OnBoardScreen from "./src/views/screens/OnBoardScreen";
import DetailsScreen from './src/views/screens/DetailsScreen';
import CartScreen from './src/views/screens/CartScreen';
import ShopScreen from './src/views/screens/ShopScreen';
import ProductsScreen from './src/views/screens/ProductsScreen';
//import BottomNavigator from './src/views/navigation/BottomNavigator';

/* const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="BoardScreen" component={OnBoardScreen} />
        <Stack.Screen name="Home" component={BottomNavigator} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App; */

const navigator = createStackNavigator (
  {    
    OnBoard: {
      screen: OnBoardScreen,
      defaultNavigationOptions: {
        headerShown: false, //not working, header shown on onboard screen
      },
    },
    Home: HomeScreen,
    Details: DetailsScreen,
    Cart: CartScreen,
    Shop: ShopScreen,
    Products: ProductsScreen,
    Demo: DemoScreen,
  },
  {
    initialRouteName: "OnBoard",
    defaultNavigationOptions: {
      //only want header to not show on OnBoardScreen - if back buttons work, but they don't
      //headerShown: false,
    },
  },
);

if(__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

export default createAppContainer(navigator);