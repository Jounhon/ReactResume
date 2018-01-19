import React,{Component} from 'react';

import '../../assets/plugin/icofont/css/icofont.css';

class Cover extends Component{
    render(){
        return(
            <div className="cover" align="center">
                <i className="icofont icofont-file-html5"></i>
                <i className="icofont icofont-social-facebook"></i>
                <i className="icofont icofont-social-bootstrap"></i>
                <i className="icofont icofont-social-github"></i>
                <i className="icofont icofont-file-css"></i>
            </div>
        )
    }
}

export default Cover;