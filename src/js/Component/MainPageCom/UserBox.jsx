import React from 'react'
import { Link } from 'react-router-dom'


const UserBox = ({ name,id, handleClick }) => {
    const Title = ({ title }) => {
        return <p  > {title}</p >;
      };
    return (
        <>
            <Link to={`/user/${id}`}>
            
            <img className='rounded-full w-[10%]' src="https://avatars.githubusercontent.com/u/103462720?v=4" alt="" />
            <div className='text-md '>
                <Title title={name} />
            </div>
            </Link>
        </>
    )

}

export default UserBox