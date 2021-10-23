import React, { Component } from 'react';
import { Text, View, FlatList, Button } from 'react-native';
import ItemRow from '../views/components/itemRow'

const orangeImg = require('../assets/images/orange.jpg');
const tomatoImg = require('../assets/images/tomato.jpg');
const salmonImg = require('../assets/images/salmon.jpg');
const greensImg = require('../assets/images/greens.jpg');
const ryebreadImg = require('../assets/images/rye-bread.jpg');

export default class DemoScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      singleData:[],
      data: []
    }
  }

  componentDidMount() {
    const data = [
    {
      id: 1,
      image: orangeImg,
      name: 'Orange',
      price: 10,
      amountTaken: 3
    }, {
      id: 2,
      image: tomatoImg,
      name: 'Tomato',
      price: 5,
      amountTaken: 4
    }, {
      id: 3,
      image: salmonImg,
      name: 'Salmon Fillet',
      price: 16,
      amountTaken: 2
    }, {
      id: 4,
      image: greensImg,
      name: 'Greens',
      price: 3,
      amountTaken: 3
    }, {
      id: 5,
      image: ryebreadImg,
      name: 'Rye Bread',
      price: 20,
      amountTaken: 1
    },  
    ];

    const singleData = {
      id: 1,
      image: ryebreadImg,
      name: 'Rye Bread',
      price: 20,
      amountTaken: 1
    }

    this.setState({ singleData: singleData, data: data });
  }

  render() {
    const { containerStyle, textStyle } = styles;
    return (
      <View style={containerStyle} >
        <Text style={textStyle}>Anhui Bakery</Text>
        <View style={{flexDirection: 'row'}}>
          <ItemRow
            item={this.state.singleData}
            />
          </View>
        <Text style={textStyle}>Tianjin Mart</Text>
        <FlatList
          data={this.state.data}
          renderItem={({ item, index }) => (
              <ItemRow
              data={this.state.data}
              item={item}
              index={index}
              />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
        <View style={{ flex: 1.5, backgroundColor: "white" }}>
        <Text style={{ color: '#2e2f30' }}>Item Count:</Text>
        <Text style={{ color: '#2e2f30' }}>Total Cost:</Text>
          <View style={ styles.closeButtonStyle }>
            <Button
            title="Close"
            color="white"
            onPress={() => navigation.navigate('Home')}
          />
          </View>
          <View style={ styles.checkoutButtonStyle }>
          <Button
            title="Go to checkout"
            color="white"
          />
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    borderColor: '#e2e2e2',
    backgroundColor: 'lightgrey'
  },
  textStyle: {
    justifyContent: 'center'
  },
  closeButtonStyle:{
    backgroundColor: 'grey',
    borderRadius: 5,
    padding: 5,
    position: 'absolute',
    bottom: 50,
    left: 20
  },
  checkoutButtonStyle:{
    backgroundColor: 'orange',
    borderRadius: 5,
    padding: 5,
    position: 'absolute',
    bottom: 50,
    right: 20
  }
}