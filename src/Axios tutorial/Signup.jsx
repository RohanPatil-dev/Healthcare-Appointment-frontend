import React,{useState} from "react"

export default function Signup() {

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

  return (
    <>
     <div>
        <h1>Register</h1>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name} onChange={(event)=>{return setName(event.target.value)}}/>

        <br />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={(event)=>{return setEmail(event.target.value)}}/>

<br />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={(event)=>{return setPassword(event.target.value)}}/>

        <br />

        <button>Signup</button>
     </div>
    </>
  )
}