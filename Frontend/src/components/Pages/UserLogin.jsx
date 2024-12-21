import { Link } from "react-router-dom"
import { useState } from "react"


const UserLogin = () => {
  const [Email, setEmail] = useState('');

  const [Password, setPassword] = useState('');

  const [Usedata, setUsedata] = useState({});

   
  const hanglesubmit =(e) =>{
    e.preventDefault();
    console.log(Email,Password);
    setUsedata({
      Email:Email,
      Password:Password
    })
    console.log(Usedata);
    
    setEmail("")
    setPassword("")
  }
 

  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img className="w-20 m-5 ml-5" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <form onSubmit={hanglesubmit} >
          <h2 className="text-xl mb-2">Whats your Email</h2>
          <input
            type="email"
            value={Email}
           onChange={(e)=>{
              setEmail(e.target.value)
           }}
            required
            className="bg-[#eeee] mb-7 w-full px-5 py-3 placeholder:text-base border rounded  "
            placeholder=" Enter the mail" />
          <h2 className="text-xl mb-2" >Enter the Password</h2>
          <input type="password"
            required
            value={Password}
            onChange={(e)=>{
               setPassword(e.target.value)
            }}
            className="bg-[#eeee] mb-7 w-full px-5 py-3 placeholder:text-base border rounded text-lg "
            placeholder="Enter the Password" />
          <button className="bg-[#111] text-white mb-7 w-full px-5 py-3 placeholder:text-base border rounded " >Login</button>
          <p className="text-center">New Here?  <Link to='/signup' className="text-blue-300">Creat new Acoout</Link></p>


        </form>
      </div>
      <div>
        <Link to='/Captain-login ' className="bg-lime-600 flex justify-center items-center text-white mb-7 font-semibold   w-full px-5 py-3 placeholder:text-base border rounded "  >Singn as Captin</Link>
      </div>

    </div>
  )
}

export default UserLogin 