import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, destroy } from 'redux-form'

import { init } from './billingCycleActions'
import labelAndInput from '../common/form/labelAndInput'

class BillingCycleForm extends Component {
    render() {
        const { handleSubmit } = this.props
        return (
            <div>
                <form role='form' onSubmit={handleSubmit}>
                    <div className='box-body'>
                        <Field name='name' component={labelAndInput} 
                            label='Name' cols='12 4' placeholder='Enter the name' />
                        <Field name='month' component={labelAndInput} type='number'
                            label='Month' cols='12 4' placeholder='Enter the month' />
                        <Field name='year' component={labelAndInput} type='number'
                            label='Year' cols='12 4' placeholder='Enter the year' />
                    </div>
                    <div className='box-footer'>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                        <button type='button' className='btn btn-default'
                            onClick={this.props.init}>Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}

BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycleForm)
