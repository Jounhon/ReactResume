import React,{Component} from 'react';

class NavItem extends Component{
    render(){

        return(
            <li className={(this.props.seprate?'sep ':'')+this.props.id} id={this.props.id}>{this.props.name}</li>
        )
    }
}

export default NavItem;