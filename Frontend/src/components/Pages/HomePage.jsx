import { Link } from "react-router-dom"


const HomePage = () => {
  return (
    <div>
      <div className=" bg-cover bg-right  bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen w-full flex flex-col justify-between ">
        <img className="w-20 mt-5 ml-5" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <div className="bg-white flex justify-center items-center flex-col py-4 px-5">
          <h2 className="text-3xl font-bold mb-4">Geting start with uber</h2>
          <Link to='/login' className="bg-black text-white flex justify-center items-center py-4 rounded font-bold text-xl w-full">Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage