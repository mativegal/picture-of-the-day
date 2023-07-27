import React, {FC} from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import {useRoute} from '@react-navigation/native';

// Components
import Header from '../../components/Header/Header';

// Types
import {GetImage, RootStackParams} from 'types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type DetailPros = NativeStackScreenProps<RootStackParams, 'Detail'>;

const Detail: FC<GetImage> = () => {
  const {
    params: {title, date, url, explanation},
  } = useRoute<DetailPros['route']>();

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Image source={{uri: url}} style={styles.img} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <ScrollView style={styles.explanationContainer}>
          <Text style={styles.explanation}>{explanation}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#0b3d61',
  },
  content: {
    paddingHorizontal: 24,
    paddingVertical: 24,
    flex: 1,
  },
  img: {width: '100%', height: 200, borderRadius: 32},
  title: {
    color: '#fff',
    fontSize: 18,
    marginVertical: 12,
    fontWeight: '500',
  },
  explanationContainer: {
    marginVertical: 16,
  },
  explanation: {
    color: '#fff',
    fontSize: 14,
    marginVertical: 12,
    fontWeight: '500',
    lineHeight: 19,
    letterSpacing: 1,
  },
  date: {
    color: '#fff',
    fontSize: 16,
  },
});
