import React,{Component} from 'react';

class CollectionList extends Component{
    render(){
        return(
            <ul>
                <li className="bookMarker"><a href="#Works1">FAT找茶</a></li>
                <li className="bookMarker"><a href="#Works2">Cut The Rope</a></li>
                <li className="bookMarker"><a href="#Works3">校務聯絡App</a></li>
                <li className="bookMarker"><a href="#Works4">圖書館系統</a></li>
                <li className="bookMarker"><a href="#Works5">簡易點餐系統</a></li>
                <li className="bookMarker"><a href="#Works6">簡易小畫家</a></li>
                <li className="bookMarker"><a href="#Works8">Pet Vacay(畢業專題)</a></li>
                <li className="bookMarker"><a href="#Works7">Issue Tracking System</a></li>
            </ul>
        )
    }
}

export default CollectionList;