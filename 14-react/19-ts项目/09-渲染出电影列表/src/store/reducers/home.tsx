import {AnyAction} from "redux"
import *as types from "../action-types"
export interface Movie{
    _id?:string, 
    order?: number,//顺序
    title?: string,//标题
    video?: string,//视频
    poster?: string, //海报
    url?: string,//url地址
    price?: string,//价格
    category?: string,//分类  
}
export interface Movies{
    loading:boolean;
    list:Array<Movie>;
    hasMore:boolean;
    offset:number; 
    limit:number // limit每页显示多少个
}
export interface TypeHome{
    currentCategory:string,
    sliders:Array<Slider>,
    movies:Movies
}
export interface Slider{
    url:string
}
let initialState:TypeHome = {
    currentCategory:"all",
    sliders:[],
    movies:{
        loading:false,
        list:[],
        hasMore:true,
        offset:0,
        limit:5
    }
}
export default function(state:TypeHome=initialState,action:AnyAction):TypeHome{
    switch(action.type){
        case types.SET_CURRENT_CATEGORY:
            return {...state,currentCategory:action.payload}
        case types.GET_SLIDERS:
            return {...state,sliders:action.payload.data}
        case types.SET_MOVIES_LOADING:
            return {...state,movies:{...state.movies,loading:action.payload}};
        case types.SET_MOVIES:
            return {
                ...state,movies:{
                    ...state.movies,
                    loading:false,
                    list:[...state.movies.list,...action.payload.list],
                    hasMore:action.payload.hasMore,
                    offset:state.movies.offset+action.payload.list.length
                }
            }
        default:
            return state
    }
}



