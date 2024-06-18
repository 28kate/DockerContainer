import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function Upload() {
    const [title,setTitle]=useState('')
    const [image,setImage]=useState([])
    const [description,setDescription]=useState('')
    const [proj,setProj]=useState('')

const upload=()=>{
    const formData=new FormData()
    formData.append("file",image[0])
    formData.append("upload_preset", "czw6qqp8")
    axios.post(`https://api.cloudinary.com/v1_1/duf5btydy/image/upload`,formData).then((response)=>{
        const fileName=response.data.public_id

        axios.post("http://localhost:8080/posts",{title:title,image:fileName,description:description,project:proj}).then((response)=>{

        })
    })

}

  return (
    <div className='uploadForm'>
        <label>Title</label>
        <input type='text' onChange={(event)=>{
            setTitle(event.target.value)

        }}/>
    
        <input type='file' onChange={(event)=>{
            setImage(event.target.files)

        }}/>
        <label>Description</label>
        <input type='text' onChange={(event)=>{
            setDescription(event.target.value)

        }}/>
        <input type='text' onChange={(event)=>{
            setProj(event.target.value)

        }}/>
        <button onClick={upload}>Upload</button>
    </div>
  )
}

export default Upload