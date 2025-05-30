import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../services/verbs';
import {API_ENDPOINTS} from '../../services/urls';

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async (_, {rejectWithValue}) => {
    try {
      const response = await getRequest({}, API_ENDPOINTS.GET_CATEGORIES);
      return response.data.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);
