import React from 'react'
import data from "./user.json"

const ListBar = ({ name, username, email, phone, website, company }) => {
    const mylist = [
        { title: "Username", data:  username },
        { title: "email", data: email },
        { title: "phoneNumber", data: phone },
        { title: "website", data: website },
    ]
    
    
    const scndlist = [
        { title: "Company Name", data: company?.name },
        { title: "catchPhrase", data: company?.catchPhrase },
        { title: "bs", data: company?.bs },]
    return (
        <div className='flex flex-col  w-full items-center h-full justify-center'>
            <img className='rounded-full w-[48%]' src="https://avatars.githubusercontent.com/u/103462720?v=4" alt="" />
            {name} 
            <div className='flex flex-col gap-2 border-b border-gray-300 py-3'>
                {
                    mylist?.map((el, i) => {
                        return <div key={i} className='flex gap-3 items-center justify-center'>
                            {`${el.title}   :`} 
                             {el.data} 
                        </div>
                    })
                }
            </div>
            <div className='flex flex-col gap-2  py-3'>
                {
                    scndlist?.map((el, i) => {
                        return <div key={i} className='flex gap-3 items-center justify-center'>
                          {`${el.title}   :`} 
                             {el.data}
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default ListBar