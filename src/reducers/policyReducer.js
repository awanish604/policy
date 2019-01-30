export const policyReducer=(listOfPolicy=[],action)=>{
  if(action.type==='POLICY_ACTION'){
    return(
      [...listOfPolicy, action.payload]
    )
  }
}

export const claimReducer=(listOfClaim)
