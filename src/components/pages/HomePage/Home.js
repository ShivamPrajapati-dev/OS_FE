import React from 'react'
import College from '../../College'
import MainSection from '../../MainSection'
import {obj} from './Data'

function Home() {
    return (
        <>
            <MainSection {...obj} />
            <College />
        </>
    )
}

export default Home
