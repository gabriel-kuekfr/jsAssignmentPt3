import React, { useState } from 'react';
import { View, Text, Image, Button } from 'react-native';
import reactotron from 'reactotron-react-native';

const ItemRow = ({data = [], item, index = 0}) => {

  // Set the initial count state to zero, 0
  const [count, setCount] = useState(0);

  // Create handleIncrement event handler
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
    reactotron.log('handle Increment Called',item.name)
  };

  // Create handleDecrement event handler
  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
    reactotron.log('handle Decrement Called',item.name)
  };

  const {
    containerStyle, 
    lastItemStyle,
    imageStyle, 
    textStyle,
    buttonStyle
  } = styles;

  return (
    <View style={(index + 1 === data.length) ? lastItemStyle : containerStyle}>
      <Image source={item.image} style={imageStyle} />

      <View style={textStyle}>
        <Text style={{ color: '#2e2f30' }}>{item.name}</Text>
        <Text style={{ color: '#2e2f30', backgroundColor: 'lightgrey', padding: 3, alignSelf: 'baseline' }}>${item.price}</Text>
        <Text style={[styles.amountTakenStyle,
        {opacity: count > item.amountTaken ? 100 : 0}]}>Above purchase limit of {item.amountTaken}
        </Text>
      </View>

      <View style={textStyle}>
      <Text style={{ color: '#2e2f30' }}>${item.price * count}</Text>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={ styles.buttonStyle }>
        <Button
        disabled={count==0}
        title="-"
        color="white"
        onPress={handleDecrement}
        />
        </View>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text>  {count}  </Text>
        <View style={ styles.buttonStyle }>
        <Button
        disabled={count > item.amountTaken}
        title="+"
        color="white"
        onPress={handleIncrement}
        />
        </View>
      </View>
    </View>);
};

const styles = {
    containerStyle: {
      flexDirection: 'row',
      flex: 1,
      borderBottomWidth: 1,
      borderColor: '#e2e2e2',
      padding: 10,
      paddingLeft: 15,
      backgroundColor: '#fff'
    },
    lastItemStyle: {
      flexDirection: 'row',
      flex: 1,
      padding: 10,
      paddingLeft: 15,
      backgroundColor: '#fff'
    },
    imageStyle: {
      width: 50, 
      height: 50, 
      marginRight: 20
    },
    textStyle: {
      flex: 2,
      justifyContent: 'center'
    },
    amountTakenStyle: {
      color: 'red'
    },
    buttonStyle:{
      backgroundColor: 'lightgrey',
      width: 35,
      height: 35,
      borderRadius: 20,
    }
  };

  export default ItemRow;