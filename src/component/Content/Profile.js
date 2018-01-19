import React,{Component} from 'react';

import SocialLink from './SocialLink';

class Profile extends Component{
    constructor(props){
        super(props);
        this.state={
            photo:{
                src:'https://i.imgur.com/RuFpLr6.jpg',
                alt:'Neo',
                style:{
                    width:"45%"
                }
            },
            description:"<strong>我叫 鍾泳鋐</strong>" +
            "<br>1995 年 6月 26日" +
            "<br>來自  台北科技大學 資訊工程系" +
            "<br>是個  初入社會的新鮮人",
            about:"目前是一個小小的 助理程式師，" +
            "<br>對程式有種 熱情和 執著，" +
            "<br>希望能夠寫出 好看、可以讓人使用覺得 好用的網頁、APP，" +
            "<br>也希望把 後端發展的更好，" +
            "<br>然後慢慢邁進成為 全端<STRIKE>神人</STRIKE>(?)" +
            "<br>希望可以寫出 bug少一點的程式碼" +
            "<span class='gray'>和 乾淨 好懂的程式碼</span>" +
            "<br>是我最大的 目標" +
            "<br>" +
            "<br>擅長語言： JavaScript｜C#｜Asp.net" +
            "<br>正在發展： React / React-Native｜AngularJS 2｜JAVA" +
            "<br>常用ＤＢ： MSSQL｜MySQL" +
            "<br>" +
            "<br>E-mail：h6g2682@gmail.com",

        }
    }

    render(){
        return(
            <section id="profile" className="profile">
                <h2>{this.props.title}</h2>
                <div className="profile_text">
                    <div className="profile_head">
                        <img className="left" src={this.state.photo.src} alt={this.state.photo.alt} style={this.state.photo.style} />
                        <p className="right" dangerouslySetInnerHTML={{__html:this.state.description}}></p>
                    </div>
                    <div className="profile_bottom">
                        <p>
                            <ul>
                                <SocialLink link={"https://github.com/Jounhon"} img={"https://i.imgur.com/KShuZ6R.png"} style={{width:'48px'}} alt={"github"}/>
                            </ul>
                        </p>
                    </div>
                    <div className="profile_bottom" dangerouslySetInnerHTML={{__html:this.state.about}}></div>
                </div>
            </section>
        )
    }
}

export default Profile;