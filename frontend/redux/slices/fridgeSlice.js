import { createSlice } from '@reduxjs/toolkit'

export const fridgeSlice = createSlice({
    name: 'fridge',
    initialState: [],
    reducers: {
        // setItems: (state, action) => {
        //     return { ...state, items: [...action.payload] };
        // },
        addItem: (state, action) => {
            return { ...state, items: [action.payload, ...state.items] }
        },
        editItem: (state, action) => {
            const items = state.items.map(item => {
                if (item.id === action.payload.id) {
                    item = action.payload;
                }
                return item;
            });
            return { ...state, items: [...items] };
        },
        deleteItem: (state, action) => {
            const items = state.items.filter(item =>
                item.id !== action.payload.id);
            return { ... state, items : [...items] };
        }
    }

});

export const { addItem, editItem, deleteItem } = fridgeSlice.actions;

export default fridgeSlice.reducer;