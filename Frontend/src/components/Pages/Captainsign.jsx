
import { Link } from "react-router-dom"
import { useState } from "react";


const Captainsign = () => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('');
  const [fname, setfname] = useState(''  );
  const [lname, setlname] = useState('');
  const [usedata, setusedata] = useState({});

  
  const submithander =(e) =>{
    e.preventDefault();
   console.log(email,password,fname,lname);
   setusedata({
    fullname:{
      fname:fname,
    lname:lname,
    },
    email:email,
    password:password
   })
   console.log(usedata);
   
   setemail("")
   setpassword("")
   setfname("")
   setlname("")
   
  }

  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img className="w-[150px] m-5 ml-5" src="https://static.vecteezy.com/system/resources/previews/027/127/451/non_2x/uber-logo-uber-icon-transparent-free-png.png" alt="" />
        <form  onSubmit={submithander} >
          <h2 className="text-xl mb-2">Whats your Name</h2>

          <div className="flex gap-3">
            <input
              type="text"
              value={fname}
              onChange={(e)=>{
                setfname(e.target.value)
              }}
              required
              className="bg-[#eeee] mb-7 w-1/2 px-5 py-3 placeholder:text-base border rounded  "
              placeholder=" First Name" />
            <input
              type="text"
              value={lname}
              onChange={(e)=>{
                setlname(e.target.value)
              }}
              required
              className="bg-[#eeee] mb-7 w-1/2 px-5 py-3 placeholder:text-base border rounded  "
              placeholder=" Lat Name" />
          </div>
          <h2 className="text-xl mb-2">Whats your Email</h2>
          <input
            type="email"
            value={email}
            onChange={(e)=>{
              setemail(e.target.value)
            }}
            required
            className="bg-[#eeee] mb-7 w-full px-5 py-3 placeholder:text-base border rounded  "
            placeholder=" Enter the mail" />
          <h2 className="text-xl mb-2" >Enter the Password</h2>
          <input type="password"
            required
            value={password}
            onChange={(e)=>{
              setpassword(e.target.value)
            }}
            className="bg-[#eeee] mb-7 w-full px-5 py-3 placeholder:text-base border rounded text-lg "
            placeholder="Enter the Password" />
          <button className="bg-[#111] text-white mb-7 w-full px-5 py-3 placeholder:text-base border rounded " >Login</button>
          <p className="text-center">Already have account?  <Link to='/login' className="text-blue-300">Login here</Link></p>


        </form>
      </div>
      <div>
        <p className="text-[6px]">Lorem ipsum dolor, <span className="underline">sit amet consectetur adipisicing eli</span> t. Neque quo velit, reiciendis aspernatur ullam quam non, fugit dolore necessitatibus, aut libero doloribus eos error corrupti dolor aliquid culpa eum debitis quisquam odio nam!</p>
      </div>

    </div>
  )
}

export default Captainsign