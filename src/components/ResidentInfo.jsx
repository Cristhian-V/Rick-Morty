import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const ResidentInfo = ({ URL }) => {
    const [residentInfo, setResidentInfo] = useState()

    useEffect(() => {
        axios.get(URL)
            .then(res => setResidentInfo(res.data))
            .catch(err => console.log(err))
    }, [])


    return (
        <article className='residentCard'>
            <div>
                <img src={residentInfo?.image} alt="" />
            </div>
            <div>
                <h2 className='residentCard-title'>{residentInfo?.name}</h2>
                <p className='residentCard-status'>{residentInfo?.status} - {residentInfo?.species}</p>
                <p className='residentCard-titleOrigin'>origin</p>
                <p className='residentCard-Origin'>{residentInfo?.origin.name}</p>
                <p className='residentCard-titleEpisode'>episodes where appear</p>
                <p className='residentCard-episode'>{residentInfo?.episode.length}</p>
            </div>
 
        </article>
    )
}

export default ResidentInfo
