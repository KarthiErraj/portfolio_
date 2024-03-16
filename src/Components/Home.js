import React from 'react'
import './home.css'
import imgg from './Images/imgg.jpg'
import { useNavigate } from 'react-router-dom'



function Home() {
    const navigate = useNavigate()

    return (
        <div className='home' >
                <div className='top'>
                    <nav class="navbar navbar-expand-lg bg-none   ">
                        <div class="container-fluid ">
                            <div class="collapse navbar-collapse" id="navbarNav">
                            </div>
                            <ul class="navbar-nav navv ">
                                <li class="nav-item">
                                    <a class="nav-link active text-success    fw-bolder " aria-current="page" href="#" onClick={() => navigate('/Education')}>Education</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-success fw-bolder ms-5" href="#" onClick={() => navigate('/Projects')}>Projects</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-success fw-bolder ms-5 " href="#" onClick={() => navigate('/Skills')}>Skills</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link text-success fw-bolder ms-5 " href="#" onClick={() => navigate('/Contact')}>Contact</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className='row m-0 mt-5'>

                    <div className='col-6 left text-light '>
                        <h1 className='intro'>Hello !... <br />
                            I'm <span className='name fw-bolder fs-1'>Karthi</span>     <br />
                            Web developer <br/>
                            <button className='btn  btn-lg  bg-success bton  text-light fw-bold' onClick={()=>navigate('/Contact')}>Contact</button> </h1>
                    </div>
                    <div className='col-4    '>
                        <div className='right'>
                            <img src={imgg} className='img'></img>
                            </div>
                    </div>


                </div>



            </div>

    )
}

export default Home