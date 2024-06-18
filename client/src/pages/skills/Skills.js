import React from 'react'
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './skill.css';

function Skills() {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <div className='container experience__container'>
      <div className='experience__frontend'>
        <h3>Frontend Development</h3>
       <div className='experience__content'>
        <article className='experience__details'>
        <BsFillPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>React</h4>
        <small className='text-light'>Experienced</small>
        </div>
        </article>
        <article className='experience__details'>
        <BsFillPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>React Native</h4>
        <small className='text-light'>Experienced</small>
        </div>
        </article>
        <article className='experience__details'>
        <BsFillPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>HTML</h4>
        <small className='text-light'>Experienced</small>
        </div>
        </article>
        <article className='experience__details'>
        <BsFillPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>CSS</h4>
        <small className='text-light'>Experienced</small>
        </div>
        </article>
        <article className='experience__details'>
        <BsFillPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>Tailwind</h4>
        <small className='text-light'>Experienced</small>
        </div>
        </article>
        <article className='experience__details'>
        <BsFillPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>JavaScript</h4>
        <small className='text-light'>Experienced</small>
        </div>
        </article>
       </div>
      </div>
      <div className='experience__backend'>
      <h3>Backend Development</h3>
      <div className='experience__content'>
        <article className='experience__details'>
        <BsFillPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>NodeJs</h4>
        <small className='text-light'>Experienced</small>
        </div>
        </article>
        <article className='experience__details'>
        <BsFillPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>MySQL</h4>
        <small className='text-light'>Experienced</small>
        </div>
        </article>
        <article className='experience__details'>
        <BsFillPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>AWS</h4>
        <small className='text-light'>Experienced</small>
        </div>
        </article>  
        <article className='experience__details'>
        <BsFillPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>Python</h4>
        <small className='text-light'>Experienced</small>
        </div>
        </article>
        <article className='experience__details'>
        <BsFillPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>GraphQL</h4>
        <small className='text-light'>Experienced</small>
        </div>
        </article>   
       </div>
      </div>
      
      </div>
    </section>
  )
}

export default Skills