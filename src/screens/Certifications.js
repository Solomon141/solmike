import React from 'react'
import CAPI from './Certificates/CAPI.webp'

function Certifications() {
  return (
    <>
      <div className='row'>
        Certifications
      </div>
      <div className='row'>
        <div className='col-sm-4'>
          <img style={{width:"100%", height:"50vh"}} src={CAPI} />
        </div>
        <div className='col-sm-4'>
        </div>
        <div className='col-sm-4'>

        </div>
      </div>
    </>
  )
}

export default Certifications
