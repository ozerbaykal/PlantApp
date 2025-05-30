import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import GreetingHeader from './greetingHeader';
import PremiumBanner from './premiumBanner';
import {moderateScale, scale, verticalScale} from '../../utils/constants';
import QuestionCard from './QuestionCard';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import {fetchQuestions} from '../../store/actions/questionActions';
import {useAppDispatch} from '../../store/hooks';
import CategoryCard from './categoryCard';
import {fetchCategories} from '../../store/actions/categoryActions';

const Home: React.FC = () => {
  const {questions} = useSelector((state: RootState) => state.questions);
  const {categories} = useSelector((state: RootState) => state.categories);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchQuestions());
    dispatch(fetchCategories());
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <View>
        <GreetingHeader />
        <PremiumBanner />
      </View>

      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: verticalScale(40)}}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <View
          style={{
            paddingHorizontal: scale(24),
            marginBottom: verticalScale(16),
          }}>
          <Text style={styles.sectionTitle}>Get Started</Text>
          <FlatList
            data={questions}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <QuestionCard {...item} />}
          />
        </View>
        <FlatList
          data={categories}
          renderItem={({item}) => <CategoryCard item={item} />}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          contentContainerStyle={{
            paddingHorizontal: scale(24),
            paddingBottom: verticalScale(40),
          }}
          scrollEnabled={false}
        />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: moderateScale(18),
    fontFamily: 'Rubik-SemiBold',
    color: '#1D1E1C',
    marginBottom: verticalScale(12),
  },
});
