import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos=createAsyncThunk('fetchTodos',async()=>{
    const response= await fetch('https://dummyjson.com/todos');
    return response.json();
})

const todosSlice= createSlice({
name:'todo',
initialState:{
isLoading:false,
data: null,
isError:false,
},
extraReducers:(builder)=>{
 builder.addCase(fetchTodos.pending,(state,action)=>{
    state.isLoading=true;
 })
 builder.addCase(fetchTodos.fulfilled,(state,action)=>{
   state.isLoading=false;
   state.data= action.payload;
 })
 builder.addCase(fetchTodos.rejected,(state,action)=>{
    console.log('error',action.payload);
  state.isError= true;
 })
}
})

export default todosSlice.reducer;