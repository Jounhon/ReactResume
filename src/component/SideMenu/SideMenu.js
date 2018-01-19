import React,{Component} from 'react';

import './SideMenu.css';
import NavItem from './NavItem';

class SideMenu extends Component{
    render(){
        return(
            <nav id="slide-menu">
                <ul>
                    <NavItem id={"collection"} name={"作品集"} seprate={false}/>
                    <NavItem id={"Works1"} name={"FAT找茶"} seprate={false}/>
                    <NavItem id={"Works2"} name={"Cut The Rope"} seprate={false}/>
                    <NavItem id={"Works3"} name={"校務聯絡App"} seprate={false}/>
                    <NavItem id={"Works4"} name={"圖書館系統"} seprate={false}/>
                    <NavItem id={"Works5"} name={"簡易點餐系統"} seprate={false}/>
                    <NavItem id={"Works6"} name={"簡易小畫家"} seprate={false}/>
                    <NavItem id={"Works7"} name={"Pet Vacay(畢業專題)"} seprate={false}/>
                    <NavItem id={"Works8"} name={"Issue Tracking System"} seprate={false}/>
                    <NavItem id={"profile"} name={"個人檔案"} seprate={true}/>
                    <NavItem id={"experience"} name={"工作經驗"} seprate={false}/>
                </ul>
            </nav>
        )
    }
}

export default SideMenu;