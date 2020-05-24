import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

class BillingCycle extends Component {
    render() {
        return (
            <div>
                <ContentHeader titile="Billing Cycles" small='Register'/>
                <Content>
                    Billing Cycles
                </Content>
            </div>
        )
    }
}

export default BillingCycle