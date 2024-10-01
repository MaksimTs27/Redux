import { createSlice } from '@reduxjs/toolkit';

const TodoSlice = createSlice({
  name: 'todos',
  initialState: '',
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, completed: false });
    },
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeToDo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});
export const { addTodo, toggleTodo, removeToDo } = TodoSlice.actions;
export default TodoSlice.reducer;
