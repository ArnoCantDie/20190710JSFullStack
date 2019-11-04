import React,{ReactNode} from "react";
import { Carousel } from "antd"
import "./index.less"
import { Slider } from '../../../store/reducers/home';
interface Props{
    children?:ReactNode,
    sliders?:Array<Slider>,
    getSliders:any
}
export default class HomeSliders extends React.Component<Props>{
    componentDidMount(){
        if(this.props.sliders.length == 0){
            this.props.getSliders();
        }
    }
    render(){
        // console.log("-----",this.props.sliders)
        return(
            <Carousel>
                {
                    this.props.sliders.map((item:Slider,index:number)=>(
                        <div key={index}>
                            <img src={item.url} />
                        </div>
                    ))
                }
            </Carousel>
        )
    }
}




