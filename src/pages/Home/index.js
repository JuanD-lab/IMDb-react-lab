import React from 'react'
import DirectorsList from '../../components/Directors/directorsList'
import ListAll from '../../components/Home/ListAll'
import Navbar from '../../components/Navbar'

function Home() {
    return (
        <>
            <Navbar/>
            <ListAll />
            {/* <DirectorsList/> */}
        </>
    )
}

export default Home
