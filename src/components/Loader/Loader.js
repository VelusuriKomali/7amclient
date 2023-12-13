import React from 'react'
 const Loader=()=>{
       const [isShowLoader,setIsShowLoader]=React.useState(false)
       const fnIsShowLoader=()=>{
          setIsShowLoader(true)
          setTimeout(()=>{
             setIsShowLoader(false)
          },10000)
       }
       return <div>
          {isShowLoader && <Loader />}
          <p>Click on the below button to show the loader, once clicked after 10 sec loader automatically closed.</p>
          <button onClick={fnIsShowLoader} className="btn btn-primary">Is Show Loader</button>
          </div>
}
export default Loader



