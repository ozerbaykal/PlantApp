import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import React, { useEffect } from 'react';
import GreetingHeader from './greetingHeader';
import PremiumBanner from './premiumBanner';
import { moderateScale, scale, verticalScale } from '../../utils/constants';
import QuestionCard from './QuestionCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { fetchQuestions } from '../../store/actions/questionActions';
import { useAppDispatch } from '../../store/hooks';
import CategoryCard from './categoryCard';
import { fetchCategories } from '../../store/actions/categoryActions';

const Home: React.FC = () => {
  const { questions } = useSelector((state: RootState) => state.questions);
  const { categories } = useSelector((state: RootState) => state.categories);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchQuestions());
    dispatch(fetchCategories());
  }, []);

  return (
    <View style={styles.root}>
      {/* Status bar rengi ayarı */}
      <StatusBar backgroundColor="#F6F6F6" barStyle="dark-content" />

      {/* Üst blok: status bar + GreetingHeader */}
      <SafeAreaView style={styles.safeTop}>
        <View style={styles.headerSection}>
          <GreetingHeader />
          <Image
            style={styles.bgImage}
            source={require('../../assets/images/leaves-bg.png')}
          />
        </View>
      </SafeAreaView>

      {/* Alt içerik: PremiumBanner + ScrollView */}
      <View style={styles.contentSection}>
        <PremiumBanner />

        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingBottom: verticalScale(40)}}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">
          <View style={styles.questionsBlock}>
            <Text style={styles.sectionTitle}>Get Started</Text>
            <FlatList
              data={questions}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) => <QuestionCard {...item} />}
            />
          </View>
          <FlatList
            data={categories}
            renderItem={({ item }) => <CategoryCard item={item} />}
            keyExtractor={item => item.id.toString()}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            contentContainerStyle={styles.categoryList}
            scrollEnabled={false}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  safeTop: {
    backgroundColor: '#F6F6F6',
  },
  headerSection: {
    backgroundColor: '#F6F6F6',
    paddingBottom: verticalScale(16),
    position: 'relative',
  },
  bgImage: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  contentSection: {
    flex: 1,
    backgroundColor: '#FBFAFA',
    gap:verticalScale(24)
  },
  questionsBlock: {
    paddingHorizontal: scale(24),
    marginBottom: verticalScale(16),
  },
  sectionTitle: {
    fontSize: moderateScale(15),
    fontFamily: 'Rubik',
    fontWeight: '500',
    color: '#1D1E1C',
    marginBottom: verticalScale(16),
    lineHeight: moderateScale(20),
  },
  categoryList: {
    paddingHorizontal: scale(24),
    paddingBottom: verticalScale(40),
  },
});
