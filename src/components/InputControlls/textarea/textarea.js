import React from 'react'
import styles from './textarea.module.css'
const textarea = ({lbl,criteria,errMsg,fnChange,name,value}) =>{
  return (
   <div className='row mb-3' >
    <div className='col-sm-5 text-end' >
     <b>{lbl} { criteria?.length > 0 && <span className='text-danger'> * </span>}:</b>
    </div>
    <div className='col-sm-3'>
      <textarea name={name} onChange={fnChange} className='form-control' value={value}/>
    </div>
    <div className='col-sm-4'>
       {errMsg && <b className='text-danger'>{errMsg}</b>}
    </div>
     </div>
     
  )
}
export default textarea
