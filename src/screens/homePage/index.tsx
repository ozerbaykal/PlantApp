import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';
import GreetingHeader from './greetingHeader';
import PremiumBanner from './premiumBanner';
import { scale, verticalScale } from '../../utils/constants';
import QuestionCard from './QuestionCard';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { fetchQuestions } from '../../store/actions/questionActions';
import { useAppDispatch } from '../../store/hooks';

const Home :React.FC = () => {
  const {questions} =useSelector((state: RootState) => state.questions)
  const dispatch= useAppDispatch()

  useEffect(()=>{
    dispatch(fetchQuestions())
    console.log(questions)


  },[])
  return (
    <ScrollView>
      <GreetingHeader />
      <PremiumBanner />

      <View
        style={{paddingHorizontal: scale(24), marginBottom: verticalScale(16)}}>
        <Text style={styles.sectionTitle}>Get Started</Text>
        <FlatList
          data={questions}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <QuestionCard {...item} />}
        />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  sectionTitle:{

  }
});
