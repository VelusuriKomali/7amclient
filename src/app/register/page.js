"use client"
import React,{ useState,useContext }  from 'react'
import Input from '@/components/InputControlls/input'
import Select from '@/components/InputControlls/select'
import Textarea from '@/components/InputControlls/textarea'
import configuration from './configuration.json'
import  { fnFieldValidation, fnFormValidation,fnReset } from '@/validations/appValidation'
import {Ajax} from "@/services/ajax"
import Link from 'next/link'
import { appCtx } from '@/context/appContext'
import {toast } from 'react-toastify'
const Register = () => {
  const [inputControlls,setInputControlls] = useState(configuration); 
  const ctxData=useContext(appCtx)
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
  ctxData.dispatch({type:"LOADER",payload:true})
  Ajax.fnSendPostReq("http://localhost:2020/users/save-user", {data: dataObj })
   .then((res)=>{
    const { acknowledged, insertedId }=res.data
    if(acknowledged && insertedId){
       setInputControlls(fnReset(inputControlls))
       toast.success("Successfully registred")
    }else{
     toast.error("Not registred, try again")
    }
     console.log("then",res);
    })
   .catch((res)=>{
     console.error("register",res);
     toast.error("Something went wrong")
    })
    .finally(()=>{
      console.log("finally");
    })
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
         <button onClick={fnRegister} className='btn btn-primary me-3'>Register</button>
        <Link href="/login">To Login</Link>
       </div>
     </div>
   </div>
 )
}

export default Register
