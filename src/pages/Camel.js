import React from 'react'
import './Camel.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ZoomImg from '@/Components/ZoomImg';

export default function Camel() {
  return (
    <div className='section camel bg-pan-left'>
      <div className='container'>
        <div className='row'>
            <div className='col-md-6 mt-4 colCamel'>
                <h1>CAMELBAK</h1>
                <h3>Owning hydration in almost all areas of active living, CamelBak turned to Digital Surgeons to help conquer a great challenge for their new Kudu packs the intense passion of mountain bikers. With Kudu&apos;s innovative spine protection, Digital Surgeons let riders know we “Got Your Bak” through an integrated campaign that built excitement for the now-safer experience of mountain biking, including celebrating the gnarliest descents on social media. CamelBak isn&apos;t just on the mountain now; they own it.</h3>
            </div>

            <div className='col-md-6 mt-4 colCamel'>
                <ZoomImg image='https://enterthearena.digitalsurgeons.com/img/img-modal-gnarly.png'/>
            </div>
        </div>
      </div>
    </div>
  )
}
