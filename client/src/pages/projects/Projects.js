import React from 'react'
import {BiCheck} from 'react-icons/bi'
import './Projects.css'

function Projects() {
  return (
    <section id='services'>
    <h5>Personal Projects</h5>
    <div className='container services__container'>
     <article className='service'>
      <div className='service__head'>
       <h3>Web Development</h3>
      </div>
      <ul className='service__list'>
       <li>
        <BiCheck className='service__list-icon'/>
        <p>ffdgdfgdfddfgerreweewerweerwerew</p>
       </li>
     
      </ul>
     </article>
     <article className='service'>
      <div className='service__head'>
       <h3>Mobile Development</h3>
      </div>
      <ul className='service__list'>
       <li>
        <BiCheck className='service__list-icon'/>
        <p>ffdgdfgdfddfgerreweewerweerwerew</p>
       </li>
     
      </ul>
     </article>
     <article className='service'>
      <div className='service__head'>
       <h3>AI Development</h3>
      </div>
      <ul className='service__list'>
       <li>
        <BiCheck className='service__list-icon'/>
        <p>ffdgdfgdfddfgerreweewerweerwerew</p>
       </li>
     
      </ul>
     </article>
    </div>
    </section>
  )
}

export default Projects