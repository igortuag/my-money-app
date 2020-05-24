import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/TabHeader'
import TabContent from '../common/tab/tabContent'

class BillingCycle extends Component {
    render() {
        return (
            <div>
                <ContentHeader titile="Billing Cycles" small='Register'/>
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='List' icon='bars' target='tabList' />
                            <TabHeader label='Include' icon='plus' target='tabCreate' />
                            <TabHeader label='Change' icon='pencil' target='tabUpdate' />
                            <TabHeader label='Delete' icon='trash-o' target='tabDelete' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'><h1>List</h1></TabContent>
                            <TabContent id='tabCreate'><h1>Include</h1></TabContent>
                            <TabContent id='tabUpdate'><h1>Change</h1></TabContent>
                            <TabContent id='tabDelete'><h1>Delete</h1></TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

export default BillingCycle