import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({x:0, y:0})

    useEffect(() => {
    //   console.log('Message Mounted');
    const onMouseMove = ({x,y}) => {
        // console.log('coords :>> ', coords);
        setCoords({x,y})
    }
    // window.addEventListener( 'mousemove', (event) => {
    //     // console.log('event :>> ', event);
    // });
    window.addEventListener( 'mousemove', onMouseMove);
    
    return () => {
        // console.log('Message Unmounted');
        window.removeEventListener( 'mousemove', onMouseMove);
      }
    }, [])
    

  return (
    <>
        <h3>User already exist</h3>
        <div>
            coords: {JSON.stringify(coords)}
        </div>
    </>
  )
}
