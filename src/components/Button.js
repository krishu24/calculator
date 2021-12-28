import React,{Component} from "react";

class Button extends Component{

    render(){
        return(
            <div className={`column-${this.props.cols}`}>
            <button className="calc-button" onClick={()=>this.props.action(this.props.symbol)}>{this.props.symbol}</button>
            {/* this helps to display symbols on button - 'this.props.symbol' */}
            </div>
        );
    }
}

export default Button;