// flow of redux
// ui triggers action --> redux dispatcher handles the action --> sends it to store --> store stores all application state --> store has reducer functions which basically updates the state with new payload
// handling action means dispatcher creates an object and adds payload and action type to it
// slice is like a table or document or set of related data
// while creating slices we define reducers(handlers functions) and provide name to slice and reducer
// then we import the action we want to dispatch and the dispatcher
// and wrap the action inside dispatcher
// to use or get state from redux store
// we need to use useSelector function which takes a function as a parameter
// that function has access to whole application state as a parameter
// which can be accessed by giving any name to the parameter for ex.,state
// we can assign a value to any variable by calling this function
// ex; const todos = useSelector((state) => state.todos )
// and then we can access it like a normal props or state

// while working with APIs
// instead of normally dispatching the action to reducer
// dispatcher dispatches the action with thunk which is then
// intercepted by the redux middleware, which makes the api call
// attaches a normal action (i.e, with payload and type) and
// sends it to the registry/store/reducers

import { configureStore } from "@reduxjs/toolkit";
// importing reducer
import todoReducer from "./todoSlice";
export default configureStore({
  reducer: {
    // we assigned todoReducer to todos slice
    // we will keep assigning reducers to slices we create
    // store takes care of handling reducers
    todos: todoReducer,
  },
});
