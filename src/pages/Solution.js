import React from 'react';
import './Solution.css';
import Link from 'next/link';
import SideNav from '@/Components/SideNav';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Solution() {
  return (
    <div className='section solution'>
        <SideNav/>
      <div className='container solution'>
        <div className='col-md-6 mt-4 colSolution'>
            <h3>THE SOLUTION</h3>
            <h1>DIGITAL SURGEONS</h1>
            <p>Here we are. Experiencers, designers, doers, dreamers, makers, all. We are not the bloated beasts to be ridden and disregarded. We are mighty. We are your champions of growth and experience. We look forward, dare great things, and win glorious triumphs. So never forget how menacing and instrumental so few can be.

            Now, do you want us to keep beating our chests, or do you want to...</p>
            <Link href={'/Form'} className='getBtn'>Get In Touch</Link>
        </div>
      </div>
    </div>
  )
}
