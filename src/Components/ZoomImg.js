import React ,{useCallback,useState} from 'react'
import Zoom from 'react-medium-image-zoom'

import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export default function ZoomImg(props) {
   
        const [isZoomed, setIsZoomed] = useState(false)
      
        const handleZoomChange = useCallback(shouldZoom => {
          setIsZoomed(shouldZoom)
        }, [])

  return (
    <div>
         <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
      <img
        alt="That wanaka tree, alone in the water near mountains"
        src={props.image}
        className='img-fluid'
      />
    </ControlledZoom>
    </div>
  )
};
