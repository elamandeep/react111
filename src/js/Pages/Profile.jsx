import React, { useContext } from 'react'
import AddressBar from '../Component/Profilepage/AddressBar'
import ListBar from '../Component/Profilepage/ListBar'
import { UserContext } from '../Context/userContext'
import { Link,Route } from 'react-router-dom'

const Profile = () => {

    const { state: { singleUserData }, dispatch } = useContext(UserContext)

  console.log(singleUserData)
    return (
        <div className='w-full  h-full flex mt-5'>
             {<Route path="/:id/" element={<Profile />}></Route>? <Link to={"/"}>Back</Link>: " "}   
            <div className='border-r border-gray-300 h-full w-[40%]'>
                
                <ListBar {...singleUserData} />
            </div> 
            <div className=' h-full w-[60%]'>
                
                <AddressBar {...singleUserData} />
            </div>
        </div>
    )
}

export default Profile