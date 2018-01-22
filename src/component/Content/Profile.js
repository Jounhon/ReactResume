import React,{Component} from 'react';
import { Element } from 'react-scroll';

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
            "<br>學習新的東西讓我覺得很有趣，" +
            "<br>想要懂更多知識、更多實際上的應用，" +
            "<br>是我對寫程式的動力。" +
            "<br>" +
            "<br>希望能做一個有成就感的工程師，" +
            "<br>希望我的程式能夠真正的幫助到使用的人！" +
            "<br>" +
            "<br>努力將自己的技術越磨越精進!!!" +
            "<br>是現在的目標。" +
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
            <Element name={"profile"}>
                <section id="profile" className="profile" >
                    <h2>{this.props.title}</h2>
                    <div className="profile_text">
                        <div className="profile_head">
                            <img className="left" src={this.state.photo.src} alt={this.state.photo.alt} style={this.state.photo.style} />
                            <p className="right" dangerouslySetInnerHTML={{__html:this.state.description}}></p>
                        </div>
                        <div className="profile_bottom">
                            <ul>
                                <SocialLink link={"https://github.com/Jounhon"} img={"https://i.imgur.com/KShuZ6R.png"} style={{width:'48px'}} alt={"github"}/>
                            </ul>
                        </div>
                        <div className="profile_bottom" dangerouslySetInnerHTML={{__html:this.state.about}}></div>
                    </div>
                </section>
            </Element>
        )
    }
}

export default Profile;