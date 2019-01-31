import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

class Account extends React.Component{
render(){
return(
  <div className="ui-segment" style={{width:'50%', margin:'20px', border: '1px solid #d4d4d5', padding :'20px'}}>
      <h3 class="ui block header">
        ACCOUNT
      </h3>
        <i class="massive rupee sign icon">{this.props.totalAmount}</i>
  </div>
)

}

}

const mapPropsToState = (state) => {

    return {
        totalAmount: state.account
    }
}
export default connect(mapPropsToState)(Account)
