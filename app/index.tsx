// GUMBALLS SOURCE CODE 

// color picker: https://reactnative.dev/docs/colors scroll down to "color keywords"

// background choices:
// https://media.istockphoto.com/id/153030612/vector/candy-bar.jpg?s=612x612&w=0&k=20&c=A4atEqRNuqBb3UnyATewI33xPoOBEeP4mdNtVEDgd3Y=
// https://static.vecteezy.com/system/resources/thumbnails/053/966/180/small/cute-bakery-shop-with-candy-background-vector.jpg

import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  FlatList,
  ImageBackground, 
} from 'react-native';

export default Activities = () => {

  const activityList = [
    {
      id: 1,
      title: 'Number Changer',
      color: 'blue',
    },
    {
      id: 2,
      title: 'Color Changer',
    },
    {
      id: 3,
      title: 'Text Size Changer',
      color: 'yellow',
    },
  ];

  // the useState function is how define what we first see when the app opens
  const [options, setOptions] = useState(activityList);   
  const [number, setNumber] = useState(0);                  // our number starts at 0
  const [currentColor, setCurrentColor] = useState('red'); 
  const [textSize, setTextSize] = useState(18);             // our text size starts at 18 

  const clickEventListener = (item) => {
    if (item.title === 'Number Changer') {
      Alert.alert(
        'Change Number',
        `Current number is: ${number}`,
        [
          {
            text: 'Increase',
            onPress: () => setNumber(number + 1),
          },
          {
            text: 'Decrease',
            onPress: () => setNumber(number - 1),
          },
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
        ]
      );
    } else if (item.title === 'Color Changer') {
      const colors = ['salmon', 'crimson', 'teal', 'lime', 'navy', 'aqua', 'orange', 'pink', 'blueviolet', 'chocolate', 'coral', 'cornflowerblue', 'deeppink', 'lavender'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setCurrentColor(randomColor);
      Alert.alert(
        'Color Changed',
        `The color is now ${randomColor}`,   // the Math library has a random function that randomly picks something from a list!
        [
          {
            text: 'OK',
            onPress: () => console.log('OK Pressed'),
          },
        ]
      );
    } else if (item.title === 'Text Size Changer') {
      Alert.alert(
        'Change Text Size',
        `Current text size is: ${textSize}`,
        [
          {
            text: 'Increase',
            onPress: () => setTextSize(textSize + 2),
          },
          {
            text: 'Decrease',
            onPress: () => setTextSize(textSize - 2),
          },
          {
            text: 'Reset',
            onPress: () => setTextSize(18),
          },
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
        ]
      );
    } else {
      Alert.alert(item.title);  // the alert library displays the pop up messages 
    }
  };

  return (
    <ImageBackground
      source={{uri:'https://media.istockphoto.com/id/153030612/vector/candy-bar.jpg?s=612x612&w=0&k=20&c=A4atEqRNuqBb3UnyATewI33xPoOBEeP4mdNtVEDgd3Y='}}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={options}
          horizontal={false}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.itemContainer,
                {
                  backgroundColor: item.title === 'Color Changer' ? currentColor : item.color,
                },
              ]}
              onPress={() => clickEventListener(item)}
            >
              <Text
                style={[
                  styles.itemText,
                  {
                    fontSize: item.title === 'Text Size Changer' ? textSize : 18,
                  },
                ]}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
        />
    </View>
   </ImageBackground> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: 'transparent',
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor: 'transparent',
  },
  listContainer: {
    alignItems: 'center',
  },
  itemContainer: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 75,
    margin: 10,
  },
  itemText: {
    fontSize: 18,
    color: 'black',           // change color of all gumballs text here
    fontWeight: 'bold',
  },
  backgroundImage: {
    flex: 1,                 
    resizeMode: 'cover',     
  }
});