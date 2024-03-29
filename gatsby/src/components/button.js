import React from 'react'

function Button({button, filter}) {
    return (
        <div id="filter" className="buttons w-full max-w-lg flex flex-wrap flex-row space-x-4 space-y-4 mb-8 items-end text-left">
            {
                button.map((cat, i)=>{
                    return <button 
                            type="button" 
                            onClick={()=> filter(cat)} 
                            className={`btn h-8 w-max py-1 px-4 font-acuminPro font-medium uppercase text-black text-sm border-black border-2 rounded-full ${cat === 'solo' || cat === 'duet' || cat === 'ensemble' || cat === 'orchestra' ? `hover:bg-${cat}` : `hover:bg-black`} ${cat === 'solo' || cat === 'duet' || cat === 'ensemble' || cat === 'orchestra' ? `focus:bg-${cat}` : `focus:bg-black`} hover:text-white focus:text-white`}
                           >
                               {cat}
                            </button>
                })
            }
        </div>
    )
}

export default Button