import React, { useState } from 'react'
import axios from 'axios'

function Login() {
    const [userName,setUserName]=useState('')
    const [password,setPassword]=useState('')

    const login=()=>{
        axios.post('http://localhost:8080/users/login',{userName:userName,password:password}).then((response)=>{
            if(response.data.error){
                alert(response.data.error)
            }
            else{
                localStorage.setItem("accessToken",response.data.token)
            }

        })
    }

  return (
    <div className='loginform'>
        <div className='loginformcont'>
            <div>
                <input type='text' onChange={(event)=>{
                    setUserName(event.target.value)

                }}/>
                <input type='password' onChange={(event)=>{
                    setPassword(event.target.value)

                }}/>
                <button onClick={login}>Login</button>

            </div>
        </div>
    </div>
  )
}

export default Login