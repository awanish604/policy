import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

import  createClaim  from '../actions/createClaim.js'

class Claim extends React.Component{

 submitListner = () => {
        const name = document.querySelector('.name').value
        const amount = document.querySelector('.amount').value

        this.props.createClaim({ name, amount })
    }

render(){
return(
  <div className="ui-segment" style={{width:'50%', margin:'20px', border: '1px solid #d4d4d5', padding :'20px'}}>
        <h3 className="ui block header">
        CLAIM
      </h3>
        <form class="ui form" style={{ padding: '5px' }} onSubmit={(event) => { event.preventDefault() }}>
            <div className="field">
      <label>Name</label>
      <input type="text" className="name" placeholder="Name"/>
    </div>
    <div class="field">
      <label>amount to claim</label>
      <input type="text" className="amount" placeholder="amount"/>
    </div>

            <button className="ui button" type="submit" onClick={this.submitListner}>Submit</button>
        </form>

        {this.props.claim.map(({ name, amount }) => <div> {name} : {amount}</div>)}
  </div>
)

}

}

const mapPropsToConst = (state) => {
    console.log(state)
    return { claim: state.claim }
}


export default connect(mapPropsToConst, { createClaim })(Claim)
