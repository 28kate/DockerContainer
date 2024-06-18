import React from 'react';
import './about.css';
import profileImage from '../../assets/profile.jpeg';
import { BsAward } from 'react-icons/bs';
import { MdCastForEducation } from 'react-icons/md';
import { FaProjectDiagram } from 'react-icons/fa';

function AboutMe() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me__image'>
            
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <BsAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className='about__card'>
              <MdCastForEducation className='about__icon' />
              <h5>Education</h5>
              <small>Diploma- Applications Development</small>
            </article>
            <article className='about__card'>
              <FaProjectDiagram className='about__icon' />
              <h5>Projects</h5>
              <small>5+</small>
            </article>
          </div>
          <p>
            lorem30
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
