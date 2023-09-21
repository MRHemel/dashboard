import React from 'react'
import revenue from '../../../../../assets/revenue.png'
import satisfaction from '../../../../../assets/satisfaction.png'
import target from '../../../../../assets/target.png'
const TotalRevenue = () => {
  return (
    <div className=" xl:grid  xl:grid-cols-[45%_1fr] pt-8 flex flex-col">
        <div className="rounded-[20px] drop-shadow-2xl w-full">
          <img src={revenue} className='w-full' alt="" />
        </div>

        <div className='xl:flex grid lg:flex '>
        <div className=" rounded-[20px] drop-shadow-2xl lg:w-1/2 ">
          <img src={satisfaction} className='w-full h-full' alt="" />
        </div>

        <div className=" rounded-[20px] drop-shadow-2xl lg:w-1/2">
          <img src={target} className='w-full h-full' alt="" />
        </div>
        </div>
      </div>
  )
}

export default TotalRevenue
