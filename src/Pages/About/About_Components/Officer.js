import React from 'react'



function Officer (props) {
    //takes in title, month, day, locale, desc, and link
    let image = props.image;
    let name = props.name;
    let title = props.title;
    let college = props.college;
    let hometown = props.hometown;
    
    let content = 
    <div className="flex flex-wrap center justify-center">
        <div className="p-4 justify-center align-middle">
            <img src={image} className="flex items-center justify-center h-auto rounded-full border-none" width="160px"/>
            <h1 className="pt-1 text-center">{name}</h1>
            <h1 className="text-center">{title}</h1>
            <h1 className="text-center">{college}</h1>
            <h1 className="text-center">{hometown}</h1>
        </div>
    </div>

    return (
        <h1>
            {content}
        </h1>
    )
}

export default Officer