import React from 'react'
import { VscLoading } from 'react-icons/vsc'

import Card from '../Card/Card'

export default function Cards({ciudades, onClose}) {
    console.log(ciudades);
    if(ciudades){
        return (
            <>
                {ciudades.map(el => <Card
                key={el.id} 
                name={el.name} 
                min={el.min} 
                max={el.max} 
                img={el.img} 
                onClose={onClose} 
                id={el.id}
                />)}
            </>
        )
    } else {
        return (
            <VscLoading/>
        )
    }
}



