import { createAsyncThunk } from '@reduxjs/toolkit';
import { getRequest } from '../../services/verbs';
import { API_ENDPOINTS } from '../../services/urls';

export const fetchQuestions = createAsyncThunk(
  'questions/fetchQuestions',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getRequest({}, API_ENDPOINTS.GET_QUESTIONS);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
