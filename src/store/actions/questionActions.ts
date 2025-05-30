import { createAsyncThunk } from '@reduxjs/toolkit';
import { getRequest } from '../../services/verbs';
import { API_ENDPOINTS } from '../../services/urls';

export const fetchQuestions = createAsyncThunk(
  'questions/fetchQuestions',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getRequest({}, API_ENDPOINTS.GET_QUESTIONS);
      console.log('Questions Response:', response.data);
      return response.data;
    } catch (error: any) {
       console.log('FETCH ERROR:', error);
      return rejectWithValue(error.message);
    }
  }
);
