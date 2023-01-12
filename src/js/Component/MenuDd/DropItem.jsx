import React, { useContext } from 'react'
import { UserContext } from '../../Context/userContext'

import UserBox from '../MainPageCom/UserBox'
import data from "./user.json";
import { useState } from 'react'
import { Link } from 'react-router-dom'

const DropItem = () => {
    const { state: { singleUserData }, dispatch } = useContext(UserContext)
    const data = require('../../user.json');
    console.log(data.users);
    console.log("hello");
    const [userData, setData] = useState(data.users)
    const Title = ({ title }) => {
        return <p  > {title}</p >;
      };

    return (
        <div className=' flex flex-col justify-center items-center gap-2 pb-3'>
            <img className='rounded-full' src="https://avatars.githubusercontent.com/u/103462720?v=4" alt="" width={'50% '} />
            < Title title={singleUserData?.name} />
            <p className='text-[14px] text-gray-400'>{singleUserData?.email}</p>
            <div className='mx-5 border-t border-gray-300 mt-3'>
                {
                    userData.slice(0, 2)?.map((el, i) => {
                        return(
                            <>
                                <Link to={`/user/${el.id}`}>
                                    <div>
                                        <h1>{el.name}</h1>
                                    </div>
                                </Link>
                            </>
                        )
                    })
                }
            </div>
            <button className='mt-4 rounded-[10px] px-1 py-1 text-white bg-[blue]'>
                <Link to={"/"}>Sign out</Link>
            </button>
        </div >
    )
}

export default DropItem