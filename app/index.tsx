import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  FlatList,
} from 'react-native';

export default Activities = () => {

  const activityList = [
    {
      id: 1,
      title: 'Number Changer',
      color: '#FF4500',
    },
    {
      id: 2,
      title: 'Color Changer',
      color: '#008080',
    },
    {
      id: 3,
      title: 'Text Size Changer',
      color: '#8A2BE2',
    },
  ];

  const [options, setOptions] = useState(activityList);
  const [number, setNumber] = useState(0);
  const [currentColor, setCurrentColor] = useState('#008080'); 
  const [textSize, setTextSize] = useState(18);

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
      const colors = ['#FF69B4', '#ADD8E6', '#90EE90', '#FFA07A'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setCurrentColor(randomColor);
      Alert.alert(
        'Color Changed',
        `The color is now ${randomColor}`,
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
      Alert.alert(item.title);
    }
  };

  return (
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: '#fff',
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor: '#fff',
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
    color: 'pink',
    fontWeight: 'bold',
  },
});