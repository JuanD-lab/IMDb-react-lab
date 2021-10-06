import React from 'react'

function Director({name, imgUrl, bio}) {
    return (
        <>
            <h2>{name}</h2>
            {imgUrl != null ? <img width="200px" src={imgUrl} alt={name}/> : "No Image"}
            <p>{bio}</p>
        </>
    )
}

export default Director
