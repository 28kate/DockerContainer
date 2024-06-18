import axios from 'axios'
import React, { useState } from 'react'

function PostVid() {
    const [description,setDescription]=useState('')
    const [video,setVideo]=useState([])
    const [proj,setProj]=useState('')

    const upload=()=>{
        const formData=new FormData()
        formData.append("file",video)
        formData.append("upload_preset", "czw6qqp8" )

        axios.post(`https://api.cloudinary.com/v1_1/duf5btydy/video/upload`,formData).then((response)=>{
            const fileName=response.data.public_id

            axios.post("http://localhost:8080/postVid", {description:description,video:fileName,project:proj}).then((response)=>{
                console.log(response.data)

            })
        })
    }
  

  return (
    <div className='uploadForm'>
        <input type='file' onChange={(event)=>{
            setVideo(event.target.files[0])

        }}/>
        <label>Description</label>
        <input type='text' onChange={(event)=>{
            setDescription(event.target.value)

        }}/>
        <label>Project</label>
        <input type='text' onChange={(event)=>{
            setProj(event.target.value)

        }}/>
        <button onClick={upload}>Upload</button>
    </div>
  )
}

export default PostVid