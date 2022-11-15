import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { FcGoogle } from "react-icons/fc"

const Signup = ({ isOpen, setIsOpen }) => {


    const [userData, setUserData] = useState({
        email: "",
        password: "",
        fullName: ""
    })
    const handleChange = (e) => {
        setUserData((prev) => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const closeModal = () => {
        setIsOpen(false)
    }
    const submit = () => {
        closeModal()
        setUserData({ email: "", password: "", fullName: "" })
    }

    const googleSignUp = () => (window.location.href = "https:localhost:4000/auth/google")


    return <>
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                </Dialog.Title>
                                <div className='mt-2 flex flex-col gap-3 w-full'>
                                    <button onClick={googleSignUp} className='py-2 justify-center rounded-lg flex items-center gap-2 border w-full border-gray-400 bg-white text-gray-700 hover:bg-gray-100'>
                                        Sign Up with Google <FcGoogle />
                                    </button>
                                    <form className='flex flex-col gap-2'>
                                        <div className='w-full flex flex-col gap-2'>
                                            <label htmlFor="fullName">Full Name</label>
                                            <input type="text" id='fullName' value={userData.fullName} onChange={handleChange} placeholder="UserName..."
                                                className='w-full border border-gray-400 px-3 py-2 rounded-lg focus:border-zomato-400'
                                            />
                                        </div>
                                        <div className='w-full flex flex-col gap-2'>
                                            <label htmlFor="email">Email</label>
                                            <input type="text" id='email' value={userData.email} onChange={handleChange} placeholder="user@email.com"
                                                className='w-full border border-gray-400 px-3 py-2 rounded-lg focus:border-zomato-400'
                                            />
                                        </div>
                                        <div className='w-full flex flex-col gap-2'>
                                            <label htmlFor="password">Password</label>
                                            <input type="password" id='password' value={userData.password} onChange={handleChange} placeholder="*********"
                                                className='w-full border border-gray-400 px-3 py-2 rounded-lg focus:border-zomato-400'
                                            />
                                        </div>
                                        <div onClick={submit} className='w-full py-2 text-center cursor-pointer bg-zomato-400 text-white px-2 rounded-lg'>
                                            Sign In
                                        </div>
                                    </form>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    </>
}



export default Signup