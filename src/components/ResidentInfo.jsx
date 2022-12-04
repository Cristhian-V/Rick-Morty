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

    console.log(residentInfo)
    return (
        <article>
            <div>
                <img src={residentInfo?.image} alt="" />
            </div>
            <div>
                <h2>{residentInfo?.name}</h2>
                <p>{residentInfo?.status} - {residentInfo?.species}</p>
                <p>origin</p>
                <p>{residentInfo?.origin.name}</p>
                <p>episodes where appear</p>
                <p>{residentInfo?.episode.length}</p>
            </div>

        </article>
    )
}

export default ResidentInfo
