import React, { Component } from 'react';

import Loading from '../Loading/Loading';
import SideMenu from '../SideMenu/SideMenu';
import Content from '../Content/Content';

class App extends Component {
  constructor(){
    super();
    this.state={
      loading:true
    }
  }

  componentDidMount(){
      setTimeout(()=>{
          this.setState({
              loading:false
          })
      },900);
  }

  render() {
    const {loading} = this.state;
    if(loading){
        return(
            <Loading/>
        )
    }else{
      return([
          <SideMenu key={"sideMenu"}/>,
          <Content key={"content"}/>
      ])
    }
  }
}

export default App;
