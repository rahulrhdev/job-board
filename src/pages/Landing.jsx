import React from 'react'
import styled from 'styled-components'
import Wrapper from '../assets/wrappers/LandingPage'
import main from '../assets/images/main.svg'
import logo from '../assets/images/logo.svg'
import { Link } from 'react-router-dom'


const StyledBtn = styled.button`
  font-size: 1.5rem;
  background: red;
  color: white;
`

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt='jobify' className='logo' />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>Job <span>tracking</span> app</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo adipisci aliquam ab iste excepturi debitis, quas amet quo harum autem optio nobis praesentium velit earum.</p>
          <Link to='/register' className='btn register-link'>Register</Link>
          <Link to='/login' className='btn register-link'>Login / Demo User</Link>
        </div>
        <img src={main} alt="job hunt" className='img main-img' />
      </div>
    </Wrapper>
  )
}


export default Landing