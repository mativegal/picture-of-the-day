import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

// Types
import {GetImage} from 'types';

// Components
import CardImage from '../../components/CardImage/CardImage';

type LastFiveDaysImageProps = {
  imageData: GetImage[];
};

const LastFiveDaysImage = ({imageData}: LastFiveDaysImageProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Last 5 Days</Text>
      <ScrollView style={styles.content}>
        {imageData?.map(itemImg => (
          <CardImage key={`key-${itemImg.title}`} {...itemImg} />
        ))}
      </ScrollView>
    </View>
  );
};

export default LastFiveDaysImage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 8,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 8,
  },
  content: {
    paddingHorizontal: 24,
  },
});
