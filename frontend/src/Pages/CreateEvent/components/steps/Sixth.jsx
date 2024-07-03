import React from 'react'

export default function Sixth() {
  return (
    <div>
      <p className='text-lg font-montserratefont font-medium text-secondarytxt'>Check your event details carefully</p>
      <div className='flex gap-3 align-middle my-4 text-secondarytxt'>
        <span className='font-montserratefont font-semibold text-sm'>Occasion:</span>
        <span className='text-sm font-montserratefont'>Birthday Party</span>
      </div>
      <div className='flex gap-3 align-middle my-4 text-secondarytxt'>
        <span className='font-montserratefont font-semibold text-sm'>Venue:</span>
        <span className='text-sm font-montserratefont'>Moon House</span>
      </div>
      <div className='flex gap-3 align-middle my-4 text-secondarytxt'>
        <span className='font-montserratefont font-semibold text-sm'>Date:</span>
        <span className='text-sm font-montserratefont'>July 25, 2024</span>
      </div>
      <div className='flex gap-3 align-middle my-4 text-secondarytxt'>
        <span className='font-montserratefont font-semibold text-sm'>Theme Colors:</span>
        <span  className="flex items-center gap-2 px-2 py-1" style={{border:'2px solid #AAAAAA'}}>
            <span className='w-4 h-4 bg-white rounded-full'></span>
            <span className='text-sm font-montserratefont'>White</span>
        </span>
        <span  className="flex items-center gap-2 px-2 py-1" style={{border:'2px solid #AAAAAA'}}>
            <span className='w-4 h-4 bg-blue-400 rounded-full'></span>
            <span className='text-sm font-montserratefont'>Blue</span>
        </span>
      </div>
      <div className='flex gap-3 align-middle my-4 text-secondarytxt'>
        <span className='font-montserratefont font-semibold text-sm'>Decorations:</span>
        <span className='text-sm font-montserratefont'>Balloons, Satin</span>
      </div>
      <div className='flex gap-3 align-middle my-4 text-secondarytxt'>
        <span className='font-montserratefont font-semibold text-sm'>Number of Invitees:</span>
        <span className='text-sm font-montserratefont'>100 Guests</span>
      </div>
      <div className='flex gap-3 align-middle my-4 text-secondarytxt' >
        <span className='font-montserratefont font-semibold text-sm'>Invitation Card:</span>
        <span className='text-sm font-montserratefont px-2 py-1' style={{border:'2px solid #AAAAAA'}}>Preview Invitation Card</span>
      </div>
      <div className='flex gap-3 align-middle my-4 text-secondarytxt'>
        <span className='font-montserratefont font-semibold text-sm'>Food Menu:</span>
        <span className='text-sm font-montserratefont'>Hummus, Tabbouleh, Shawarma, Cocktails</span>
      </div>
      <div className='flex align-middle my-4 text-secondarytxt'>
        <span className='font-montserratefont  font-semibold text-sm W-50'>Additional Details:</span>
        <span className='text-sm font-montserratefont ps-3 w-3/4'>Please ensure the cake is gluten-free and include a birthday banner.</span>
      </div>
      <div className='flex gap-3 align-middle mt-4 text-secondarytxt'>
        <span className='font-montserratefont font-semibold text-sm'>Total Price:</span>
        <span className='text-sm font-montserratefont'>30,000,000 SP</span>
      </div>
    </div>
  )
}
