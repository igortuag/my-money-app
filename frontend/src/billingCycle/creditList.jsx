import React, { Component } from 'react'
import { Field } from 'redux-form'
import Grid from '../common/layout/grid'

class CreditList extends Component {

    renderRows() {
        return (
            <tr>
                <td><Field name='credits[0].name' component='input' /></td>
                <td><Field name='credits[0].value' component='input' /></td>
                <td></td>
            </tr>
        )
    }

    render() {
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>Credts</legend>
                </fieldset>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Values</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </Grid>
        )
    }
}

export default CreditList