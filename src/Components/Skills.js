import React from 'react'
import js from './Images/js.png'
import reat from './Images/rctt.png'
import java from './Images/java.png'
import sql from './Images/mysql.png'
import taly from './Images/taly.webp'
import { useNavigate } from 'react-router-dom'

function Skills() {
  const navigate = useNavigate()
  return (
    <div className='skills-bg'>
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
              <li class="nav-item" title='Projects'>
                <a class="nav-link text-dark fs-5 ms-5 " href="#" onClick={() => navigate('/Projects')}><span className='fs-3'><i class="fa fa-tasks" aria-hidden="true"></i></span></a>
              </li>
              <li class="nav-item" title='Contact'>
                <a class="nav-link text-dark fs-5 ms-5  " href="#" onClick={() => navigate('/Contact')} ><span className='fs-3'><i class="fa fa-user-circle-o" aria-hidden="true"></i></span></a>
              </li>

            </ul>
          </div>
        </nav>
      </div>


      <div className='content w-75 m-auto mt-5'>
        <div className='row'>

          <div className=' col-3 p-4  text-center' >
            <i class="fa fa-html5 html fs-1 my-3" aria-hidden="true"></i>
            <h4>HTML</h4>
          </div>

          <div className=' col-3  p-4 text-center'>
            <i class="fa fa-css3 css fs-1 my-3" aria-hidden="true"></i>
            <h4>CSS</h4>
          </div>

          <div className=' col-3 p-4  text-center'>
            <img src={js} className=' mt-3 mb-2' />
            <h4>JAVASCRIPT</h4>
          </div>


          <div className=' col-3 p-4  text-center'>
            <img src={reat} className=' mt-3 mb-2 ' />
            <h4>REACT</h4>
          </div>


          <div className=' col-3 p-4 text-center'>
            <img src={java} />
            <h4 className='mt-1'>JAVA</h4>
          </div>

          <div className=' col-3  text-center'>
            <img src={sql} className=' mt-3 mb-2' />
            <h4>MYSQL</h4>
          </div>

          <div className=' col-3  text-center'>
            <img src={taly} className=' mt-3 mb-2' />
            <h4>TALLY</h4>
          </div>


        </div>
      </div>

      <div className='d-flex justify-content-end'>
        <button className='btn btn-md  text-light mb-2 mt-4 fw-bolder fs-5 me-2 bg-primary ' onClick={() => navigate('/Contact')}>Next <span className='ms-1'> <i class="fa fa-forward" aria-hidden="true"></i></span>
        </button>

      </div>

    </div>
  )
}

export default Skills