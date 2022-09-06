import { configureStore } from "@reduxjs/toolkit";
import { filtersSlice } from "../components/Filters/filtersSlice";
import { todoSlice } from "../components/TodoList/todoSlice";
import { combineReducers } from 'redux'

const reducer = combineReducers({
	filters: filtersSlice.reducer,
	todoList: todoSlice.reducer,
})

const store = configureStore({
	reducer,
})

export default store;
