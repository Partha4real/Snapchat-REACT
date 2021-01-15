import { createSlice } from '@reduxjs/toolkit';

export const cameraSlice = createSlice({
  name: 'camera',
  initialState: {
    cameraImage: null,
  },
  reducers: {
    setCameraIamge: (state, action) => {
      state.cameraImage = action.payload;
    },
    resetCameraImage: (state) => {
        state.cameraImage = null;
    },
  },
});

export const { setCameraIamge, resetCameraImage } = cameraSlice.actions;

export const selectCameraImage = (state) => state.camera.cameraImage;

export default cameraSlice.reducer;
