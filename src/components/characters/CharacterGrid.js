import React from 'react'
import Spinner from '../ui/Spinner'

import CharacterItem from './CharacterItem'

const CharacterGrid = ({isLoading, items}) => {
    return isLoading ? (<Spinner />) : (<section className='cards'>
        {items.map((item, index) => {
            return (<CharacterItem key={index} item={item} />)
        })}
    </section>)
}

export default CharacterGrid
