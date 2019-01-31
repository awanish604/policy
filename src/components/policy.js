import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import createPolicy from '../actions/createPolicy.js'


class Policy extends React.Component{

    submitListner = () => {
         console.log('hieeeee')
         const name = document.querySelector('.name').value
         const amount = document.querySelector('.amount').value
        console.log(`name : ${name} amount : ${amount}`)
         this.props.createPolicy({name,amount})
    }


render(){
return(
  <div className="ui-segment" style={{width:'50%', margin:'20px', border: '1px solid #d4d4d5', padding :'20px'}}>
      <h3 class="ui block header">
        POLICY
      </h3>
        <form class="ui form" style={{ padding: '5px' }} onSubmit={(event) => { event.preventDefault()}}>
    <div class="field">
      <label>Name</label>
      <input type="text" className="name" placeholder="Name"/>
    </div>
    <div class="field">
      <label>amount</label>
      <input type="text" className="amount" placeholder="amount"/>
    </div>

            <button class="ui button" type="submit" onClick={this.submitListner}>Submit</button>
        </form>
        {this.props.policies.map(({ name, amount }) => <div>{name} : {amount}</div>)}
  </div>
)

}

}
const mapPropsToState = (state) => {
    console.log(state + 'from policy')
    return {
        policies : state.policy
    }
}

export default connect(mapPropsToState, {createPolicy})(Policy)
