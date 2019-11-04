import * as types from "../action-types"
import {Dispatch,Store} from "redux"
import { getSliders,getMovies } from "../../api/home"
import {TypeAction,TypeThunkFunction} from "../../store/typing/common"
import {message} from "antd"
export default{
    setCurrentCategory(payload:any){
        return {type:types.SET_CURRENT_CATEGORY,payload}
    },
    getSliders():TypeAction{
        return { 
            type:types.GET_SLIDERS,
            payload: getSliders()
        }
    },
    getMovies():TypeThunkFunction{
        return async function(dispath:Dispatch,getState:Store['getState']){
            let {currentCategory,movies:{loading,limit,offset,hasMore}} =  getState().home;
            if(!loading && hasMore){
                // 让movies处于加载中
                // getMovies(currentCategory:string="all",offset:number=0,limit:number=5)
                dispath({type:types.SET_MOVIES_LOADING,payload:true});
                let result:any =  await getMovies(currentCategory,0,limit);
                if(result.code == 0){
                    dispath({type:types.SET_MOVIES,payload:result.data})
                }else{
                    message.error(result.error)
                }
            }
        }
    }
}