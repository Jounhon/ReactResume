import React,{Component} from 'react';

class MenuBtn extends Component{
    constructor(props){
        super(props);
        this.state={
            isShow:false
        };

        this.menuClick = this.menuClick.bind(this);
    }

    menuClick(){
        this.setState(prevState => ({
            isShow: !prevState.isShow
        }));
        if(!this.state.isShow){
            document.body.classList.add('menu-active');
        }else{
            document.body.classList.remove('menu-active');
        }
    }
    render(){
        return(
            <div className="menu-trigger" onClick={this.menuClick}></div>
        )
    }
}

export default MenuBtn;