import React from 'react'
import { useNavigate } from 'react-router-dom'
import rayan from './Images/rayan.jpg'
import elite from './Images/elite.jpg'
import todo from './Images/todo.jpg'

function Project() {
  const navigate = useNavigate()
  return (
    <div className='project-bg'>

      <div className=''>
        <nav class="navbar navbar-expand-lg ">
          <div class="container-fluid ">
            <div class="collapse navbar-collapse " id="navbarNav">
            </div>
            <ul class="navbar-nav  navv-all">
              <li class="nav-item">
                <a class="nav-link text-dark fs-5  " href="#" onClick={() => navigate('/')}><span className='fs-3'><i class="fa fa-home" aria-hidden="true"></i></span></a>
              </li>
              <li class="nav-item" title='Education'>
                <a class="nav-link text-dark fs-5 ms-5 " href="#" onClick={() => navigate('/Education')}><span className='fs-3'><i class="fa fa-book" aria-hidden="true"></i></span></a>
              </li>
              <li class="nav-item" title='Skills'>
                <a class="nav-link text-dark fs-5 ms-5 " href="#" onClick={() => navigate('/Skills')}><span className='fs-3'><i class="fa fa-info-circle" aria-hidden="true"></i></span></a>
              </li>
              <li class="nav-item" title='Contact'>
                <a class="nav-link text-dark fs-5 ms-5 " href="#" onClick={() => navigate('/Contact')} ><span className='fs-3'><i class="fa fa-user-circle-o" aria-hidden="true"></i></span></a>
              </li>

            </ul>
          </div>
        </nav>
      </div>

      <div className='projects'>



        <div className='row m-auto'>
          <div className='col-3 ms-5 mt-5 '>
            <div class="card " >
              <img src={rayan} class="card-img-top  border-dark" alt="..." style={{width:'262px', height:"150px"}}/>
              
            </div>
            <div class="card-body   ">
                <p class="card-text  text-light mt-5">                  <h6 className='fw-bolder'>RYAN FASHION</h6>
                   It is an e-commerce site for purchase clothes . <br/>
                  The data are collected using the API. <br/>
                  <div className='mt-4'>
                  <a href='https://ryan-fashion-e-commerce.vercel.app/' target="_blank" style={{textDecoration:"none", marginLeft:"40px"}}> <span className='text-primary bg-light  fw-bolder'>click here <span><i class="fa fa-hand-o-left" aria-hidden="true"></i></span></span></a>
              
                  </div>
                  </p>
              </div>
          </div>

          <div className='col-3 ms-5 mt-5'>
            <div class="card" >
              <img src={elite} class="card-img-top" alt="..." style={{width:'262px', height:"150px"}} />
             
            </div>
            <div class="card-body  ">
                <p class="card-text  text-light mt-5">
                  <h6 className='fw-bolder'>ELITE ACADEMY</h6>
                   It is an e-commerce site for purchase clothes . <br/>
                  The data are collected using the API. <br/>
                  Created using React.js. <br/>
                <div>   <a href='https://elite-academy-lac.vercel.app/' target="_blank" style={{textDecoration:"none", marginLeft:"40px" }}> <span className='text-primary fw-bolder bg-light'>click here <span><i class="fa fa-hand-o-left" aria-hidden="true"></i></span></span></a>
              
                  </div>  </p>
              </div>
          </div>

          <div className='col-3 ms-5 mt-5 '>
            <div class="card" >
              <img src={todo} class="card-img-top" alt="..."  style={{width:'262px', height:"150px"}}/>
            
            </div>
            <div class="card-body  ">
                <p class="card-text  text-light mt-5">
                  <h6 className='fw-bolder'>TO-DO LIST</h6>
                   It is an e-commerce site for purchase clothes . <br/>
                   Created using React.js. <br/>
                 <div className='mt-4'>
                 <a href='https://to-do-list-six-ecru.vercel.app/' target="_blank" style={{textDecoration:"none", marginLeft:"40px"}}> <span className='text-primary bg-light  fw-bolder'>click here <span><i class="fa fa-hand-o-left" aria-hidden="true"></i></span></span></a>
             </div>   </p>
              </div>
          </div>


        </div>

      </div>

      <div className='d-flex justify-content-end mt-5'>
  <button className='btn btn-md  text-light mb-2 fw-bolder fs-5 me-2 bg-primary ' onClick={()=>navigate('/skills')}>Next <span className='ms-1'> <i class="fa fa-forward" aria-hidden="true"></i></span>
</button>
 
  </div>
    </div>
  )
}

export default Project