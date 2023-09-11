import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CAPI from './Certificates/CAPI.webp'
import CGoogleFirebase from './Certificates/CGoogleFirebase.webp'
import CNode from './Certificates/CNode.webp'
import CREACT from './Certificates/CREACT.webp'
import CSDLC from './Certificates/CSDLC.webp'
import CUML from './Certificates/CUML.webp'
import CVersionControl from './Certificates/CVersionControl.webp'

function Certifications() {
  return (
    <>
      <div className='row' style={{ paddingBottom: "5vh" }}>
        <div className='col-sm-12' style={{
          display: 'flex',
          justifyContent: "center",
          alignItems: "center"
        }}>
          <h3> Certifications </h3>
        </div>
      </div>
      <div className='row' style={{ paddingBottom: "3vh" }}>
        <div className='col-sm-4' style={{ paddingBottom: "3vh" }}>
         
          <div class="card">
          <a href="https://www.coursera.org/account/accomplishments/certificate/LGUL35KCTFDS">
            <img style={{ width: "100%", height: "50vh" }} alt='Coursera API' src={CAPI} />
          </a>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>

        </div>



        <div className='col-sm-4'>
          <a href="https://www.coursera.org/account/accomplishments/certificate/LGUL35KCTFDS">
            <img style={{ width: "100%", height: "50vh" }} alt='Coursera API' src={CGoogleFirebase} />
          </a>
        </div>
        <div className='col-sm-4'>
          <a href="https://www.coursera.org/account/accomplishments/certificate/LGUL35KCTFDS">
            <img style={{ width: "100%", height: "50vh" }} alt='Coursera API' src={CNode} />
          </a>
        </div>

        <div className='col-sm-4'>
          <a href="https://www.coursera.org/account/accomplishments/certificate/LGUL35KCTFDS">
            <img style={{ width: "100%", height: "50vh" }} alt='Coursera API' src={CREACT} />
          </a>
        </div>

        <div className='col-sm-4'>
          <a href="https://www.coursera.org/account/accomplishments/certificate/LGUL35KCTFDS">
            <img style={{ width: "100%", height: "50vh" }} alt='Coursera API' src={CSDLC} />
          </a>
        </div>

        <div className='col-sm-4'>
          <a href="https://www.coursera.org/account/accomplishments/certificate/LGUL35KCTFDS">
            <img style={{ width: "100%", height: "50vh" }} alt='Coursera API' src={CUML} />
          </a>
        </div>

        <div className='col-sm-4'>
          <a href="https://www.coursera.org/account/accomplishments/certificate/LGUL35KCTFDS">
            <img style={{ width: "100%", height: "50vh" }} alt='Coursera API' src={CVersionControl} />
          </a>
        </div>

      </div>
    </>
  )
}

export default Certifications
