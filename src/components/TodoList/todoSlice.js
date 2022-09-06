import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
	name: 'todoList',
	initialState: [
		{ id: 1, name: 'Learn Yoga', completed: false, priority: 'Medium' },
		{ id: 2, name: 'gegweg', completed: true, priority: 'High' },
		{ id: 3, name: 'bbbbb', completed: false, priority: 'Low' },
	],
	reducers: {
		addTodo: (state, action) => {
			state.push(action.payload);
		},
		toggleTodoStatus: (state, action) => {
			const currentTodo = state.filter(todo => todo.id === action.payload);
			currentTodo.completed = !currentTodo.completed;
		}
	}
})
