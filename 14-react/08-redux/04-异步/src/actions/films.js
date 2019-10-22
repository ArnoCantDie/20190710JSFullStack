// 同步的action creator
export function setFilms(films){
    return {
        type:"SET_FILMS",
        films
    }
}
// 异步的action creator 
export function getFilms(){
    return function(dispatch,getState){
        let url = "https://movie.douban.com/j/search_subjects?type=tv&tag=%E7%83%AD%E9%97%A8&page_limit=50&page_start=0";
        fetch(url).then(res=>{
            console.log(res)
        })
    }
}