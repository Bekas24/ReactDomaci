import React from 'react'
import "./Kontakt.css"
function Kontakt() {
    return (
        <div id='kontakt' >
            <div id='container1'>
                <div id='contact-box'>
                    <div id="left">

                    </div>
                    <div id="right">
                        <h2>Kontaktirajte za pomoc</h2>
                        <input type="text" className='field' placeholder='Vase ime'/>
                        <input type="email" className='field' placeholder='Vas e-mail' />
                        <textarea className='field area' placeholder='Poruka'></textarea>
                        <button className='btn'>Posalji</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Kontakt
