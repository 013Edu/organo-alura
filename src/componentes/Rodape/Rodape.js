import './Rodape.css'
import React from "react"

export const Rodape = () => {
    // JSX
    return (
       <footer>
        <div className='footer'>
        <ul className='lista'>
            <li> <a href='#' > <img src='/imagens/fb.png' /> </a> </li>
            <li> <a href='#' > <img src='/imagens/tw.png' /> </a> </li>
            <li> <a href='#' > <img src='/imagens/ig.png' /> </a> </li>
        </ul>
        <img className='imagem' src='/imagens/logo.png' />
        <h3 className='texto'>Desenvolvido por Alura.</h3>
        </div>
      
       </footer>
    )
}