import React from 'react';
import './Players.css';
import SideNav from '@/Components/SideNav';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Players() {
  return (
    <div className='section players'>
      <SideNav/>
      <div className='container'>
        <div className='row'>
            <div className='col-md-7 mt-4 colPlayer'>
                <h3>THE PLAYERS</h3>
                <h1>THE COMPETITION IS FIERCE.<br/>
                   KILL THEM<br/> ALL.</h1>
                <p>If you&apos;re not playing to win, you&apos;ve already lost. But remember; marred by dirt and sweat as you may be, you&apos;re not just being compared to your competition, you&apos;re being compared to the best. So victory sure as hell won&apos;t come easy.</p>
                <Link href={'/Arccos'} className='playerBtn bounce-right'> Go To Arccos</Link>   
            </div>
        </div>
      </div>
    </div>
  )
}
