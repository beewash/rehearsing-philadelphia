import React from 'react'

const HiddenPage = () => (
  <div className="z-1 absolute w-1/2 h-1 top-0 left-0 flex-row space-x-4">
    <div className="w-full h-full bg-that-grey hover:bg-that-grey"></div>
    <div className="w-full h-full bg-solo-yellow hover:bg-solo-yellow"></div>
    <div className="w-full h-full bg-duet-red hover:bg-duet-red"></div>
    <div className="w-full h-full bg-ensemble-blue hover:bg-ensemble-blue"></div>
    <div className="w-full h-full bg-orchestra-green hover:bg-orchestra-green"></div>
    <div className="row-span-1 md:row-span-1 lg:row-span-1"></div>
    <div className="row-span-2 md:row-span-2 lg:row-span-2"></div>
    <div className="col-span-1 md:col-span-1 lg:col-span-1 "></div>
    <div className="col-span-2 md:col-span-2 lg:col-span-2"></div>
    <div className="col-span-3 md:col-span-3 lg:col-span-3"></div>
    <div className="col-span-4 md:col-span-4 lg:col-span-4"></div>
    <div className="col-span-5 md:col-span-5 lg:col-span-5"></div>
    <div className="hover:text-black"></div> 
    <h1>h1</h1>
    <h2>h2</h2>
    <h3>h3</h3>
    <h4>h4</h4>
    <h5>h5</h5>
    <div class="slick-prev"></div>
    <div class="slick-next"></div>
    <div class="slick-dots"></div>
  </div>
)

export default HiddenPage
