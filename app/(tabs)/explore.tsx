import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Button, Alert, StyleSheet, Image, Platform, TextInput } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  const [text, onChangeText] = React.useState('To Do item name');

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#353636', dark: '#D0D0D0' }}
      headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>
      <ThemedView style={styles.titleContainer}>
         <ThemedText type="title">Add ToDo</ThemedText>
       </ThemedView>
       <ThemedText>Please enter the name of your ToDo item</ThemedText>
       <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
            />
      <Button
        title="Save Item"
        onPress={() => Alert.alert('To Do has been saved')}
      />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  input: {
    color: '#808080',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'white',
  },
});
