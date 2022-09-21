import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react'

function KarticaSlika({slika,naslov,opis,funkcija,dugme}) {
    return (
        <div className='cardBox'>
            <div className='imgBox'>
                <img src={slika} alt="slika kartice" />
            </div>
            <div className='content'>
                <h2>{naslov}</h2>
                <p>{opis}</p>
                <button style={{backgroundColor:"black",color:"white",padding:"5px"}} onClick={()=>{funkcija(slika);console.log(slika)}}>{dugme}</button>
            </div>
        </div>
    )
}

export default KarticaSlika
