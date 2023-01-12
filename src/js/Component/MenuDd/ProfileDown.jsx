import { Fragment, useContext } from 'react'
import { Menu, Transition } from '@headlessui/react'
import DropItem from './DropItem'
import { UserContext } from '../../Context/userContext'


export default function ProfileDown() {
    const { state: { singleUserData } } = useContext(UserContext)
    const Title = ({ title }) => {
        return <p  > {title}</p >;
      };
    return (
        <Menu as="div" className="relative inline-block text-left mt-5 ml-40 ">
            <div>
                <Menu.Button className="inline-flex w-full justify-center rounded-md  bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm focus:outline-none ">
                    <div className=' w-max cursor-pointer flex justify-end gap-3 items-center'>
                        <img className='rounded-full w-[7%]' src="https://avatars.githubusercontent.com/u/103462720?v=4" alt="" />
                        <Title title={singleUserData?.name} />
                    </div >
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className=" absolute right-0 z-10 mt-2 w-[20vw] origin-top-right rounded-md bg-white shadow-lg focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>

                            <DropItem />
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
