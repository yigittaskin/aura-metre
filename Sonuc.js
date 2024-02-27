import React from 'react'
import ManGif from './images/man-scan.gif'

const Sonuc = (props) => {
    return (
        <div className='container main-container mx-auto'>
            <div className='flex justify-content-center align-items-center'>
                <img className='man-scan' src={ManGif} alt='Man' />
                <h2 className='my-2'>{props.baslik}</h2>
                <p>{props.aura}</p>
            </div>
        </div>
    )
}

export default Sonuc
