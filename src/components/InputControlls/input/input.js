import React, { Fragment } from 'react'
import styles from './input.module.css'
const Input = ({lbl,type,criteria,errMsg,fnChange,name}) =>{
  return (
  <React.Fragment>
  <div className='row mb-3' >
    <div className='col-sm-5 text-end' >
     <b>{lbl} { criteria?.length > 0 && <span className='text-danger'> * </span>}:</b>
    </div>
    <div className='col-sm-3'>
      <input name={name} onChange={fnChange} type={type} className='form-control'/>
    </div>
    <div className='col-sm-4'>
       {errMsg && <b className='text-danger'>{errMsg}</b>}
    </div>
     </div>
     </React.Fragment>

  )
}
export default Input