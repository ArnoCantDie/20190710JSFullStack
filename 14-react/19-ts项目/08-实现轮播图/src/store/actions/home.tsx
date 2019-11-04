import * as types from "../action-types"
import { getSliders } from "../../api/home"
export default{
    setCurrentCategory(payload:any){
        return {type:types.SET_CURRENT_CATEGORY,payload}
    },
    getSliders(){
        return { 
            type:types.GET_SLIDERS,
            payload: getSliders()
        }
    },
    getMovies(){
        
    }
}