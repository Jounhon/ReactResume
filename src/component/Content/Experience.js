import React, {Component} from 'react';

import ExperienceItem from './ExperienceItem';

class Experience extends Component{
    render(){
        return(
            <section id="experience">
                <h2>{this.props.title}</h2>
                <div class="workspace02">
                    <ul>
                        <ExperienceItem current={true} job={"助理程式師"} company={"國泰綜合醫院 資訊部"}/>
                        <ExperienceItem current={false} job={"實習生"} company={"財團法人中華民國證券櫃檯買賣中心(TPEx)"}/>
                    </ul>
                </div>
            </section>
        )
    }
}


export default Experience;