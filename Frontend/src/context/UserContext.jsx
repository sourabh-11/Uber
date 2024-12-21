import  {createContext, useState} from "react"

export const UserDataContaxt  = createContext()

const UserContext = ({children}) => {


    const [User, setUser] = useState({
        email:'',
        Fullname:{
            fname:'',
            lname:''
        }
    })


    
  return (
    <div>
        <UserDataContaxt.Provider>
            {children}
        </UserDataContaxt.Provider>
    </div>
  )
}

export default UserContext