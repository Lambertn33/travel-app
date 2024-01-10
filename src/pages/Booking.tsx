import React from 'react'

import BookingLeft from '../components/booking/left/BookingLeft'
import BookingRight from '../components/booking/right/BookingRight'

const Booking = () => {
  return (
    <div className='mt-[186px] grid grid-cols-1 md:grid-cols-2'>
        <BookingLeft/>
        <BookingRight/>
    </div>
  )
}

export default Booking