import React from 'react';
import './Arccos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ZoomImg from '@/Components/ZoomImg';
import Magnify from '@/Components/Magnify';
import { GlassMagnifier } from '@vanyapr/react-image-magnifiers';
import { useEffect } from 'react';
import $ from 'jquery';


export default function Arccos() {

  useEffect(()=>{
    $(document).ready(function(){
      
    })
  })

  return (
    <div className='section color-change-5x arcoss'>
      <div className='container'>
        <div className='row'>
          {/* <button id='btn1'>close</button> */}
            <div className='col-md-6 mt-4 colArcoss' id='mainDiv'>
                <h1>ARCCOS</h1>
                <p>With an ambition to disrupt the centuries-old game of golf, Arccos turned to Digital Surgeons to take an idea and mold it into a never-before-seen technology experience that would quickly break through a saturated industry. Beginning with the name (Arccos being the measure of a swings arc), Digital Surgeons developed not only a new brand, but an entire digital user experience that would transform the way the game was played. The competition wasn&apos;t just crushed; golf itself was entirely changed, with Arccos users playing on-average two and a half more rounds per month with the new technology.</p>
            </div>

            <div className='col-md-6 mt-4 colArcoss'>
                {/* <img src='https://enterthearena.digitalsurgeons.com/img/img-modal-arccos.png' className='img-fluid'/> */}
               <Magnify image='https://enterthearena.digitalsurgeons.com/img/img-modal-arccos.png'/>
            </div>  
        </div>  
      </div>
    </div>
 
 )

}
