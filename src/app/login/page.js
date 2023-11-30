"use client"
import React, { useState } from 'react'
import Input  from '@/components/InputControlls/input'
import configuration from './configuration.json'
import  {fnFieldValidation,fnFormValidation} from '../../validations/appValidation'
const Login = () => {
  const [inputControlls,setInputControlls] = useState(configuration); 
  const fnLogin = () => {
  const [isFormInValid,dataObj,updatedInputControlls]=fnFormValidation(inputControlls)
    if(isFormInValid){
      setInputControlls(updatedInputControlls)
      return;
    }
    console.log(dataObj);
    alert("send request")
  }
  const fnChange = (eve) => {
  const updatedInputControlls = fnFieldValidation(eve,inputControlls)
  setInputControlls(updatedInputControlls)
    }
  return ( 
     <div className='container-fluid'>
       <h3 className='text-center my-3'>Login</h3>    
      {
        inputControlls.map((obj,ind) => {
          return <Input key={`input_${ind}`} fnChange={fnChange}{...obj}/>
        })
      }
      <div className='row'>
        <div className= 'offset-sm-5 col-sm-7'>
          <button onClick={fnLogin} className='btn btn-primary'>Login</button>
        </div>
      </div>
    </div>
  )
}
export default Login;