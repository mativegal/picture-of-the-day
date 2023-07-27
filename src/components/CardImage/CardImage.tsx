import React, {FC} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

// Types
import {GetImage, RootStackParams} from 'types';

type ViewDetailNavigationProps = NativeStackNavigationProp<
  RootStackParams,
  'Detail'
>;

const CardImage: FC<GetImage> = ({url, title, date, explanation}) => {
  const {navigate} = useNavigation<ViewDetailNavigationProps>();

  const handleViewPress = () => {
    navigate('Detail', {title, date, url, explanation});
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={handleViewPress}>
          <Text style={styles.btnText}>View</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CardImage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2c749d',
    marginVertical: 16,
    marginHorizontal: 24,
    borderRadius: 32,
    padding: 16,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    marginVertical: 12,
    fontWeight: '500',
  },
  date: {
    color: '#fff',
    fontSize: 16,
  },
  btnContainer: {
    alignItems: 'flex-end',
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    marginRight: 4,
  },
});
