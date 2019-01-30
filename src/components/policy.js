import React from 'react'
import ReactDOM from 'react-dom'

class Policy extends React.Component{
render(){
return(
  <div className="ui-segment" style={{width:'50%', margin:'20px', border: '1px solid #d4d4d5', padding :'20px'}}>
      <h3 class="ui block header">
        POLICY
      </h3>
  <form class="ui form" style={{padding : '5px'}}>
    <div class="field">''
      <label>Name</label>
      <input type="text" name="name" placeholder="Name"/>
    </div>
    <div class="field">
      <label>amount</label>
      <input type="text" name="amount" placeholder="amount"/>
    </div>

    <button class="ui button" type="submit">Submit</button>
  </form>
  </div>
)

}

}

export default Policy
