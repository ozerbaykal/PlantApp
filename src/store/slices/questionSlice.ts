import {createSlice} from '@reduxjs/toolkit';
import {fetchQuestions} from '../actions/questionActions';
import {QuestionState} from '../../model/data/questionState';

const initialState: QuestionState = {
  questions: [],
  loading: false,
  error: null,
};

const questionSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchQuestions.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.loading = false;
        state.questions = action.payload;
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default questionSlice.reducer;
