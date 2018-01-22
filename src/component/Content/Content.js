import React,{Component} from 'react';

import './Content.css';
import MenuBtn from '../SideMenu/MenuBtn';
import Cover from './Cover';
import Collection from './Collection';
import Profile from './Profile';
import Experience from './Experience';
import Footer from '../Footer/Footer';

class Content extends Component{

    render(){
        return(
            <div className="container" id="content" >
                <MenuBtn/>
                <Cover/>
                <Collection
                    title={"作品集"}
                    description={"以下是學生時期的一些程式作品。"}
                />
                <Profile title={"個人檔案"}/>
                <Experience title={"工作經歷"}/>
                <Footer/>
            </div>
        )
    }

}

export default Content;