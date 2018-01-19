import React,{Component} from 'react';

import './Content.css';
import MenuBtn from '../SideMenu/MenuBtn';
import Cover from './Cover';
import Collection from './Collection';
import Footer from '../Footer/Footer';

class Content extends Component{


    render(){
        return(
            <div className="container" id="content" >
                <MenuBtn/>
                <Cover/>
                <Collection title={"作品集"} description={"以下是學生時期的一些程式作品。\r\n作品資料庫資料大多數都沒有保留，所以僅能以圖片顯示。"}/>
                <Footer/>
            </div>
        )
    }
}

export default Content;