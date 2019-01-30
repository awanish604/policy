export const policyAction =({name , amount})=>{
  return({
      type:POLICY_ACTION,
      payload:{
        name: name,
        amount:amount
      }


  })
}
