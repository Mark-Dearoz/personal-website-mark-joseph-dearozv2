import React from 'react'

const Page = props =>{
    return(
        <div className="page" style ={{backgroundImage: `url(${props.img})`}}>
            <button>{props.btn}</button>
        </div>
    )
}

export default Page