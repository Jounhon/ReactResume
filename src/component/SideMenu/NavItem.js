import React,{Component} from 'react';
import ScrollLink from "../ScrollLink/ScrollLink";

class NavItem extends Component{

    render(){
        return(
            <li className={(this.props.seprate?'sep ':'')+this.props.id} id={this.props.id}>
                <ScrollLink id={this.props.id} name={this.props.name} scrollStepInPx="50" delayInMs="16.66"/>
            </li>
        )
    }
}

export default NavItem;