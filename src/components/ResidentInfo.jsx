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
            <p className='residentCard-status'>{residentInfo?.status}</p>
            <div>
                <img src={residentInfo?.image} alt="" />
            </div>
            <div className='recidentCard-info'>
                <div>
                    <h2 className='residentCard-name'>{residentInfo?.name}</h2>
                    <hr />
                </div>
                <div>
                    <p className='residentCard-titleSpecie'>SPECIE</p>
                    <p className='residentCard-specie'>{residentInfo?.species}</p>
                </div>
                <div>
                    <p className='residentCard-titleOrigin'>ORIGIN</p>
                    <p className='residentCard-Origin'>{residentInfo?.origin.name}</p>
                </div>
                <div>
                    <p className='residentCard-titleEpisode'>EPISODES WHERE APPEAR</p>
                    <p className='residentCard-episode'>{residentInfo?.episode.length}</p>
                </div>
            </div>

        </article>
    )
}

export default ResidentInfo
