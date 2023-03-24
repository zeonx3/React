import React,{Component} from "react";


class Props extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    state = {  }
    render() { 
        return ( 
            <>
            <h1>{this.props.frutas}</h1>
            </>
         );
    }
}
 
export default Props;