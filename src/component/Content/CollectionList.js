import React,{Component} from 'react';
import ScrollLink from "../ScrollLink/ScrollLink";

class CollectionList extends Component{
    render(){
        return(
            <ul>
                <li className="bookMarker">
                    <ScrollLink id={"Works1"} name={"FAT找茶"} scrollStepInPx="50" delayInMs="16.66"/>
                </li>
                <li className="bookMarker">
                    <ScrollLink id={"Works2"} name={"Cut The Rope"} scrollStepInPx="50" delayInMs="16.66"/>
                </li>
                <li className="bookMarker">
                    <ScrollLink id={"Works3"} name={"校務聯絡App"} scrollStepInPx="50" delayInMs="16.66"/>
                </li>
                <li className="bookMarker">
                    <ScrollLink id={"Works4"} name={"圖書館系統"} scrollStepInPx="50" delayInMs="16.66"/>
                </li>
                <li className="bookMarker">
                    <ScrollLink id={"Works5"} name={"簡易點餐系統"} scrollStepInPx="50" delayInMs="16.66"/>
                </li>
                <li className="bookMarker">
                    <ScrollLink id={"Works6"} name={"簡易小畫家"} scrollStepInPx="50" delayInMs="16.66"/>
                </li>
                <li className="bookMarker">
                    <ScrollLink id={"Works7"} name={"Pet Vacay(畢業專題)"} scrollStepInPx="50" delayInMs="16.66"/>
                </li>
                <li className="bookMarker">
                    <ScrollLink id={"Works8"} name={"Issue Tracking System"} scrollStepInPx="50" delayInMs="16.66"/>
                </li>
            </ul>
        )
    }
}

export default CollectionList;