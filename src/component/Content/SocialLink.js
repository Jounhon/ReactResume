import React,{Component} from 'react';

class SocialLink extends Component{
    render(){
        return(
            <li>
                <a href={this.props.link} target="_blank">
                    <img src={this.props.img} style={this.props.style} alt={this.props.alt}/>
                </a>
            </li>
        )
    }
}

export default SocialLink;