import { styleSheets } from 'min-document';
import React from 'react';
import { Dimensions, Image, SafeAreaView, SectionList, StyleSheet, Text, View } from 'react-native';
import { FlatList, ScrollView, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import { PrimaryButton } from '../components/Button';

const ShopScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={style.header}>
        <Image
          source={require('../../assets/mart.png')}
          style={{height: 100, width: 100, marginTop: -13}}
        />
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Tianjin Mart
            </Text>
          </View>
          <Text style={{marginTop: 5, fontSize: 16, color: COLORS.grey}}>
            Active 11 minutes ago
          </Text>
          <Text style={{marginTop: 5, fontSize: 14, fontWeight: 'bold', color: COLORS.grey}}>
            Followers 37.4k | Following 1
          </Text>
        </View>
        <View style={style.shopBtn}>
          <Text style={{color: COLORS.white}}>
            Follow
          </Text>
        </View>
      </View>
      <SectionList
        sections={shopDetails}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />} 
        renderSectionHeader={({ section: { title } }) => (
          <Text style={style.sectionHeader}>{title}</Text>
        )}
      />
      <PrimaryButton
          onPress={() => navigation.navigate('Home')}
          title="View All Products"
      />
    </SafeAreaView>
  );
};

const shopDetails = [
  { //could have been done in a better way having 2 different sets of data but didn't figure out how so just used whitespace
    title: "Shop Details",
    data: ["Rating                                                     4.9 out of 5 (4.7k Ratings)",
    "Chat performance                                            89% (Within hours)",
    "Products                                                                                      129",
    "Joined                                                                                 18 weeks"]
  },
  {
    title: "Shop Link",
    data: ["shopee.sg/tianjin.mart"]
  },
  {
    title: "Verified Accounts",
    data: ["Email, Mobile Number"]
  },
];

const Item = ({ title }) => (
  <View style={style.item}>
    <Text style={style.title}>{title}</Text>
  </View>
);

const style = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
  },
  shopBtn: {
    width: 70,
    height: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 15,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionHeader: {
    fontSize: 15,
    paddingHorizontal: 20,
    marginVertical: 15,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  item: {
    backgroundColor: COLORS.light,
    padding: 20,
    marginVertical: 1,
  },
  title: {
    fontSize: 13,
    color: COLORS.black,
  },
});

export default ShopScreen;