import React from 'react'
import styles from './select.module.css'
const select = ({lbl,criteria,errMsg,fnChange,name,options,values,value}) =>{
  return (
   <div className='row mb-3' >
    <div className='col-sm-5 text-end' >
     <b>{lbl} { criteria?.length > 0 && <span className='text-danger'> * </span>}:</b>
    </div>
    <div className='col-sm-3'>
      <select name={name} onChange={fnChange} className='form-control' value={value}>
      <option value="">Please select</option>
      {
        options.map((opt,ind)=>{
          return <option key={`option_${ind}`} value={values[ind]}>{opt}</option>
        })
      }
       </select>
    </div>
    <div className='col-sm-4'>
       {errMsg && <b className='text-danger'>{errMsg}</b>}
    </div>
     </div>
     
  )
}

export default select
