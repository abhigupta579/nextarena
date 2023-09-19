import React from 'react'

import {
    Magnifier,
    GlassMagnifier,
   
  } from '@ricarso/react-image-magnifiers';

export default function Magnify(props) {
  
  return (
    <div>
  <GlassMagnifier
  imageSrc={props.image}
  imageAlt="Example"
  className='imgMag'
  />

    </div>
  )
}
