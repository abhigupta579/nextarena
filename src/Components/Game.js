import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Game.css';
import Link from 'next/link';
import SideNav from './SideNav';
import { motion } from "framer-motion";


export default function Game() {
  return (
    <div className='section game kenburns-top'>
      <SideNav/>
      <div className='container'>
        <div className='row'>
            <div className='col-md-8 colGame text-white'>
                <h3>THE GAME</h3>
                <h1>WITHOUT EXPERIENCES, YOU&apos;RE NOTHING.</h1>
                <p>Experiences forever bind you to your fans. Its what transforms a company into a brand. You offer experiences, build emotion, and create lifelong bonds. Or, you die.</p>
                <Link href={'/Camel'} className='gameBtn heartbeat'>Click</Link>
            </div>
        </div>
      </div>
    </div>
  )
}
