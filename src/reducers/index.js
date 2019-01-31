import { combineReducers} from 'redux'

const policyReducer = (listOfPolicy = [], action) => {
  if(action.type==='POLICY_ACTION'){
    return(
      [...listOfPolicy, action.payload]
    )
    }

    return listOfPolicy
}

 const claimReducer = (listOfClaim = [], action) => {
    if (action.type === 'CLAIM_ACTION') {
        return (
            [...listOfClaim, action.payload]
            )
     }

     return listOfClaim
}

 const accountReducer = (amount=5000, action) => {
    if (action.type === 'POLICY_ACTION') {
        return amount + parseInt(action.payload.amount)
    }

    else if (action.type === 'CLAIM_ACTION') {
        return amount - action.payload.amount
    }

    return amount

}

export default combineReducers(
    {
    policy: policyReducer,
    claim: claimReducer,
    account: accountReducer
    }
)
