import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleIncrement = () => {
   /* change setCount to increment */;
  };

  const handleDecrement = () => {
    /* change setCount to decrement */;
  };

  const handleReset = () => {
    /* change setCount to go back to 0 */;
  };

  const themeStyles = isDarkMode ? {
    container: { backgroundColor: '#1a1a1a' },
    header: { backgroundColor: '#333' },
    counter: { backgroundColor: '#2a2a2a' },
    text: { color: '#fff' },
    instruction: { color: '#ccc' }
  } : {};

  return (
    <ScrollView style={[styles.container, themeStyles.container]}>
      <View style={[styles.header, themeStyles.header]}>
        <Text style={styles.title}>MDB Exercise #1</Text>
        <Text style={styles.subtitle}>YOUR NAME's Counter App</Text>

        <TouchableOpacity
          style={styles.themeToggle}
          onPress={() => setIsDarkMode(!isDarkMode)}
        >
          <Text style={styles.buttonText}>
            {isDarkMode ? '☀️ Light' : '🌙 Dark'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={[styles.instruction, themeStyles.instruction]}>
          Try to fill in the blanks to make this counter app!{'\n'}
        </Text>

        <View style={[styles.counter, themeStyles.counter]}>
          <Text style={[styles.counterTitle, themeStyles.text]}>Interactive Counter</Text>
          <Text style={styles.counterValue}>{count}</Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.decrementButton]}
              /* use onPress to do what here? */
            >
              <Text style={styles.buttonText}>Blank Button</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.incrementButton]}
              /* use onPress to do what here? */
            >
              <Text style={styles.buttonText}>Blank Button</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={[styles.button, styles.resetButton]}
            /* use onPress to do what here? */
          >
            <Text style={styles.buttonText}>Blank Button</Text>
          </TouchableOpacity>
        </View>


      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#4A90E2',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    opacity: 0.9,
  },
  themeToggle: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginTop: 10,
  },
  content: {
    padding: 20,
  },
  instruction: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
    lineHeight: 22,
  },
  counter: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 30,
  },
  counterTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  counterValue: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#4A90E2',
    marginBottom: 10,
  },
  stepCounter: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 2,
    borderColor: '#4A90E2',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
    minWidth: 100,
    textAlign: 'center',
    backgroundColor: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  incrementButton: {
    backgroundColor: '#4CAF50',
  },
  decrementButton: {
    backgroundColor: '#FF9800',
  },
  resetButton: {
    backgroundColor: '#F44336',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  teachingNote: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  noteTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A90E2',
    marginBottom: 10,
  },
  note: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
    lineHeight: 20,
  },
});
