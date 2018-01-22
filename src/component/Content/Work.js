import React,{Component} from 'react';
import { Element } from 'react-scroll'

import { Link } from 'react-scroll'

class Work extends Component{
    render(){
        return(
            <Element className="workspace" id={this.props.data.id} name={this.props.data.id}>
                <div className="top">
                    <Link containerId="content" activeClass="active" to={"collection"} spy={true} smooth={true} duration={500}>
                        <i className="icofont icofont-simple-up"></i>TOP
                    </Link>
                </div>
                <h3>{this.props.data.title}</h3>
                <ul className={"hashtag"}>
                    {this.props.data.hashTag.map(function (value,index) {
                        return(
                            <li className={value.class} key={index}>{value.tag}</li>
                        )
                    })}
                </ul>
                <p className="description" dangerouslySetInnerHTML={{__html:this.props.data.description}}></p>
                {this.props.data.img.map(function (value,index) {
                    return(
                        <img key={index} alt={index} src={value.src} style={value.style} />
                    )
                })}
            </Element>
        )
    }
}

export default Work;