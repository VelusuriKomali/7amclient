
import React, { Fragment } from 'react'
import styles from './input.module.css'
const Input = ({lbl,type,criteria,errMsg,fnChange,name,options,values,value}) =>{
 const fnPrepareInputControlls=()=>{
  switch(type){
    case 'text':
    case 'password':
    case 'number':
        return  <input value={value} name={name} onChange={fnChange} type={type} className='form-control'/>
    case 'radio':
      return  options.map((opt,ind)=>{
        return <Fragment key={`fragment_${ind}`}> <input checked={values[ind]===value} className='me-3' value={values[ind]} name={name} onChange={fnChange} type={type}/><span className='me-3'>{opt}</span></Fragment>
      })
    case  'checkbox':
      const selValues=value.split(',');
      return  options.map((opt,ind)=>{
        return <Fragment key={`fragment_${ind}`}> <input checked = {selValues.includes(values[ind])}  className='me-3' value={values[ind]} name={name} onChange={fnChange} type={type}/><span className='me-3'>{opt}</span></Fragment>
      })
      
      default:
    }
 }
  return (
   <div className='row mb-3' >
    <div className='col-sm-5 text-end' >
     <b>{lbl} { criteria?.length > 0 && <span className='text-danger'> * </span>}:</b>
    </div>
    <div className='col-sm-3'>
     {fnPrepareInputControlls()}
        </div>
    <div className='col-sm-4'>
       {errMsg && <b className='text-danger'>{errMsg}</b>}
    </div>
     </div>
     
  )
  }
export default Input