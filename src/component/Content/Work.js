import React,{Component} from 'react';

class Work extends Component{
    render(){
        return(
            <div className="workspace" id={this.props.data.id}>
                <div className="top">
                    <a href="#collection">
                        <i className="icofont icofont-simple-up"></i>TOP
                    </a>
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
            </div>
        )
    }
}

export default Work;