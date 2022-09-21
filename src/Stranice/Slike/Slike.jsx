import React,{useState} from 'react';
import "./Slike.css";
import KarticaSlika from '../../Elementi/KarticaSlika/KarticaSlika';
function Slike() {
    var slike=[
        "https://picsum.photos/id/1006/612/612",
        "https://picsum.photos/id/1011/612/612",
        "https://picsum.photos/id/1022/612/612",
        "https://picsum.photos/id/10/612/612",
        "https://picsum.photos/id/1021/612/612",
        "https://picsum.photos/id/1019/612/612",
        
    ];
    const [korpa,setKorpa]=useState([]);
    function unesiNoviElement(link){
        setKorpa([...korpa,link]);
        console.log(korpa);
    }
    function izbaciElement(link1){
        setKorpa(korpa.filter(link=>link!==link1));
        console.log(korpa);
    }
    var i=0,i1=0;
    return (
        <div id='slike'>
            <h1 className='naslovi'>Lokacije</h1>
            <div className='galerija'>
                { slike.map((slika)=>(
                    <KarticaSlika key={++i} slika={slika} naslov={"Lokacija"} opis={"Opis lokacije: "} funkcija={unesiNoviElement} dugme={"Dodaj u plan"}/>
                ))}
            </div>
            <h1 className='naslovi'>Dodato u plan</h1>
            <div className='galerija'>
                { korpa.map((slika)=>(
                    <KarticaSlika key={++i1} slika={slika} naslov={"Dodato u plan putovanja"} opis={"Performanse Automobila"} funkcija={izbaciElement} dugme={"Izbaci iz korpe"}/>
                ))}
            </div>
        </div>
    )
}

export default Slike
