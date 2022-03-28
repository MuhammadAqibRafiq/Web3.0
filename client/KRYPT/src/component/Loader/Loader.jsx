import React from 'react'

const Loader = () => {
  return (
    <div className="flex justify-center items-center py-3">
      <span class="animate-ping absolute inline-flex h-10 w-10 rounded-full bg-sky-400 opacity-75"></span>
      <span class="relative inline-flex rounded-full h-5 w-5 bg-sky-500"></span>
    </div>
  )
}

export default Loader