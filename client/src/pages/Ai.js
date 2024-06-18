import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Image} from 'cloudinary-react'


function Ai() {
  const [aipost,setAipost]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:8080/posts").then((response)=>{
      setAipost(response.data)
    })
  })
  return (
    <div>
      {aipost.map((value,key)=>{
        return(
          <>
          <div key={key}>{value.title}</div>
          <Image cloudName="duf5btydy" publicId={value.image} />
          <div>{value.description}</div>
          

          </>
        )

      })}
    </div>
  )
}

export default Ai