import React,{Component} from 'react';

class ExperienceItem extends Component{
    render(){
        return(
            <li>
                <span className={this.props.current?'current':''}>{this.props.job}</span>
                {this.props.company}
            </li>
        )
    }
}

export default ExperienceItem;