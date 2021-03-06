import React from 'react'
import './navMenu.css'

function navMenu(){
    return(
        <nav className="navMenu">
        <ul className="navMenu__lista">
            <li className="navMenu__item">
                <a className="navMenu__link" href="/">
                    Bem vindo(a): <br />
                    <strong>@{props.usuario}</strong>
                </a>
            </li>
            <li className="navMenu__item">
                <a className="navMenu__link" href="/">Página Inicial</a>
            </li>
            <li className="navMenu__item">
                <a className="navMenu__link" href="/hashtags">Hashtags</a>
            </li>
            <li className="navMenu__item">
                <a className="navMenu__link" href="/logout">Logout</a>
            </li>
        </ul>
    </nav>

    )
}
export default navMenu