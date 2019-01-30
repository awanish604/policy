export const claimAction=({name, amount})=>{
return({
type:CLAIM_ACTION,
payload:{
  name:name,
  amount:amount
}
})
}
