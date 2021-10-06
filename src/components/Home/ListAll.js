import React, { useEffect, useState } from 'react'
import getData from '../../services/getData'

function ListAll() {
    const [data, setData] = useState([])
    useEffect(() => {
        getData().then(res => setData(res))
    }, [])
    return (
        <div>
            {data.map((el) => {
                return (
                    <h2
                        
                    > {el.biography}</h2>
                );
            })}
        </div>
    )
}

export default ListAll
