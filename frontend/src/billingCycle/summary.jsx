import React, { Component } from 'react'

import Grid from '../common/layout/grid'
import Row from '../common/layout/Row'
import ValueBox from '../common/widget/valueBox'

export default ({credit, debt}) => (
    <Grid cols='12'>
        <fieldset>
            <legend>Abstract</legend>
            <Row>
                <ValueBox cols='12 4' color='green' icon='bank' value={`R$ ${credit}`} text='Total Credts' />
                <ValueBox cols='12 4' color='red' icon='credit-card' value={`R$ ${debt}`} text='Total Debts' />
                <ValueBox cols='12 4' color='blue' icon='money' value={`R$ ${credit - debt}`} text='Total Consolidated' />
            </Row>
        </fieldset>
    </Grid>
)