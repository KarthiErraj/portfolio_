import React from 'react'
import { useNavigate } from 'react-router-dom'

function Contact() {
  const navigate = useNavigate()
  return (
    <div className='contact-bg'>
 <div className=''>
        <nav class="navbar navbar-expand-lg ">
          <div class="container-fluid ">
            <div class="collapse navbar-collapse " id="navbarNav">
            </div>
            <ul class="navbar-nav  navv-all">
              <li class="nav-item">
                <a class="nav-link text-light fs-5  " href="#" onClick={() => navigate('/')}><span className='fs-3'><i class="fa fa-home" aria-hidden="true"></i></span></a>
              </li>
              <li class="nav-item"  title='Education'>
                <a class="nav-link text-light fs-5 ms-5 " href="#" onClick={() => navigate('/Education')}><span className='fs-3'><i class="fa fa-book" aria-hidden="true"></i></span></a>
              </li>
              <li class="nav-item"  title='Skills'>
                <a class="nav-link text-light fs-5 ms-5 " href="#" onClick={() => navigate('/Skills')}><span className='fs-3'><i class="fa fa-info-circle" aria-hidden="true"></i></span></a>
              </li>
              <li class="nav-item" title='Projects'>
                <a class="nav-link text-light fs-5 ms-5 " href="#" onClick={() => navigate('/Projects')}><span className='fs-3'><i class="fa fa-tasks" aria-hidden="true"></i></span></a>
              </li>

            </ul>
          </div>
        </nav>
      </div>


    <div className='contact'>
      <div className=' cont text-center'>

      <div className='email  fs-1'>
      {/* Email link with Font Awesome icon */}
      <a href='mailto:karthicrevel@gmail.com'>
        <i className="fa fa-envelope mail1" aria-hidden="true"></i>
      </a>
    </div>
    
     <div className='linked fs-1'>
    <a href='https://www.linkedin.com/in/karthikeyan-e-a450672b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
    <i class="fa fa-linkedin-square text-primary fs-1 " aria-hidden="true"></i>
    </a>
    </div>


     

         
          </div>
    </div>

    </div>
  )
}

export default Contact