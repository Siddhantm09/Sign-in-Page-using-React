import React,{useState} from "react"


export const Login=(props)=>{
   const[email,setEmail]=useState('')
   const[pass,setPass]=useState('')

   const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(email);
   }


    return(
        <>
        <form onSubmit={handleSubmit}>
           
            <label htmlfor ="email">email</label>
             <input 
             value={email} 
             onChange={(e)=> setEmail(e.target.value)} 
             type="email" 
             placeholder="Enter your email" 
             id="email" 
             name="email"/>

             <label htmlfor ="password">password</label>
             <input 
             value={pass} 
             onChange={(e)=> setPass(e.target.value)}  
             type="password" 
             placeholder="Enter your password" 
             id="password" 
             name="password"/>
             <button type="submit">Log in</button>
        </form>
        <button>Don't have an Account? Register</button>
        </>
    )
}