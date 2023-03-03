import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Logo from '../../assets/images/asma-logo__1_-removebg-preview.png'
import './index.scss'
const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['','A', 's', 'm', 'a']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
     setTimeout(() => {
     setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()


  return (
    <>
     <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
</h1>
          <h2 style={{
            fontSize:'2rem',
          
          }}>Front End Developer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={Logo}
        alt="JavaScript,  Developer"
      />
      </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
