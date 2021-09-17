import React from 'react'

const HiddenPage = () => (
  <div className="z-1 absolute w-1/2 h-1 top-0 left-0 flex-row space-x-4">
    <div className="w-full h-full bg-solo-yellow hover:bg-solo-yellow"></div>
    <div className="w-full h-full bg-duet-red hover:bg-duet-red"></div>
    <div className="w-full h-full bg-ensemble-blue hover:bg-ensemble-blue"></div>
    <div className="w-full h-full bg-orchestra-green hover:bg-orchestra-green"></div>
    <div className="row-span-1"></div>
    <div className="row-span-2"></div>
    <div className="col-span-1"></div>
    <div className="col-span-2"></div>
    <div className="col-span-3"></div>
    <div className="col-span-4"></div>
    <div className="col-span-5"></div>
  </div>
)

export default HiddenPage
