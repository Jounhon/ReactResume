import React, { Component } from 'react';
import './Loading.css';

class Loading extends Component{
    render(){
        return(
            <div className="loadBox">
                <div className="loader">
                    <div className="inner one"></div>
                    <div className="inner two"></div>
                    <div className="inner three"></div>
                </div>
            </div>
        )
    }
}

export default Loading;