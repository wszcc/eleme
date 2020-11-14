import { createStore } from 'redux'
import reducer from "./reducer";

//创建store

export  const store=createStore(reducer)