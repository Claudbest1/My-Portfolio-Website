import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'
const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container service__container">
        <article className="services">
          <div className="service__head">
            <h3>Graphic Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Logo</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Flyers</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Social media</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Business card</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Magazine/jotters</p>
            </li>
           
          </ul>
        </article>
        {/* END OF UI/UX */}

        {/* Web Development */}
        <article className="services">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Build website</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Maintain website</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Website revamping</p>
            </li>
            {/* <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li> */}
          </ul>
        </article>
        {/* End of Web Development */}

        {/* Graphic Design */}
        <article className="services">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>User research</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>User Interface design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>User Experience design </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Prototyping</p>
            </li>
            {/* <li>
              <BiCheck className='service__list-icon' />
              <p></p>
            </li> */}
          </ul>
        </article>
        {/* End of Graphic Design */}
    </div>

    </section>
  )
}

export default Services