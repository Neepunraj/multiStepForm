import { FormEvent, useState } from "react"
import { AccountForm } from "./components/Accountform"
import { AddressForm } from "./components/AddressForm"
import { UserForm } from "./components/UserForm"
import { UseMultiForm } from "./utilities/UseMulitform"
type FullInfoData={
  firstName:string
  lastName:string
  age:string
  street:string
  state:string
  city:string
  zip:string
  email:string
  password:string
}
const INITIAL_DATA:FullInfoData={
  firstName:"",
  lastName:"",
  age:"",
  street:"",
  state:"",
  zip:"",
  city:'',
  email:"",
  password:""
}
function App() {
  const [data,setData]= useState(INITIAL_DATA)
  function updateFields(field:Partial<FullInfoData>){
    setData(prev =>{
      return {...prev,...field} })
  }
 
  const {currentStepIndex,
    back,steps,next,step,
    isfirstStep,
    islastStep,
  }= UseMultiForm([
  <UserForm {...data} updateFields={updateFields} />, 
  <AddressForm {...data} updateFields={updateFields}  />, 
  <AccountForm {...data} updateFields={updateFields} />])

  function handleSubmit(e:FormEvent){
  e.preventDefault()
  if(!islastStep)  return next();
  alert('Acount Created')
}


  return (
    <div style={{
      position:'relative',
      background:'white',
      border:'1px solid black',
      padding:'2rem',
      margin:'1rem',
      borderRadius:'0.5rem ',
      fontFamily:'Arial',
      width:'100%',
      maxWidth:'max-content'

     }}>
      <form onSubmit={handleSubmit}>
        <div style={{
          position: 'absolute',
          top:'0.5rem',
          right:'0.5rem'
        }}>
          {currentStepIndex+1}/{steps.length}
        </div>
        {step}
        <div style={{ 
          marginTop:'1rem',
          gap:'0.5rem',
          display:'flex',
          justifyContent:'flex-end',

         }}>
        {!isfirstStep && <button type="button" onClick={back}>Back</button> }  
        <button type="submit" >{islastStep?'Submit':'Next'}</button></div>
      </form>
    </div>
  )
}

export default App
