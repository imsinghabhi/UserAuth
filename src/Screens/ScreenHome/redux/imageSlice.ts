import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ImageData {
  largeImageURL: string;
  tags: string;
  likes: number;
  downloads: number;
  views: number;
}

interface ImageState {
  data: ImageData[];
  loading: boolean;
  error: string | null;
}

const initialState: ImageState = {
  data: [],
  loading: false,
  error: null,
};

const imageSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    fetchImageDataRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchImageDataSuccess: (state, action: PayloadAction<ImageData[]>) => {
      state.data = action.payload;
      state.loading = false;
    },
    fetchImageDataFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchImageDataRequest, fetchImageDataSuccess, fetchImageDataFailure } = imageSlice.actions;
export default imageSlice.reducer;

export type ImageActions = typeof imageSlice.actions;
