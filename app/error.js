'use client'
import React from 'react'

function Error({error,reset}) {
  return (
    <>
    <div className='text-2xl text-red-700'>
        {error.message} 
    </div>
    
        <button onClick={()=>reset()}>
            try again
        </button>
    </>
  )
}

export default Error
