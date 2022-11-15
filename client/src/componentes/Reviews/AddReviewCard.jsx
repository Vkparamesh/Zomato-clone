import React, { useState } from 'react'
import ReviewsModel from './ReviewsModel'

const AddReviewCard = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [type, setType] = useState('')
    const openModel = () => {
        // if (!localStorage.zomatoUser) {
        //     return alert("Please Sign In to post a review")
        // }
        setIsOpen(true)
    }
    const getReviewType = (type) => {
        setType(type)
    }

    return <>
        <ReviewsModel isOpen={isOpen} setIsOpen={setIsOpen} type={type} />
        <h3 className='text-xl font-medium'>Rate your experience for </h3>
        <div className='flex items-center gap-3'>
            <div className='flex items-center gap-2 '>
                <input type={'radio'} name="review" id="dining" onChange={(each) => getReviewType(each.target.id)} />
                <label htmlFor='dining'>Dining</label>
            </div>
            <div className='flex items-center gap-2 '>
                <input type={'radio'} name="review" id="delivery" onChange={(each) => getReviewType(each.target.id)} />
                <label htmlFor='delivery'>Delivery</label>
            </div>
        </div>
        <button onClick={openModel} className="text-zomato-400 text-left">Write a review</button>
    </>
}

export default AddReviewCard