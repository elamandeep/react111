import React from 'react'


const AddressBar = ({ address }) => {
    const TitleWithLessFontWeigth = ({ title }) => {
        return (
            <p className='text-[16px] font-[400] text-gray-400'>{title}</p>
        )
    }
    const arr = [
        { title: "Street", data: address?.street },
        { title: "Suite", data: address?.suite },
        { title: "City", data: address?.city },
        { title: "Zipcode", data: address?.zipcode },]
        const TitleFontWeight = ({ title }) => {
            return (
                <p className='text-[16px] font-[400] text-gray-800'>{title}</p>
            )
        }
        
    return (
        <div className='flex flex-col gap-4'>
            <div className='pl-9 mt-2'>
                <TitleWithLessFontWeigth title="Address:" />
            </div>
            <div className='ml-[70px] flex flex-col gap-1'>
                {
                    arr?.map((el, i) => {
                        return <div key={i} className='flex gap-3 items-center'>
                            <TitleWithLessFontWeigth title={`${el.title}   :`} />
                            <TitleFontWeight title={el.data} />
                        </div>
                    })
                }
            </div>
            <div className='flex flex-col w-full justify-center items-center gap-1'>
                <img className='w-[50%]' src="https://user-images.githubusercontent.com/107462720/210083129-f7d59313-06e0-4e39-bffd-107793a6da12.jpg" alt="" />
                <div className='flex flex-row-reverse w-[80%] m-[auto]  gap-4 text-[12px]'>
                    <div className='flex gap-2'>
                        <p className='text-gray-400'>Lat:</p>
                        <p>{address?.geo?.lat}</p>
                    </div>
                    <div className='flex gap-2'>
                        <p className='text-gray-400'>Long:</p>
                        <p>{address?.geo?.lng}</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AddressBar