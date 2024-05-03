import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser(state , action) {
       
     state.push(action.payload)

    },
    deleteUser(state , action) {
    state.pop(action.payload);
    },
  },
});

export const { addUser, deleteUser } = userSlice.actions;
export {userSlice};
