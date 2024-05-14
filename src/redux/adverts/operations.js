import { createAsyncThunk } from '@reduxjs/toolkit';
import { get_cars } from '../../assets/mockAPI';
import { reachedMaxPage } from '../../helpers/paginationHelper';

export const fetchAdverts = createAsyncThunk('adverts/fetchAll', async ({ pageID, length }, thunkApi) => {
    try {
        if (reachedMaxPage(pageID, length)) return thunkApi.rejectWithValue('No more data available.');
        const res = await get_cars(pageID);
        return res.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});
