import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        accessToken: null,
        refreshToken: null,
        role: null, // 'user' or 'admin'
        authLoaded: false // Flag to indicate if auth initialization is complete
    },
    reducers: {
        setTokens: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            state.role = action.payload.role;
            state.authLoaded = true;
        },
        clearTokens: (state) => {
            state.accessToken = null;
            state.refreshToken = null;
            state.role = null;
            state.authLoaded = true; // Set to true even when clearing tokens
        },
        setAuthLoaded: (state, action) => {
            state.authLoaded = action.payload;
        },
    }
});

export const { setTokens, clearTokens, setAuthLoaded } = authSlice.actions;

export default authSlice.reducer;