import React from 'react'
import './home.css'
import { useNavigate } from 'react-router-dom'

function Education() {
  const navigate = useNavigate()
  return (
    <div className='eduation-bg '>

      <div className=''>
        <nav class="navbar navbar-expand-lg ">
          <div class="container-fluid ">
            <div class="collapse navbar-collapse " id="navbarNav">
            </div>
            <ul class="navbar-nav  navv-all">
            <li class="nav-item" >
                <a class="nav-link text-light fs-5  " href="#" onClick={()=>navigate('/')}><span className='fs-3'><i class="fa fa-home" aria-hidden="true"></i></span></a>
              </li>
              <li class="nav-item" title='Projects'>
                <a class="nav-link text-light fs-5 ms-5 " href="#" onClick={()=>navigate('/Projects')}><span className='fs-3'><i class="fa fa-tasks" aria-hidden="true"></i></span></a>
              </li>
              <li class="nav-item" title='Skills'>
                <a class="nav-link text-light fs-5 ms-5 " href="#" onClick={()=>navigate('/Skills')}><span className='fs-3'><i class="fa fa-info-circle" aria-hidden="true"></i></span></a>
              </li>
              <li class="nav-item" title='Contact'>
                <a class="nav-link text-light fs-5 ms-5 " href="#" onClick={()=>navigate('/Contact')} ><span className='fs-3'><i class="fa fa-user-circle-o" aria-hidden="true"></i></span></a>
              </li>

            </ul>
          </div>
        </nav>
      </div>

    <div className='about'>
    <div className='details bg-light w-50 ms-5 mt-4  p-4 '>
    
   <div className='detail-1 bg-light mb-4 border border-dark '> 
   <h4 className='head fw-bolder fs-3 ms-3   p-1'>BBA - BACHELOR OF BUSINESS ADIMINSTRATION </h4>
    <br/>
    <h5 className='ms-3  p-1'>UNIVERSITY : ALAGAPPA UNIVERSITY</h5>
    <h5 className='ms-3  p-1'>YEAR <span className='invisible'>E</span> <span className='det '>: 2019 - 2022</span></h5>
    <h5 className='ms-3  p-1'>GRADE    <span className='det'>: FIRST CLASS</span></h5>
   
   </div>

   <div className='detail-1 bg-light mb-4 border border-dark' > 
   <h4 className='head fw-bolder fs-3 ms-3 p-1'>JAVA FULLSTACK WEBDEVELOPMENT </h4>
    <h5 className='ms-3 p-1'>@ FITA ACADEMY</h5>
    
   
   </div>

   <div className='detail-1 bg-light mb-4 border border-dark'> 
   <h4 className='head fw-bolder fs-3 ms-3 '>PGDCA - POST GRADUATE DIPLOMA  IN COMPUTER APPLICATION </h4>
    <h5 className='ms-3 p-1'>@ TCEDS</h5>
   </div>


   <div className='detail-1 bg-light  p-1 border border-dark'> 
   <h4 className='head fw-bolder fs-3 ms-3 '>MIDDLE -EDUCATION </h4>
    <br/>
    <h5 className='ms-3 '>HSC : 78% </h5>
    <h5 className='ms-3'>SSLC : 84% </h5>
    
   
   </div>
    </div>
    </div>
  <div className='d-flex justify-content-end'>
  <button className='btn btn-md  text-light mb-2 fw-bolder fs-5 me-2 bg-primary ' onClick={()=>navigate('/Projects')}>Next <span className='ms-1'> <i class="fa fa-forward" aria-hidden="true"></i></span>
</button>
 
  </div>

    </div>
  )
}

export default Education