import { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Playground() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>This code allows you to toggle with a number</Text>
      <Text style={styles.counter}>Count: {count}</Text>

      <Button title="Increase" onPress={() => setCount(count + 1)} />
      <Button title="Decrease" onPress={() => setCount(count - 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  heading: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  counter: { fontSize: 24, marginBottom: 10, color: 'blue' },
});

