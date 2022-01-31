import React from 'react'
import ShowCard from './ShowCard'
import IMAGE_NOT_FOUND from '../image/error404.png'
import { FlexGrid } from '../styled'
import {useShows} from './custom-hooks';
const ShowGrid = ({data}) => {
    const [starredShows,dispatchedShows]=useShows();
    return (
        <FlexGrid>{
            data.map(({show})=><ShowCard 
            return (
                <ShowCard 
                key={show.id} 
                id={show.id} 
                name={show.name} 
                image={show.image?show.image.medium:IMAGE_NOT_FOUND} 
                summary={show.summary}>
                />
            ))
        
            }
        </FlexGrid>
    )
}

export default ShowGrid
