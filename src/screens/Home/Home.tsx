import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';

// Utils
import fetchApi from '../../utils/fetch';

// Types
import {GetImage} from '../../types/index';

// Components
import Header from '../../components/Header/Header';
import TodaysImage from '../../components/TodaysImage/TodaysImage';
import LastFiveDaysImage from '../../components/LastFiveDaysImage/LastFiveDaysImage';
import {format, sub} from 'date-fns';

const Home = () => {
  const [todaysImage, setTodaysImage] = useState<GetImage>({});
  const [lastFiveDaysImage, setLastFiveDaysImage] = useState<GetImage[]>([]);

  useEffect(() => {
    const loadsTodayImage = async () => {
      try {
        const todaysImageResponse = await fetchApi();
        setTodaysImage(todaysImageResponse);
      } catch (error) {
        console.error(error);
        setTodaysImage({});
      }
    };

    const loadsLastFiveDaysImage = async () => {
      try {
        const date = new Date();
        const todaysDate = format(date, 'yyyy-MM-dd');
        const fiveDaysAgoDate = format(sub(date, {days: 5}), 'yyyy-MM-dd');
        const lastFiveDaysImageResponse = await fetchApi(
          `start_date=${fiveDaysAgoDate}&end_date=${todaysDate}`,
        );
        setLastFiveDaysImage(lastFiveDaysImageResponse);
      } catch (error) {
        console.error(error);
        setLastFiveDaysImage([]);
      }
    };

    loadsTodayImage().catch(null);
    loadsLastFiveDaysImage().catch(null);
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <TodaysImage {...todaysImage} />
      <LastFiveDaysImage imageData={lastFiveDaysImage} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#0b3d61',
  },
});
