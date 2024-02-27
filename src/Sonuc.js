import React, { useEffect, useState } from 'react'
import ManGif from './images/man-scan.gif'

const Sonuc = (props) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {loading ? (
                <div className='container text-center'>
                    <img className='man-scan' src={ManGif} alt='Man' />
                    <h3 className='my-3'>ANALİZ YAPILIYOR...</h3>
                </div>
            ) : (
                <div className='container main-container mx-auto'>
                    <div className='flex justify-content-center align-items-center'>
                        <h2 className='my-2'>{props.baslik}</h2>
                        <p>{props.aura}</p>
                    </div>
                </div>
            )}
        </div>

    )
}

export default Sonuc
