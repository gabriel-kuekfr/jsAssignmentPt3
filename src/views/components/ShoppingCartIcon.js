//import { styleSheets } from "min-document";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import COLORS from "../../consts/colors";
import Icon from 'react-native-vector-icons/Ionicons';

const ShoppingCartIcon = (props) => (
  <View style={{ paddingRight: 10}}>
    <View style={{
      position: 'absolute', height: 30, width: 30, borderRadius: 15,
      backgroundColor: COLORS.grey, right: 35, bottom: 20,
      alignItems: 'center', justifyContent: 'center', zIndex: 0,
    }}>
      <Text style={{color: COLORS.white, fontWeight: 'bold'}}>0</Text>
    </View>
    <Icon name="ios-cart" size={35} color={COLORS.primary}/>
  </View>
)

export default ShoppingCartIcon;

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
}); */