import React,{Component} from 'react';
import { Element } from 'react-scroll';

import CollectionList from './CollectionList';
import Work from './Work';


class Collection extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[
                {
                    id:"Works1",
                    title:"FAT找茶",
                    hashTag:[
                        { class:'aspnet', tag:'#ASP.NET'},
                        { class:'mssql', tag:'#MSSQL'},
                        { class:'googleapi', tag:'#Google API(Login,Map)'},
                        { class:'facebookapi', tag:'#Facebook API(Login)'},
                    ],
                    description:"這是「網路技術與應用」課程期末專題，題目是由自己訂定。" +
                    "<br>使用asp.net開發，需要包含使用Google API及Facebook API技術，及權限管理" +
                    "<br>我以尋找下午茶為主題，簡單做了一個網頁。" +
                    "<br>"+
                    "<br>功能：" +
                    "<br>一般使用者可以透過社群註冊/登入，以Google Map的Marker呈現搜尋附近的下午茶店，" +
                    "<br>查看店家圖片/評論，可以以社群分享或留言；" +
                    "<br>管理者可以管理下午茶店家資訊",
                    img:[
                        { src:"https://i.imgur.com/bIURmmt.png", style:{width:'20%'}},
                        { src:"https://i.imgur.com/DzI2L9W.png", style:{width:'25%'}},
                        { src:"https://i.imgur.com/ZjL513m.png", style:{width:'30%'}},
                    ]
                },{
                    id:"Works2",
                    title:"Cut The Rope",
                    hashTag:[
                        { class:'html5', tag:'#HTML5'},
                        { class:'javascript', tag:'#JavaScript'},
                    ],
                    description:"這是「物件導向程式設計實習」課程期末專題，題目是遊戲，主題由自己訂定。" +
                    "<br>使用HTML5技術開發，寫出一個遊戲。"+
                    "<br>以Cut The Rope為主題，加上Box2D物理引擎開發。"+
                    "<br>" +
                    "<br>> <a href='https://jounhon.github.io/CutTheRope/' target='_blank'>試玩</a> <",
                    img:[
                        { src:"https://i.imgur.com/Dl61hLw.png", style:{width:'45%'}},
                        { src:"https://i.imgur.com/wxB7wHz.png", style:{width:'45%'}},
                    ]
                },{
                    id:"Works3",
                    title:"校務聯絡App",
                    hashTag:[
                        { class:'angularjs', tag:'#AngularJS'},
                        { class:'mssql', tag:'#MSSQL'},
                        { class:'ionic', tag:'#ionic'},
                        { class:'xmpp', tag:'#XMPP'},
                    ],
                    description:"這是暑假到教授實驗室和碩士的學長們一起開發的專案，" +
                    "<br>用Monaca開發Web App，"+
                    "<br>使用XMPP技術進行簡訊通知或訊息傳遞。",
                    img:[
                        { src:"https://i.imgur.com/k2Wrjlz.png", style:{width:'35%'}},
                    ]
                },{
                    id:"Works4",
                    title:"圖書館系統",
                    hashTag:[
                        { class:'mysql', tag:'#MySQL'},
                        { class:'php', tag:'#PHP'},
                        { class:'bootstrap', tag:'#Bootstrap'},
                    ],
                    description:"這是「資料庫系統」課程的期末專題，題目為教授定的「圖書館系統」。" +
                    "<br>管理者可以新增上架的書籍、借出書；"+
                    "<br>一般使用者可以查看新書、推薦的書或是依照分類、關鍵字搜尋；"+
                    "<br>會員可以借書或預借書，逾期還書會以Mail通知，並計算罰金，並可以在還書後對書籍進行評價。",
                    img:[
                        { src:"https://i.imgur.com/SSnkQHn.png", style:{width:'35%'}},
                    ]
                },{
                    id:"Works5",
                    title:"簡易點餐系統",
                    hashTag:[
                        { class:'csharp', tag:'#C# Windows Form'},
                    ],
                    description:"這是「視窗程式設計」課程的期中專題，題目為教授定的「點餐系統」。" +
                    "<br>後端介面，可以新增餐點、餐點類別；" +
                    "<br>前端就是POS機，可以計算點餐的價錢及數量。",
                    img:[
                        { src:"https://i.imgur.com/iv9OSR8.png", style:{width:'30%'}},
                        { src:"https://i.imgur.com/mcpp9k5.png", style:{width:'30%'}},
                        { src:"https://i.imgur.com/6NeRGbD.png", style:{width:'30%'}},
                    ]
                },{
                    id:"Works6",
                    title:"簡易小畫家",
                    hashTag:[
                        { class:'csharp', tag:'#C# Windows Form'},
                        { class:'googleapi', tag:'#Google API(Drive)'},
                    ],
                    description:"這是「視窗程式設計」課程的期末專題，題目為教授定的「小畫家」。" +
                    "<br>共用Model，開發Form及App應用，" +
                    "<br>並能應用<strong>Design Pattern</strong>的MVC,Factory,Adapter,Command,Observe,PresentationModel，"+
                    "<br>以及Google Drive API的技術",
                    img:[
                        { src:"https://i.imgur.com/WHXajQE.png", style:{width:'45%'}},
                        { src:"https://i.imgur.com/um8mcgP.png", style:{width:'45%'}},
                    ]
                },{
                    id:"Works7",
                    title:"Pet Vacay(畢業專題)",
                    hashTag:[
                        { class:'angularjs', tag:'#AngularJS'},
                        { class:'bootstrap', tag:'#Bootstrap'},
                        { class:'nodejs', tag:'#Node.js'},
                        { class:'mysql', tag:'#MySQL'},
                        { class:'socketio', tag:'#Socket.io'},
                        { class:'googleapi', tag:'#Google API(Login,Calendar,Map)'},
                        { class:'facebookapi', tag:'#Facebook API(Login)'},
                    ],
                    description:"這是畢業專題，" +
                    "<br>以IM服務開發一個寵物服務系統，" +
                    "<br>透過訊息及時通知/推播給商家及用戶，達成交易(沒有金流)，"+
                    "<br>" +
                    "<br>> <a href='https://www.dropbox.com/sh/oiy2eg3k3o9a5vw/AAAGipxyWwQCJvH3_gAUdxFOa?dl=0' target='_blank'>詳細內容</a> <",
                    img:[
                        { src:"https://i.imgur.com/NgQOt2O.png", style:{width:'20%'}},
                        { src:"https://i.imgur.com/Xj7W8hK.png", style:{width:'20%'}},
                        { src:"https://i.imgur.com/POpxmHG.png", style:{width:'25%'}},
                        { src:"https://i.imgur.com/C5IqiJq.png", style:{width:'25%'}},
                    ]
                },{
                    id:"Works8",
                    title:"Issue Tracking System",
                    hashTag:[
                        { class:'angularjs', tag:'#AngularJS'},
                        { class:'bootstrap', tag:'#Bootstrap'},
                        { class:'mssql', tag:'#MSSQL'},
                    ],
                    description:"這是「軟體工程」課程的期末專題，題目為教授定的「議題追蹤系統ITS」。" +
                    "<br>追蹤一個專案的議題，並能給專案加入成員，" +
                    "<br>並給成員不同的權限進行操作，"+
                    "<br>議題可以加入檔案或是繼承父議題，" +
                    "<br>>並計算議題所花費的時間，" +
                    "<br>達到對議題的追蹤。" +
                    "<br>" +
                    "<iframe width='560' height='315' src='https://www.youtube.com/embed/yfKLLkVloXg' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>",
                    img:[]
                }

            ]
        }
    }
    render(){
        return(
            <Element name={"collection"}>
                <section id="collection" className="works">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.description.split("\r\n").map(function (item,index) {
                        return(
                            <span key={index}>
                                {item}<br/>
                            </span>
                        )
                    })}</p>
                    <CollectionList/>
                    <hr/>
                    {
                        this.state.data.map(function (value,index) {
                            return(
                                <Work
                                    key={index}
                                    data={value}
                                />
                            )
                        })
                    }
                </section>
            </Element>
        )
    }
}

export default Collection;