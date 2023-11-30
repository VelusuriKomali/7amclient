"use client"
import React,{ useState }  from 'react'
import Input from '@/components/InputControlls/input'
import Select from '@/components/InputControlls/select'
import Textarea from '@/components/InputControlls/textarea'
import configuration from './configuration.json'
import  { fnFieldValidation, fnFormValidation } from '../../validations/appValidation'
const Register = () => {
  const [inputControlls,setInputControlls] = useState(configuration); 
  const fnChange = (eve) => {
  const updatedInputControlls = fnFieldValidation(eve,inputControlls)
    setInputControlls(updatedInputControlls)
  }
  const fnRegister = () => {
    const [isFormInValid,dataObj,updatedInputControlls]=fnFormValidation(inputControlls)
      if(isFormInValid){
        setInputControlls(updatedInputControlls)
      return;
    }
      console.log(dataObj);
      alert("send request")
    }
    return ( 
    <div className='container-fluid'>
      <h3 className='text-center my-3'>Register</h3>    
     {
       inputControlls.map((obj,ind) => {
       switch(obj.tag){
        case 'select':
          return <Select key={`input_${ind}`} fnChange={fnChange}{...obj}/>
      case 'textarea':
          return <Textarea key={`input_${ind}`} fnChange={fnChange}{...obj}/>
      default:
          return <Input key={`input_${ind}`} fnChange={fnChange}{...obj}/>
        } 
     })
    }
     <div className='row'>
       <div className= 'offset-sm-5 col-sm-7'>
         <button onClick={fnRegister} className='btn btn-primary'>Register</button>
       </div>
     </div>
   </div>
 )
}

export default Register
