import React,{Component} from 'react';
import { Link } from 'react-scroll'


class ScrollLink extends Component{

    render(){
        return(
            <Link containerId="content" activeClass="active" to={this.props.id} spy={true} smooth={true} duration={500}>
                {this.props.name}
            </Link>
        )
    }
}

export default ScrollLink;