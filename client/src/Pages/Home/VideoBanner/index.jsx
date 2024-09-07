import React, { useEffect, useState } from 'react'
import fetchData from '../../../Utils/fetchData'

export default function VideoBanner() {
    const [videoBanner,setVideoBanner]=useState()
    useEffect(()=>{
        (async()=>{
            const res=await fetchData('slider')
            setVideoBanner(res.sliders[0])
        })()
    },[])
    console.log(videoBanner)
  return (
    <div>VideoBanner</div>
  )
}
